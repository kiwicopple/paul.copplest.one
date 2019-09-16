---
description: My bash profile on MacOS
---

# MacOS Bash Profile

My bash profile for improving the default Terminal.

## Editing 

To edit your bash_profile just enter `nano ~/.bash_profile`. After you have saved your changes you can use `source ~/.bash_profile` to apply the changes in terminal (or simply restart terminal).

## Profile

```bash
#   -----------------------------
#   MAKE TERMINAL BETTER
#   -----------------------------

#   Change Prompt
#   ------------------------------------------------------------
export PS1="________________________________________________________________________________\n| \w @ \h (\u) \n| => "
export PS2="| => "

#   Add color to terminal
#   ------------------------------------------------------------
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad



#   -------------------------------
#   FILE AND FOLDER MANAGEMENT
#   -------------------------------

#   cdf:  'Cd's to frontmost window of MacOS Finder
#   ------------------------------------------------------
    cdf () {
        currFolderPath=$( /usr/bin/osascript <<EOT
            tell application "Finder"
                try
            set currFolder to (folder of the front window as alias)
                on error
            set currFolder to (path to desktop folder as alias)
                end try
                POSIX path of currFolder
            end tell
EOT
        )
        echo "cd to \"$currFolderPath\""
        cd "$currFolderPath"
    }

#   extract:  Extract most know archives with one command
#   ---------------------------------------------------------
    extract () {
        if [ -f $1 ] ; then
          case $1 in
            *.tar.bz2)   tar xjf $1     ;;
            *.tar.gz)    tar xzf $1     ;;
            *.bz2)       bunzip2 $1     ;;
            *.rar)       unrar e $1     ;;
            *.gz)        gunzip $1      ;;
            *.tar)       tar xf $1      ;;
            *.tbz2)      tar xjf $1     ;;
            *.tgz)       tar xzf $1     ;;
            *.zip)       unzip $1       ;;
            *.Z)         uncompress $1  ;;
            *.7z)        7z x $1        ;;
            *)     echo "'$1' cannot be extracted via extract()" ;;
             esac
         else
             echo "'$1' is not a valid file"
         fi
    }



#   ---------------------------
#   COMMANDS
#   ---------------------------

alias la="ls -lah"                          # la:       List all including hidden with detailed info
alias qfind="find . -name "                 # qfind:    Quickly search for file
ff () { /usr/bin/find . -name "$@" ; }      # ff:       Find file under the current directory
ffs () { /usr/bin/find . -name "$@"'*' ; }  # ffs:      Find file whose name starts with a given string
ffe () { /usr/bin/find . -name '*'"$@" ; }  # ffe:      Find file whose name ends with a given string

alias standup="git standup -s"              # standup:    Run "git standup" and hide repositories which had no activity

alias dm="docker-machine"                       # dm:      Shortcut for docker-machine
alias dmme="eval \"$(docker-machine env -u)\""  # dmme:    "Docker machine me" - ensures that docker machine is pointing to local
alias lzd="lazydocker"                          # lzd:     Run lazydocker

alias ip0="ipconfig getifaddr en0"          # ip0:    Get IP Address of ethernet interface 0
alias ip1="ipconfig getifaddr en1"          # ip1:    Get IP Address of ethernet interface 1

#   ---------------------------
#   PATH config
#   ---------------------------

# Bash Completion: brew install bash-completion
if [ -f $(brew --prefix)/etc/bash_completion ]; then
    . $(brew --prefix)/etc/bash_completion
fi

# Node version manager (git install): https://github.com/nvm-sh/nvm#git-install
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export ANDROID_SDK=/Users/copple/Library/Android/sdk
export PATH=/Users/copple/Library/Android/sdk/platform-tools:$PATH

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/copple/Library/google-cloud-sdk/path.bash.inc' ]; then . '/Users/copple/Library/google-cloud-sdk/path.bash.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/copple/Library/google-cloud-sdk/completion.bash.inc' ]; then . '/Users/copple/Library/google-cloud-sdk/completion.bash.inc'; fi
```


## Resources

- Some handy commands found here: [https://gist.github.com/natelandau/10654137](https://gist.github.com/natelandau/10654137)