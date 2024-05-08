# MacOS tips

## Setting up networking profiles

You can set up custom Network profiles in MacOS and easily switch between them.

https://apple.stackexchange.com/questions/23134/how-can-i-quickly-change-dns-server

### Create

1. Open Terminal.
2. Create the network location "Valencia" and switch to it:
   ```bash
   sudo networksetup -createlocation "Valencia" populate
   sudo networksetup -switchtolocation "Valencia"
   ```
3. Identify the network service you want to configure (e.g., Wi-Fi). List all services:
   ```bash
   networksetup -listallnetworkservices
   ```
4. Set the DNS for the service (replace `Wi-Fi` with your service name if different):
   ```bash
   sudo networksetup -setdnsservers "Wi-Fi" 192.168.0.16
   ```

Replace `"Wi-Fi"` with the correct network service name from step 3 if necessary.


### Delete

To delete a network location named "Valencia" using MacOS's `networksetup`, open Terminal and run:
```bash
sudo networksetup -deletelocation "Valencia"
```