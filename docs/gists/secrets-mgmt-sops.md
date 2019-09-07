
## Install

```
brew install sops
```

## Setup

Set up all our keys and prepare our repo.

We are going to encrypt `JSON` files - easier for JS config - but `yaml` is also supported

### Create a .sops.yaml


```sh
creation_rules:
  # upon creation of a file that matches the pattern *.dev.json,
  - path_regex: \.dev\.json$
    kms: 'FULL_ARN'
    gcp_kms: 'FULL_RESOURCE_ID'
    pgp: 'YOUR_PGP_FINGERPRINT_WITHOUT_SPACES'

  # upon creation of a file that matches the pattern *.prod.json,
  - path_regex: \.prod\.json$
    kms: 'FULL_ARN'
    gcp_kms: 'FULL_RESOURCE_ID'
    pgp: 'YOUR_PGP_FINGERPRINT_WITHOUT_SPACES'

```


### AWS KMS


- Login to AWS Console
- Go to KMS
- Create a new key (name it conveniently)
- Create another key for safety
- Grab the ARN's

KMS keys stored enside a chip inside a security hardware module. Nobody can access this. We will create IAM roles later which have access to use this key

### GCP

- go to project
- Search for KMS > Cryptographic keys
- Create a new keyring
- Create a new key ('inside' the keyring) - symmetric encrypt/decrypt
- Dropdown menu > Copy resource ID


### PGP key (backup!)

In case everything goes wrong, it's good to have a PGP key backed up on a USB stick, in a safe so that you can decrypt when everything else goes wrong.

```sh
gpg --default-new-key-algo rsa4096 --gen-key
gpg --list-secret-keys --keyid-format LONG # Will show the new key

# Get the fingerprint
gpg --fingerprint

```

## Create a new encrptyped

```sh
sops enc.dev.json 
```

This will take a while because it needs to reach out to AWS and to GCP.

Make all changes then hit `esc` and type `:wq` to write/save the file.

