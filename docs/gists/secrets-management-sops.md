---
description: How to use Mozilla SOPS for encrypting sensitive files in your git repository.
---

# Secrets management

Want to store your sensitive secrets in your git repository? Use Mozilla SOPS.

This article will explain how to use Mozilla SOPS for encrypting sensitive files in your git repository.

We can use SOPS to encrypt `YAML`, `JSON`, `ENV`, `INI` and even `BINARY` files.

**Contents**

- [Why?](#why)
- [Preparing our repository](#preparing-our-repository)
- [Preparing for encryption/decryption](#preparing-for-encryptiondecryption)
  - [Installing SOPs](#installing-sops)
  - [Preparing our repo for SOPs](#preparing-our-repo-for-sops)
  - [Getting an AWS Key](#getting-an-aws-key)
  - [Getting a GCP Key](#getting-a-gcp-key)
- [Encrypting](#encrypting)

## Why?

Let's say we have a `.env` file in our repository which has sensitive data inside it. Because of the sensitive data, we add it to our `.gitignore`. However now we have a problem. None of our changes to `.env` will be saved in git and shared with our team. 

Ideally we want this versioned in git, so we can resolve any merge conflicts and keep a history of the changes. 

So let's see how we would do this using SOPS.

## Preparing our repository

I'm going to start with a fictional NodeJS repo with the following structure

```sh
# Initial repository
├── .env
├── .gitignore
└── package.json
```

Our `.env` file might have some very sensitive data in it, so we want to make sure it's never checked into git. Make sure to add it to `.gitignore`!

```sh
# .gitignore
.env
```

But we still want to track all the changes in git, so we are instead going to create an encrypted version which can be tracked. Let's first add a couple of commands to our `package.json`.

```json5
{
  "scripts": {
    "encrypt": "sops -e .env > .enc.env",
    "decrypt": "sops -d .enc.env > .env"
  }
}
```
These commands won't work just yet, but to describe them:

- **npm run encrypt**<br />This will encrypt the `.env` file and save it as `.enc.env`
- **npm run decrypt**<br />This will decrypt the `.enc.env` file and overwrite the contents of `.env`

If you aren't using Node then you can just call `sops -e .env > .enc.env` and `sops -d .enc.env > .env` directly. These commands are just for convenience so that we don't have to remember the commands everytime we want to use SOPS.

Great, we are set up for SOPS, but before we can use SOPS we need to let it know how to encrypt and decrypt our files.


## Preparing for encryption/decryption

### Installing SOPs

Before you start you will need to install SOPs on your computer:

```
brew install sops
```


### Preparing our repo for SOPs

In the root of your repo create a file called `.sops.yaml`, and paste the following contents:

```sh
# .sops.yaml
creation_rules:
  - kms: 'FULL_ARN,ANOTHER_FULL_ARN'
    gcp_kms: 'FULL_RESOURCE_ID,ANOTHER_RESOURCE_ID'
    # azure_kv: 'FULL_AZURE_CLIENT_ID'
    # pgp: 'YOUR_PGP_FINGERPRINT_WITHOUT_SPACES'
```

A couple of notes:

**Different key providers**

As you can see we are going to need to get an AWS Key and a GCP Key. We could choose just one, but having both when you set up would make life easier if you want to move from one cloud provider to another. Don't worry too much though, it's easy to add one later. You also have an option to use Azure and/or PGP. These two are great options but I want to keep this article simple.

**Different keys for different paths**

We could also do something like this in our `.sops.yaml` file:

```sh
# .sops.yaml
creation_rules:
  # Here is an example of how to use one set of keys 
  # upon creation of a file that matches the pattern ./secrets/dev.*
  - path_regex: .*/secrets/dev.*
    kms: 'FULL_ARN,ANOTHER_FULL_ARN'

  # Here is an example of how to use a different set of keys 
  # upon creation of a file that matches the pattern ./secrets/prod.*
  - path_regex: .*/secrets/prod.*
    kms: 'FULL_ARN,ANOTHER_FULL_ARN'

```


### Getting an AWS Key

- Login to AWS Console
- Go to KMS
- Create a new key (name it conveniently)
- Create another key for safety
- Grab the ARN's

KMS keys stored inside a chip inside a security hardware module. Nobody can access this. We will create IAM roles later which have access to use this key

### Getting a GCP Key

You may need to enable CLI:

```sh
gcloud auth application-default login
```
From CLI

gcloud kms keyrings create sops --location global
gcloud kms keys create sops-key --location global --keyring sops --purpose encryption
gcloud kms keys list --location global --keyring sops

```sh
# you should see
NAME                                                                   PURPOSE          PRIMARY_STATE
projects/my-project/locations/global/keyRings/sops/cryptoKeys/sops-key ENCRYPT_DECRYPT  ENABLED
```

- go to project
- Search for KMS > Cryptographic keys
- Create a new keyring
- Create a new key ('inside' the keyring) - symmetric encrypt/decrypt
- Dropdown menu > Copy resource ID


## Encrypting 

Any time we make changes to `.env` we just need to call

```
npm run encrypt
```

We 


```sh
sops ./secrets/dev.env 
# or 
sops ./secrets/dev.yaml 
# or 
sops ./secrets/dev.json 

# OR

sops -e .env > .env.enc
sops -e ./secrets/dev.env > ./secrets/dev2.env
sops -d ./secrets/dev2.env > .env
```

This may take a while because it needs to reach out to AWS and to GCP.

Make all changes then hit `esc` and type `:wq` to write/save the file.

