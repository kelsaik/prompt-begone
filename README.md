# prompt-begone
Controls login news portal window visibility on login. ⬇️

![image](https://github.com/user-attachments/assets/4b94cd85-91ee-4300-863f-643326451cfb)
***
### Usage
The default configuration of this mod prevents the login news portal window from being shown when you log into a character. You can also choose to configure it to only show the window on your first log-in for the session, while blocking all subsequent showings.

> [!NOTE]
> This mod does NOT affect the ability to manually open the news portal from the main menu UI, nor the MTC store from the inventory.

***
### Commands
> [!TIP]
> Ignore the `!` prefix if typing the command into toolbox `/8` chat.

| Command | Description |
| ------- | ----------- |
| !promptbegone | Toggles first-login prompt visibility. Enabling it will show the window for your next first-session login. Disabling it will always block the window from popping up.|

***
### Safety
> [!IMPORTANT]
> This module does not in any way craft packets or modify any packet data. All it does is wait for the first instance of the packet that controls the portal window (`S_RESPONSE_SERVER_ADMINTOOL_AWESOMIUM_URL`) and prevents it from being received by your client.\
> To put it plainly, it is totally safe to use.

Since this module should never require maintenance or updates to maintain functionality, I have chosen to not make this mod auto-update compatible (which prevents deploying code changes to the mod in the future). The mod you download from this repository will remain as-is forever.


