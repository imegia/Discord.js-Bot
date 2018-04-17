# Getting Started
For this bot to work you must follow these simple steps.

#### Requirements

1. You have node.js installed on your device. If you don't have it installed you can download it **[here](https://nodejs.org)**.
2. You have the discord.js library installed and in the same folder as the bot files. If you don't know how to install it instructions are **[here](https://discord.js.org/#/)**.
3. You have changed the values in the `config.json` file.

#### Starting The Bot
To start the bot execute the `start.bat` file and the bot will start. However if you are not on a windows device you can run the javascript file from the command line

#### Inviting The Bot To A Server
If you want to invite your discord bot use the link **[here](https://discordapp.com/oauth2/authorize?&client_id=YOUR_BOT_ID_HERE&scope=bot&permissions=0)** and replace `YOUR_BOT_ID_HERE` in the URL with your bot's ID. If you want your bot to be invited with permissions you can use the permission calculator **[here](https://discordapi.com/permissions.html)** to sort that out. Once you've got the code from the permissions calculator website replace the zero on the end of the URL with the code.

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

#### The Token

First go to the [discord developers website](https://discordapp.com/developers/applications/me) and get the bot token from the bot you have already created and copy and paste it into the file.

#### The Prefix

Secondly chose a prefix for your discord bot. Make sure to make it unique so it doesn't mix up with other bots. I wouldn't use `?`, `!` and `$` as your prefix since these are common prefixes. Also avoid having `@` or `#` as your prefix as is used to mention channels and users. It would be best to not have a single character prefix overall. A good example of a multiple character prefix would be mentioning the bots name as that is easy to know and unique.

#### The Owner's ID

Thirdly you need to get your discord user id. You can do this by going on discord and right clicking on your profile picture on a server and click the `Copy ID` button on the panel. However you can only do this if the `Developer Mode` is enabled in your settings. You can enable this by going into your user settings and then going into the `Appearance` category and under the `Advanced` heading there is a `Developer Mode` sliding button. Click it to enable `Developer Mode`.

#### The Bot's Status

Finally you need to chose what the status of your bot will be. You can make it look likes it's playing a real game or you could do something else. Most people have the name for the help command. An example of that would be `=help for commands`. This would be a good option because it shows other users your prefix and help command.

# Hosting On A Raspberry Pi

If you have a big server that is active you should consider hosting your bot 24-7 so your server members can use it when they want and not just when your online. There is a tutorial on YouTube by An Idiot's Guide who has made a video on how to set that up. You can find that **[here](https://www.youtube.com/watch?v=kpci6V8969g)**.
