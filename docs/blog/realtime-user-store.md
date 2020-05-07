



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

// We first fetch using PostgREST. This returns something like this (PK's formatted for readability)
let store = `
        id: 'user1', 
        name: 'Paul', 
        organizations [
            {
                id: 'org1', 
                name: 'Org 1',
                projects: [ { id: 'proj1', 'Project1' }, { id: 'proj2', 'Project 2' },  ]
            }
            {
                id: 'org2', 
                name: 'Org 2',
                projects: [ { id: 'proj3', 'Project 3' }, { id: 'proj4', 'Project 4' },  ]
            }
        ]
    `

// From here we can deduce that the user should have the following subscriptions

subscriptions = [
  "public:users:id.eq.user1",
  "public:organizations:user_id.eq.user1",
  "public:projects:organization_id.eq.org1",
  "public:projects:organization_id.eq.proj3",
];

//*simple example which assumes no "through joins", like a many-to-many table

/**
 * Case: update to the User in the database
 * Event received: { old: {...}, new: {id: 'user1', name: 'Fred' } }
 */

// When this event is received, we update the "store". 


/**
 * Case: update to the User in the database on channel 
 * Event received: { old: {...}, new: {id: 'user1', name: 'Fred' } }
 */
 
 ```