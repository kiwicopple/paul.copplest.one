# Loading JSON into Postgres

Today I had to load some JSON data into Postgres. 

Postgres' `COPY` command it expects one JSON object per line rather than a full array.

For example, instead of a JSON array:

```json
[
    { "id": 1, "name": "John Conway" },
    { "id": 2, "name": "Richard Feynman" },
]
```

It needs to be this format:

```json
{ "id": 1, "name": "John Conway" }
{ "id": 2, "name": "Richard Feynman" }
```

It took me a surprisingly long time to get the data into Postgres, but the solution was fairly simple. 

Here's how I did it.

## Convert the data

This is done with one command:

```bash
cat input.json | jq -cr '.[]' | sed 's/\\[tn]//g' > output.json
```

**Explanation**

1. `cat input.json` - read the contents of the file
2. `| jq -cr '.[]'` - pipe JSON into [jq](https://stedolan.github.io/jq/) and split it onto every line
3. `| sed 's/\\[tn]//g'` - [optional] remove tabs, newlines etc
4. `> output.json` - output to a new file


## Importing the data

From here it's easiest to ingest the data into a JSONB column.

```sh
## Create a table
psql -h localhost -p 5432 postgres -U postgres -c "CREATE TABLE temp (data jsonb);"

## Copy your data in
cat output.json | psql -h localhost -p 5432 postgres -U postgres -c "COPY temp (data) FROM STDIN;"
```

## That's it

20 seconds of reading, and 1 hour of my time. To get the data out of the table now you can use any of Postgres' amazing JSON support. For example:

```sql
select data->>'name'
from temp;

-- John Conway
-- Richard Feynman
```

Enjoy.