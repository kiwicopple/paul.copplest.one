# Taco Bell Programming

## Grep

The grep command processes text line by line, and prints any lines which match a specified pattern.

```sh
    grep \
    "AKIAVFBJQDRXMYGOLXOO"  `# Search phrase` \
    * `# Files to search` \
    -r `# Recursively search subfolders` \
    --exclude-dir=node_modules `# Exclude unnecessary folders` \
    --color `# Color the search phrase` \
    -n `# Give use the line numbers` \
    -i `# Make the search case-insensitive` \
    `# Hit enter`
```

```sh
grep \
"rest.nimbusforwork"  `# Search phrase` \
* `# Files to search` \
-r `# Recursively search subfolders` \
--exclude-dir=node_modules `# Exclude unnecessary folders` \
--color `# Color the search phrase` \
-n `# Give use the line numbers` \
-i `# Make the search case-insensitive` \
`# Hit enter`
```

Resources

- [https://www.computerhope.com/unix/ugrep.htm](https://www.computerhope.com/unix/ugrep.htm)


Grep description

```sh
grep \
"mobx-state"  `# Search phrase` \
* `# Files to search` \
-r `# Recursively search subfolders` \
--exclude-dir=node_modules `# Exclude unnecessary folders` \
--color `# Color the search phrase` \
-n `# Give use the line numbers` \
-i `# Make the search case-insensitive` \
`# Hit enter`
```


## Articles

- [Why learn AWK](https://news.ycombinator.com/item?id=22108680)
- Writing Safe Shell Scripts (2019) - https://hn.premii.com/#/article/22212338
- An opinionated approach to GNU Make - https://hn.premii.com/#/comments/21812656
- How FZF and ripgrep improved my workflow https://hn.premii.com/#/article/20360204
- [Awk in 20 Minutes](https://hn.premii.com/#/comments/23048054)