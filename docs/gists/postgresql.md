---
description: Useful cheatsheet for Postgres
---
# PostgreSQL cheatsheet

Useful cheatsheet for Postgres

## PubSub

If you want to perform pubsub on table modifications then the table must trigger the `broadcast_changes()` procedure

Triggers cannot be generated for every table, you have to create them for each table. However...
you can use this to generate a list of commands to run for every table. This WON'T run the commands, it will just generate
a list of SQL strings that you can copy/paste into the migration file.

NOTE: this doesn't include DELETE triggers.

```sql
select
    'CREATE TRIGGER notify_' || table_name || '_trigger'
    || ' AFTER INSERT OR UPDATE ON ' || table_name || ' FOR EACH ROW EXECUTE PROCEDURE broadcast_changes();' AS trigger_creation_query
FROM (
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public' and table_type = 'BASE TABLE' and table_name <> 'schema_migrations'
) tablelist;

```


