# Getting Started
For this bot to work you must follow these simple steps.

1. You have node.js installed on your device. If you don't have it installed you can download it **[here](https://nodejs.org)**.
2. You have the discord.js library installed and in the same folder as the bot files. If you don't know how to install it instructions are **[here](https://discord.js.org/#/)**.
3. You have changed the values in the `config.json` file.

# Starting The Bot
To start the bot execute the `start.bat` file and the bot will start. However if you are not on a windows device you can run the javascript file from the command line

# The Config File
This is what is inside the config.json file.

```json
{
  "token":"",
  "prefix":"",
  "bot_owner_id":"",
  "bot_game":""
}
```
First go to the [discord developers website](https://discordapp.com/developers/applications/me) and get the bot token from the bot you have already created and copy and paste it into the file.

Secondly chose a prefix for your discord bot. Make sure to make it unique so it doesn't mix up with other bots. I wouldn't use `?`, `!` and `$` as your prefix since these are common prefixes. Also avoid having `@` or `#` as your prefix as is used to mention channels and users. It would be best to not have a single character prefix overall. A good example of a multiple character prefix would be mentioning the bots name as that is easy to know and unique.

Thirdly you need to get your discord user id. You can do this by going on discord and right clicking on your profile picture on a server and click the `Copy ID` button on the panel. However you can only do this if the `Developer Mode` is enabled in your settings. You can enable this by going into your user settings and then going into the `Appearance` category and under the `Advanced` heading there is a `Developer Mode` sliding button. Click it to enable `Developer Mode`.
