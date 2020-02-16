---
description: Useful shortcodes and snippets for VS Code 
---

# VSCode Snippets

Coding involves a lot of repetitive typing. Luckily most code editors provides shortcuts, commonly called `snippets`. For example, DBeaver and Eclipse have [templates](https://github.com/dbeaver/dbeaver/wiki/SQL-Templates), but my preference is to keep all my snippets and templates in VSCode so that I have a single, universal tool.

### What is a snippet?

A snippet is just a bit of template code that you will frequently type. Instead of typing it, you can have a "trigger" which will pull up a context menu. Once you press tab, it will insert the code. Easier if you just see it:

![JS Snippets](/img/js-snippet.gif)

### How do I insert a snippet into VS Code?

Go to `Preferences: Configure User Snippets` then choose your language. Below are the JSON files that I use for each language that I commonly code with.

If you want to create your own snippets then I recommend installing the `Snippet Maker` extension. This will be particularly helpful for multiline snippets.

## Javascript Snippets

```json
{
	"Print to console": {
	  "prefix": "l",
	  "body": [
		"console.log('${1:variable}', ${1:variable})"
	  ],
	  "description": "Log output to console"
	},
	"Create JS comment (long)": {
	  "prefix": "///",
	  "body": [
		"/**",
		" * ${1:description}",
		" */"
	  ],
	  "description": "Create JS comment (long)"
	}
}
```

The GIF in the section "What is a snippet?" display how these JS Snippets work.

## PostgreSQL Snippets

```json
{
  "Create Table": {
    "body": [
      "create sequence \"${1:schema_name}\".\"${2:table_name}_id_seq\";",
      "",
      "create table \"${1:schema_name}\".\"${2:table_name}\" (",
      "    \"id\" bigint not null default nextval('${2:table_name}_id_seq'::regclass),",
      "    \"created_by\" bigint, -- store the user who created the record",
      "    \"updated_by\" bigint, -- store the user who last updated the record",
      "    \"inserted_at\" timestamp without time zone not null default now(),",
      "    \"updated_at\" timestamp without time zone not null default now()",
      ");",
      "",
      "",
      "CREATE UNIQUE INDEX ${2:table_name}_pkey ON ${1:schema_name}.${2:table_name} USING btree (id);",
      "",
      "alter table \"${1:schema_name}\".\"${2:table_name}\" add constraint \"${2:table_name}_pkey\" PRIMARY KEY using index \"${2:table_name}_pkey\";",
      "alter table \"${1:schema_name}\".\"${2:table_name}\" add constraint \"${2:table_name}_user_id_fkey\" FOREIGN KEY (user_id) REFERENCES users(id);",
      ""
    ],
    "prefix": "create",
    "description": "Create a new table with standard columns"
  }
}
```

That's quite a long snippet for creating a new table in Postgres with (my) standard columns. I might soon move ID columns over to the new [Identity Type](https://www.2ndquadrant.com/en/blog/postgresql-10-identity-columns/). Easier to see how this one works rather than trying to read the code:

![SQL Snippet](/img/sql-snippet.gif)