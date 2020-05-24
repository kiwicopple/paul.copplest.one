---
date: 2020-05-23
description: Live updating user data stores.
---

# Realtime User Store

This started as just a [bug/feature](https://github.com/supabase/supabase/issues/64) Supabase needs to implement. Now it's turning into a [challenge](https://github.com/supabase/supabase/issues/65).

## Problem

The problem is this: how can we implement a live-updating user store (like MobX) that responds to changes in a database. 

I originally got this idea for [GraphQL Live Queries](https://www.graphile.org/postgraphile/live-queries/), and I'm exploring options to combat [performance concerns](https://www.graphile.org/postgraphile/live-queries/#when-not-to-use-live-queries).

## Option

Imagine a user visited your website, and you fetched all their data:

```js
const data = 
    supabase
    .from('users') 
    .eq('id', '10')                 
    select(`
        id, name,
        organizations (             
            id, name, 
            projects (              
                id, name
            ) 
        )
    `)
```

Great! Now they have everything:

```js
let store = {
    id: 'user1', 
    name: 'Paul', 
    organizations: [
        {
            id: 'org1', 
            name: 'Org 1',
            projects: [ { id: 'proj1', name: 'Project1' } ]
        }
        {
            id: 'org2', 
            name: 'Org 2',
            projects: [ { id: 'proj2', name:  'Project 2' }  ]
        }
    ]
}
```

We could wrap a whole `app` in this store so that it's accessible anywhere - like Redux/MobX.

But now what if their data changes? What if someone on another browser updates the `name` of `org1`? Then they have stale data. We would need to refetch the data. Or ... perhaps they could have a live graph, that is always refreshed when changes occur? 

Perhaps we could change the `select` to a `subscribe`:

```js
// when a customer subscribes to a graph
const sub = 
    supabase
    .from('users') 
    .eq('id', '10')                 
    subscribe(`
        id, name,
        organizations (             
            id, name, 
            projects (              
                id, name
            ) 
        )
    `);
```

On first fetch, the data comes from PostgREST. This handles all the the complicated work: deep nesting, auth etc. We receive back the same store of data:

```js
let store = {
    id: 'user1', 
    name: 'Paul', 
    organizations: [
        {
            id: 'org1', 
            name: 'Org 1',
            projects: [ { id: 'proj1', name: 'Project1' } ]
        }
        {
            id: 'org2', 
            name: 'Org 2',
            projects: [ { id: 'proj2', name:  'Project 2' }  ]
        }
    ]
}
```

If we normalized this into a map, it would look *something* like this:

```js
let normalized = {
    users: {
        '1': {
            id: 1,
            name: 'Paul',
        }
    },
    organizations: {
        'org1': {
            id: 'org1',
            name: 'Org 1',
            user_id: 1
        },
        'org2': {
            id: 'org2',
            name: 'Org 2',
            user_id: 2
        },
    },
    projects: {
        'proj1': {
            id: 'proj1',
            name: 'Project 1',
            organization_id: 1
        },
        'proj2': {
            id: 'proj2',
            name: 'Project 2',
            organization_id: 2
        },
    }
}

```

From here we can deduce that the user should have the following subscriptions: 

```js
subscriptions = [
  "public:users:id.eq.user1",
  "public:organizations:id.eq.org1",
  "public:projects:id.eq.proj1",
  "public:projects:id.eq.proj2",

  // FK relationships
  "public:organizations:user_id.eq.user1",
  "public:projects:organization_id.eq.org1",
  "public:projects:organization_id.eq.org2",
];
```
We need to add the foreign key relations here too (more on that later).

Now, we need to keep track of these rules, so we need some middleware. The middleware would handle this subscription, and all other subscriptions. Here is an example of how it would look with 2 subscribers `foo-foo` and `bar-bar` (where both users belong to `org1`):

```js
subscriptions = [
  "public:users:id.eq.user1": [ 'foo-foo' ]
  "public:organizations:id.eq.org1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:id.eq.proj1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:id.eq.proj2": [ 'foo-foo' ],

  // FK relationships
  "public:organizations:user_id.eq.user1": [ 'foo-foo' ],
  "public:organizations:user_id.eq.user2": [ 'bar-bar' ],
  "public:projects:organization_id.eq.org1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:organization_id.eq.org2": [ 'foo-foo' ],
];
```

It looks like a simple KV store, so could be something fast like Redis. When a new subscriber connects, we add the rules to Redis, when they disconnect we remove the rules.

## When a new project is inserted

Now let's assume someone creates a new Project, which belongs to `org2`:


```js
const event = {
    type: 'INSERT',
    schema: 'public',
    table: 'projects',
    new: {
        id: 'proj3',
        name: 'Project 3',
        organization_id: 'org2',
    }
}
```

Because it's an insert, we go through the FK rules looking for any matching criteria, and we come up with this rule:

```js
"public:projects:organization_id.eq.org2": [ 'foo-foo' ]
```

So we send the event to the `'foo-foo'` subscriber, and we update the rules:

```js
subscriptions = [
  "public:users:id.eq.user1": [ 'foo-foo' ]
  "public:organizations:id.eq.org1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:id.eq.proj1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:id.eq.proj2": [ 'foo-foo' ],
  "public:projects:id.eq.proj3": [ 'foo-foo' ], // New rule

  // FK relationships
  "public:organizations:user_id.eq.user1": [ 'foo-foo' ],
  "public:organizations:user_id.eq.user2": [ 'bar-bar' ],
  "public:projects:organization_id.eq.org1": [ 'foo-foo', 'bar-bar' ],
  "public:projects:organization_id.eq.org2": [ 'foo-foo' ], 
];
```


## When an existing organization is updated

Now let's assume that there is an event which happens: the `name` of `org1` is updated to `Organization 1`. An event like this is generated:

```js
const event = {
    type: 'UPDATE',
    schema: 'public',
    table: 'organization',
    new: {
        id: 'org1',
        name: 'Org 1',
    }
}
```

Because it's an update, we go through the PK rules looking for any matching criteria, and we come up with this rule:

```js
"public:organizations:id.eq.org1": [ 'foo-foo', 'bar-bar' ]
```

So we send the event to both subscribers: `'foo-foo'` and `'bar-bar'`. No update to the rules are needed!


## Challenges

*Column names*

In the real world, people don't always use column names like this. We would need some metadata about the columns. We receive column metadata in the `WAL` stream, but I need to confirm that it has the correct details. If it doesn't, we would need to build this schema/graph upon connecting to the database (by introspecting the schema).

*Many to many joins*

Notice that the `organizations` has a `foreign key` of `user_id`. This is actually false. There is a many to many join between these two tables. The foreign key for both goes through a `members` table, so really we need a subscription to that table so that we know when a user is added / removed to an organization. How do we do this?


 ## Potential resources

 - [Noria](https://github.com/mit-pdos/noria): Rust library for dynamic, partially-stateful dataflow
 - [Noria whitepaper](https://jon.tsp.io/papers/osdi18-noria.pdf)
 - [Materialize](https://materialize.io/) - these guys have built a whole business around this (very [popular](https://news.ycombinator.com/item?id=22359769) on HN) - although they do a lot more than this.
 - [Incremental View Maintenance](https://www.postgresql-archive.org/Implementing-Incremental-View-Maintenance-td6064280.html): someone is developing a patch for postgres that implements incrementally updating/materializing views, although there are no `WAL` events for materialized views