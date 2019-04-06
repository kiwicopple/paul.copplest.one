---
description: Useful shortcodes and snippets for VS Code 
---

# Javascript Snippets for VSCode

TL;DR: Go to `Preferences: Configure User Snippets`, choose `Javascript`, then paste the following:

```
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