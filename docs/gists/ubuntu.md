---
description: Setup for my Ubuntu dev server
---

# Ubuntu Dev Server


The following are the steps I follow to set up my Ubuntu Dev Server


### Init

```sh
sudo apt update         # Update

mkdir ~/tmp             # For any installation files 
mkdir ~/Projects
mkdir ~/Projects/Server # For any Repo's that are used to manage the server

ufw status # Make sure firewall is running
```

### Common packages

```sh
apt install -y make
apt install -y build-essential
apt install -y libkrb5-dev
```

### Set up Fail2Ban

```sh
apt install -y fail2ban

# Backup conf 
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local # Adjust Default ban time etc

# Check
fail2ban-client status sshd
```

### Set up Git

```sh

git config --global user.email "you@email.com"  ## Change email 
git config --global user.name "Paul Copplestone"

ls -al ~/.ssh           # Check first that id_rsa.pub doesn't exist
### Change email:       ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"  # Start the ssh-agent in the background
cat ~/.ssh/id_rsa.pub
```

After creating, make sure to [add SSH key to GitHub](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account) in the [settings page](https://github.com/settings/keys).


### Set up Code Server

```sh
cd ~/tmp
ufw allow 8080
wget https://github.com/cdr/code-server/releases/download/2.1523-vsc1.38.1/code-server2.1523-vsc1.38.1-linux-x86_64.tar.gz
tar -xvzf code-server2.1523-vsc1.38.1-linux-x86_64.tar.gz
cd code-server2.1523-vsc1.38.1-linux-x86_64/
PASSWORD=SECUREPASSWORD ./code-server --auth password & ## Run in background, could be improved with systemd
```

set up Fail2ban: https://github.com/cdr/code-server/blob/master/doc/examples/fail2ban.conf
```sh
# cd /etc/fail2ban/filter.d/
# wget https://raw.githubusercontent.com/cdr/code-server/master/doc/examples/fail2ban.conf
# fail2ban-client status sshd
```

### AWS 

```sh
sudo apt-get -y install awscli
aws configure
nano ~/.aws/credentials
```
### SOPS

```sh
cd ~/tmp
wget https://github.com/mozilla/sops/releases/download/3.4.0/sops_3.4.0_amd64.deb
sudo dpkg -i sops_3.4.0_amd64.deb
```

### Install nvm (Node / NPM)

https://github.com/nvm-sh/nvm#git-install

```sh
cd ~/
git clone https://github.com/nvm-sh/nvm.git .nvm
cd ~/.nvm
git checkout v0.34.0
. nvm.sh
nvm install stable
nvm install v10.13.0

nano ~/.bashrc # Don't add to `.profile` as it won't be correctly "sourced" by code server

### Add:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

source ~/.bashrc

npm i -g node-gyp # This is to solve permission errors.
```


### Docker 

```sh
cd ~/tmp
# Install Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose

# Docker Machine
base=https://github.com/docker/machine/releases/download/v0.16.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo mv /tmp/docker-machine /usr/local/bin/docker-machine &&
  chmod +x /usr/local/bin/docker-machine
```

**Lazydocker**

```sh
cd ~/tmp
curl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | bash
nano ~/.bashrc
echo "alias lzd='lazydocker'" >> ~/.profile
source ~/.profile
```

### Necessary bloat

```sh
npm install -g node-gyp # This is to solve permission errors \
npm install -g expo-cli # Required for mobile development
```
