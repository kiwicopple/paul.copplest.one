---
description: Kill multiple common processes in one go
---
# Kill Processes

Kill multiple common processes in one go

## Windows

Save the following into a file called `kill-processes.cmd` and then you can double click it at anytime

```
taskkill /im chrome.exe /f
taskkill /im Dropbox.exe /f
taskkill /im javainst.exe /f
taskkill /im "AAM Updates Notifier.exe" /f
taskkill /im Keybase.exe /f
taskkill /im Everything.exe /f
```