# Today I Learned

A collection of quick tips that I learn, undeserving of a full page write up.

**Contents**

[[TOC]]

## Algorithms


### Debounce and Throttle

[Source](https://css-tricks.com/debouncing-throttling-explained-examples/)

Useful for when a lot of events are triggered within a short amount of time. e.g.:

- Someone is creating a new username and you need to lookup whether it is unique
- A user is searching and as they type you call a "search()" function
- Fetching more blog posts as a user is scrolling

**Debounce**

Debounce will wait until you have *after* finished calling a certain function numerous times, and group all of those functions together. It is good for the search example above - you only want to call the function when the user has stopped typing. The *after* part is key here - if a user kept typing consistently for an hour, the function would only be called once at the end of that hour.

**Throttle**

Throttle will call the function, but only once per interval that you specify. A good use for this would be when a user is writing a blog post and you want to save it every five seconds (while they are typing). Compared to **debounce**, this would not wait until the user has stopped typing - so if the interval was 10 seconds, the function would have been called 360 times after an hour of consistent typing (6 times per minute, for 60 minutes).


## CSS & SASS 

Note that all SASS will have to put it through a Scss pre-processor for it to be usable in plain ol' CSS.


### Spacing Utility

[Source](https://github.com/jgthms/bulma/issues/451#issuecomment-331758839)

```scss
// Class examples: 
//    m-none: no margin
//    p-none: no padding
//    m-b-sm: small bottom margin
//    p-r-l: large right padding

$sizeUnit: rem;
$marginKey: 'm';
$paddingKey: 'p';
$separator: '-';
$sizes: (
  ('none', 0),
  ('xxs', 0.125),
  ('xs', 0.25),
  ('sm', 0.5),
  ('md', 1),
  ('lg', 2),
  ('xl', 4),
  ('xxl', 8)
);
$positions: (('t', 'top'), ('r', 'right'), ('b', 'bottom'), ('l', 'left'));

@function sizeValue($key, $value) {
  @return if($key == 'none', 0, $value + $sizeUnit);
}

@each $size in $sizes {
  $sizeKey: nth($size, 1);
  $sizeValue: nth($size, 2);
  .#{$marginKey}#{$separator}#{$sizeKey} {
    margin: sizeValue($sizeKey, $sizeValue) !important;
  }
  .#{$paddingKey}#{$separator}#{$sizeKey} {
    padding: sizeValue($sizeKey, $sizeValue) !important;
  }
  @each $position in $positions {
    $posKey: nth($position, 1);
    $posValue: nth($position, 2);
    .#{$marginKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      margin-#{$posValue}: sizeValue($sizeKey, $sizeValue) !important;
    }
    .#{$paddingKey}#{$separator}#{$posKey}#{$separator}#{$sizeKey} {
      padding-#{$posValue}: sizeValue($sizeKey, $sizeValue) !important;
    }
  }
}

```

### Depth Utility

[Source](https://dev.to/gajus/my-favorite-css-hack-32g3)

Use the snippet below if you need to figure out depths/layouts.

```scss

* { background-color: rgba(255,0,0,.2); }
* * { background-color: rgba(0,255,0,.2); }
* * * { background-color: rgba(0,0,255,.2); }
* * * * { background-color: rgba(255,0,255,.2); }
* * * * * { background-color: rgba(0,255,255,.2); }
* * * * * * { background-color: rgba(255,255,0,.2); }
* * * * * * * { background-color: rgba(255,0,0,.2); }
* * * * * * * * { background-color: rgba(0,255,0,.2); }
* * * * * * * * * { background-color: rgba(0,0,255,.2); }

```


### Frameworks

- Bulma
- Tailwind
- Tufte: https://edwardtufte.github.io/tufte-css/

## Elixir, Phoenix, Ecto

### Custom table timestamps

I'm not a big fan to the ecto `timestamps()` function since it uses "inserted_at" rather than "created_at" and it doesn't provide default values. Use this instead

```bash
create table(:table_name) do
  add :column_1, :string
  add :column_2, :text
end
execute "ALTER TABLE table_name ADD created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" # Automatically fill with the current date
execute "ALTER TABLE table_name ADD updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" # Make this column optional

```

### Creating a PubSub Genserver

[Source](https://hackernoon.com/get-notified-of-user-signups-and-plan-changes-automatically-using-postgres-phoenix-pubsub-e67d061b04bc)

### Storing JSONB

[Source](https://thoughtbot.com/blog/why-ecto-s-way-of-storing-embedded-lists-of-maps-makes-querying-hard)
  
```elixir
add :ingredients, :jsonb, default: "[]"
```



## Postgres

### Create a trigger for every table

[Source](https://stackoverflow.com/questions/29675347/how-to-create-trigger-for-all-table-in-postgresql)

```sql
SELECT
    'CREATE TRIGGER '
    || tab_name
    || ' BEFORE DELETE ON ALL DATABASE FOR EACH ROW EXECUTE PROCEDURE delete_data();' AS trigger_creation_query
FROM (
    SELECT
        quote_ident(table_schema) || '.' || quote_ident(table_name) as tab_name
    FROM
        information_schema.tables
    WHERE
        table_schema NOT IN ('pg_catalog', 'information_schema')
        AND table_schema NOT LIKE 'pg_toast%'
) tablist;
```
