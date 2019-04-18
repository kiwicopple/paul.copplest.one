---
description: Useful shortcodes and snippets for VS Code 
---

# Javascript Snippets for VSCode

## TL;DR

Go to `Preferences: Configure User Snippets`, choose `Javascript`, then paste the following:

```javascript
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
		" * ${1:variable}",
		" */"
	  ],
	  "description": "Create JS comment (long)"
	}
}
```

## Overview

Coding involves a lot of repetitive typing. Luckily most code editors provides shortcuts, commonly called `snippets`. 

The snippet above has two snippets
- Print to console
- Create JS comment (long)


## Print to console

Part one: 

```javascript
"Print to console": {
	"prefix": "l",
	"body": [
	"console.log('${1:variable}', ${1:variable})"
	],
	"description": "Log output to console"
}
```

This part of the code will have the following effect:

![ConsoleLog](/img/consolelog.gif)

#### Breakdown:

- `prefix`: the letter/phrase that you type for VSCode to suggest this snippet
- `body`: this is output when you select the autocomplete snippet.

Take note of the `${1:variable}` — this tells VSCode that there is some further input required. You can add more of these (like `${2:}`) and you can use any word after the colon to remind yourself what to write. For example, I could have done this: `console.log(${1:REPLACE_ME})` which would give an autocomplete like so:

```javascript
console.log(REPLACE_ME)
```
