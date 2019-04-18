---
description: Adding a swap file to small Beanstalk servers so that they don't fail when installing npm packages.
---
# AWS Beanstalk Swap File

If you are running a t2.nano node server on AWS you will probably run out of RAM during npm install. This article will show how to add a SWAP file to temporarily “increase your RAM”.

## The problem
```
npm_install raise e subprocess.CalledProcessError
```

If you are using AWS Beanstalk and seeing this error above, then it is probably caused by a lack of RAM during the package installations on a node server. In the past I would just increase the size of the server but that can get expensive and it’s inefficient if your application doesn’t need much RAM after installation.

## The solution: create a swap file

Tell Beanstalk server to set up a SWAP file by creating the file `.ebextensions/01_setup.config` and entering the following:
```
#
# These commands will set up a 1GB swap file
# The `test:` parameter for each command is
#   used to ensure this is only run once
#
commands:
    01_create_swap_file_with_zeroes:
        command: "dd if=/dev/zero of=/var/swapfile bs=1M count=1024"
        test: test ! -f /var/swapfile
    02_copy_to_var:
        command: "mkswap /var/swapfile"
        test: test ! -f /var/swapfile
    03_initialise:
        command: "swapon /var/swapfile"
        test: test ! -f /var/swapfile
```

Deploy your app and pat yourself on the back for the savings you have made by avoiding a bigger server instance.
