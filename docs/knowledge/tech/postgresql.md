---
description: Useful cheatsheet for Postgres
---
# PostgreSQL cheatsheet

Useful cheatsheet for PostgreSQL

## Upgrading

Updating a running server (from 10 to 11):

```bash
apt-get install -y postgres-11 # Install the latest version, which will start on port 5433
sudo pg_dropcluster 11 main --stop # Stop the instance on port 5433
sudo pg_upgradecluster 10 main  # Upgrade the instance on port 5432
sudo pg_dropcluster 10 main  # Drop the outdated instance
```

## Testing


#### Query performance

```sql
create or replace function perf_query() 
returns void
language sql stable
as $$
  select true;
$$;

explain analyze
select perf_query()
from generate_series(1,1000);

/*
"Function Scan on generate_series  (cost=0.00..100.00 rows=10000 width=1) (actual time=10.781..17.027 rows=1000 loops=1)"
"Planning Time: 4.880 ms"
"Execution Time: 23.155 ms"
*/
```

## Templates

### New tables

```sql
CREATE TABLE public.table_name (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  data jsonb,
  inserted_at timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp without time zone DEFAULT timezone('uc'::text, now()) NOT NULL
);

COMMENT ON TABLE public.table_name IS 'Some table name.';
COMMENT ON COLUMN public.table_name.inserted_at IS 'UTC timestamp of when the record was inserted.';
COMMENT ON COLUMN public.table_name.updated_at IS 'UTC timestamp of when the record was last updated.';
```


## Utilities

- [Updating tables with dependent views](https://stackoverflow.com/questions/17989355/alter-column-ignoring-dependent-views). Usage exanple:
    ```sql
    select deps_save_and_drop_dependencies('public', 'users');
    select deps_restore_dependencies('public', 'users');
    ```


## Using `dblink` in Postgres

`dblink` is a Postgres extension for querying remote databases. It's simpler than Foreign Data Wrappers (FDWs) for certain tasks.

`dblink` in Postgres connects to a different Postgres database or another connection within the same database. It allows querying data from the external source as if it were part of the local database. 

For example:

```
-- enable the extension
CREATE EXTENSION dblink;

-- query remote database  
SELECT *
FROM dblink(
	'host=remotehost user=remoteuser password=remotepassword dbname=remotedb',
	'SELECT id, name FROM remote_table'
) AS remote_data(id INTEGER, name TEXT);
```


### dblink vs FDW

Foreign Data Wrappers (FDWs) were introduced in Postgres to provide a more standardized and integrated way of accessing external data sources, addressing limitations and expanding capabilities beyond what `dblink` offers:

1. **Standardized Framework**: FDWs are based on the SQL/MED (SQL Management of External Data) standard, providing a standardized approach to handling external data.
2. **Broader Data Source Support**: FDWs can connect to a wide variety of data sources, not just Postgres databases. This includes other SQL databases, NoSQL databases, flat files, and web services.
3. **Integration with Local Queries**: FDWs allow external data to be queried as if it were part of the local database, offering seamless integration. This includes the ability to join local and remote data.
4. **Performance Optimization**: FDWs can push down query operations to the external source, improving performance by reducing the amount of data transferred and leveraging the source's own query capabilities.
5. **Scalability**: FDWs are more scalable for systems integrating multiple and diverse data sources.
6. **Modular Architecture**: Each FDW is a separate extension, allowing for a modular architecture where only the required FDWs are installed.
7. **Enhanced Functionality**: FDWs often provide additional functionalities like write support, transaction management, and advanced authentication mechanisms.

`dblink` is better than FDW in these scenarios:

1. **Ad-Hoc Queries**: For one-time or infrequent queries to remote databases where setting up an FDW is not justified.
2. **Simple Setup**: When you need a quick solution without the overhead of configuring an FDW.
3. **Specific Database Tasks**: Useful for database maintenance tasks like cross-database data comparisons or migrations.
4. **Limited Access**: When you have limited permissions and can't create foreign servers or tables.
5. **Temporary Connections**: For temporary or test environments where a permanent link is unnecessary.
6. **Postgres-Specific Features**: When leveraging specific Postgres features or extensions not supported or accessible via FDW.

### Mechanics

The underlying mechanics of `dblink` in Postgres involve several key components:

1. **Connection Handling**:
   - `dblink` establishes a connection to a remote Postgres database using a connection string.
   - The connection string includes credentials and details like host, database name, user, and password.
2. **Query Execution**:
   - Once connected, `dblink` executes the SQL query provided in its function call against the remote database.
   - It acts like a client to the remote database, sending the SQL command and waiting for the result.
3. **Data Transfer**:
   - After the remote database executes the query, `dblink` retrieves the result set.
   - The data is transferred over the network from the remote server to the local server where `dblink` is run.
4. **Result Representation**:
   - The results are represented in a format defined in the `dblink` function call, typically as a set of rows with specified column types.
   - This format allows the data to be treated as if it were from a local table or query.
5. **Connection Management**:
   - `dblink` handles the opening and closing of the database connection.
   - Persistent connections can be created for reuse, or one-time connections can be established for ad-hoc queries.
6. **Error Handling**:
   - `dblink` includes error handling for issues like connection failures, authentication errors, or SQL execution errors on the remote server.
7. **Security**:
   - Security in `dblink` involves managing credentials securely and ensuring that SQL injection vulnerabilities are mitigated.
   - Proper role and permission management are crucial to ensure secure and controlled access to remote data.

`dblink` acts as an intermediary, allowing a local Postgres database to execute queries on a remote database and retrieve results, managing connections, data transfer, and security considerations.

### Limitations

`dblink` in Postgres doesn't have a hardcoded limit on the amount of data it can receive, but there are practical limitations:

1. **Network Bandwidth and Latency**: Large data transfers can be slow, depending on network bandwidth and latency.
2. **Memory Usage**: Large result sets consume significant memory on both the client and server side, which can impact performance.
3. **Query Performance**: The performance of the remote database can be a bottleneck, especially for complex queries or large datasets.
4. **Timeouts**: Network or server timeouts may interrupt large data transfers.
5. **Transaction Management**: Large transactions might lead to issues like lock contention or long rollback times in case of failures.

To handle large data sets efficiently, it's better to optimise queries, use batching, or incrementally transfer data.

## Postgres Resources

Hacker News

- [System design hack: Postgres is a great pub/sub & job server](https://hn.premii.com/#/comments/21484215)
- [Designing the most performant Row Level Security schema](https://news.ycombinator.com/item?id=22331188)
- [Postgresqlco.nf: PostgreSQL Configuration for Humans](https://news.ycombinator.com/item?id=22139975)
- [Pgsh – branch Postgres like Git](https://hn.premii.com/#/comments/21642340)
- [Postgres Health Check and SQL Performance Analysis](https://news.ycombinator.com/item?id=21464272)
- [pg_flame – flamegraph visualizations of PostgreSQL query plans](https://news.ycombinator.com/item?id=21371642)
- [More on Postgres Performance](http://www.craigkerstiens.com/2013/01/10/more-on-postgres-performance/)
- [Highly Available PostgreSQL Database](https://github.com/ric2b/Highly-Available-PostgreSQL-Database)
- [A user interface for Postgres EXPLAIN that also gives tips](https://news.ycombinator.com/item?id=20343919)
