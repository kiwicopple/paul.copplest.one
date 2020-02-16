---
description: Useful cheatsheet for Ecto/Elixir/Phoenix
---
# Ecto / Phoenix cheatsheet

Useful cheatsheet for Ecto/Elixir/Phoenix


## Creating tables

I'm not a big fan to the ecto `timestamps()` function since it uses "inserted_at" rather than "created_at" and it doesn't provide default values.

This is a good template for setting up a table. Copy it to a migration file, find and replace `table_name` then add your columns. 

```bash
create table(:table_name) do
  add :column_1, :string
  add :column_2, :text
end
execute "ALTER TABLE table_name ADD created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" # Automatically fill with the current date
execute "ALTER TABLE table_name ADD updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP" # Make this column optional

# Assuming you have a user called 'web_admin'
execute("GRANT ALL ON public.table_name TO web_admin;") # Allow user access
execute("GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO web_admin;") # Allow user access for the sequences too

# SEE Postgrest PubSub below
execute "CREATE TRIGGER notify_table_name AFTER INSERT OR UPDATE ON table_name FOR EACH ROW EXECUTE PROCEDURE broadcast_changes();" # Trigger the pubsub procedure

```


## Storing JSONB

```elixir
add :ingredients, :jsonb, default: "[]"
```



## Resources

- [Storing Embedded (JSONB) Lists](https://thoughtbot.com/blog/why-ecto-s-way-of-storing-embedded-lists-of-maps-makes-querying-hard)
- [How to generate the trigger string](https://stackoverflow.com/questions/29675347/how-to-create-trigger-for-all-table-in-postgresql)
- [Creating a PubSub genserver](https://hackernoon.com/get-notified-of-user-signups-and-plan-changes-automatically-using-postgres-phoenix-pubsub-e67d061b04bc)
- [Figuring out how to broadcast from the Genserver](https://hexdocs.pm/phoenix/Phoenix.Channel.html#module-broadcasting-to-an-external-topic)
- [Learn X in Y](https://learnxinyminutes.com/docs/elixir/)