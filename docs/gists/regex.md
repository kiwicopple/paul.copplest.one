---
description: Some useful regex
---
# Regex

```
Positive Integers: ^\d+$
Negative Integers: ^-\d+$
Integers: ^-?\d+$
Username: ^[\w.]{4,16}$
Alpha-numeric characters: ^[a-zA-Z0–9]*$
Alpha-numeric characters with spaces: ^[a-zA-Z0–9 ]*$
Password: ^(?=^.{6,}$)((?=.*[A-Za-z0–9])(?=.*[A-Z])(?=.*[a-z]))^.*$
email: ^([a-zA-Z0–9._%-]+@ [a-zA-Z0–9.-]+\.[a-zA-Z]{2,})*$
IPv4 address: ^((?:(?:25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?)\.){3}(?:25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?))*$
Lowercase letters only: ^([a-z])*$
Uppercase letters only: ^([A-Z])*$
URL: ^(((http|https|ftp):\/\/)?([[a-zA-Z0–9]\-\.])+(\.)([[a-zA-Z0–9]]){2,4}([[a-zA-Z0–9]\/+=%&_\.~?\-]*))*$
VISA credit card numbers: ^(4[0–9]{12}(?:[0–9]{3})?)*$
Date (DD/MM/YYYY): ^(0?[1–9]|[12][0–9]|3[01])[- /.](0?[1–9]|1[012])[- /.](19|20)?[0–9]{2}$
Date (MM/DD/YYYY): ^(0?[1–9]|1[012])[- /.](0?[1–9]|[12][0–9]|3[01])[- /.](19|20)?[0–9]{2}$
Date (YYYY/MM/DD): ^(19|20)?[0–9]{2}[- /.](0?[1–9]|1[012])[- /.](0?[1–9]|[12][0–9]|3[01])$
MasterCard credit card numbers: ^(5[1–5][0–9]{14})*$
Hashtags: Including hashtags with preceding text (abc123#xyz456) or containing white spaces within square brackets (#[foo bar]) : \S*#(?:\[[^\]]+\]|\S+)
@mentions: \B@ [a-z0–9_-]+
```