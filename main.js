const Discord = require("discord.js"); //This imports discord.js
const client = new Discord.Client(); //This makes a new discord client
const config = require("./config.json"); //This imports the config.json file

const token = config.token; //Get the token string from the file and set it as a variable
const prefix = config.prefix; //Get the prefix string from the file and set it as a variable
const bot_owner = config.bot_owner_id; //Get the owner id string from the file and set it as a variable
const bot_game = config.bot_game; //Get the bot game string for the status variable

const flipcoin = [
  'Heads', 'Tails'
]

const choices = [ //Make this variable for the 8ball command
  //Good answers
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good','Yes',
  'Signs point to yes',
  
  //Neutral answers
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  
  //Bad answers
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
];

client.on('ready', () => { //This happens when the bot is online
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Prefix is set to '${prefix}'`);
  client.user.setActivity(bot_game); //This sets what the bot will be playing (not actually)
  client.user.setStatus('dnd'); //You can either choose: 'online', 'idle', 'dnd' or 'invisible'
  console.log("Ready!");
  console.log("---------------");
});

client.on("message", (message) => { //This happens when a message is sent in the server
    
    /* --- Filters --- */

    //First we need to filter the messages so we dont waste processing power
    
    if (message.author.bot) return;  //This checks if the message author is a bot
    if (!message.guild) return; //This checks if the message is in a server
    if (!message.content) return; //This checks if the message is text
    
    /* --- Command arguments --- */
    
    //Now we need to get the command and the arguments from the message
    let args = message.content.trim().split(/ +/g); //This splits the message into a array
    let command = args.shift().toLowerCase(); //This gets the command out of the list
    let full_arg = args.slice(command).join(" ").slice(command).trim(); //This makes all the args into one variable
    let first_arg_lower = args[1]; //This makes it easier to get the first arg


    /* --- Commands --- */
    
    //Now lets start making some commands!
    
    /* --- Ping Command --- */
    if (command === prefix + "ping") {
      message.channel.send('Pong?').then((msg) => {
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
      });
    }
    
    /* --- Help Command --- */
    else if (command === prefix + "help") {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor("#e02f4c")
        .setDescription(`The prefix is set to '${prefix}'`)
        .addField(`${prefix}kick`, "This command kicks the mentioned user")
        .addField(`${prefix}ban`, "This command bans the mentioned user")
        .addField(`${prefix}purge`, "This command deletes a hundred messages")
        .addField(`${prefix}8ball`, "This command predicts the future")
        .addField(`${prefix}copy`, "This command messages what the user has said")
        .addField(`${prefix}whois`, "This command gives you more information about the chosen user")
        .addField(`${prefix}rolldice`, "This command rolls a 6 sided dice for you and messages you the answer")
        .addField(`${prefix}flipcoin`, "This command flips a coin and messages you the answer")
        .addField(`${prefix}purge`, "This command deletes 100 messages");
        message.channel.send(helpEmbed);
    }
    
    /* --- Kick Command --- */
    else if (command === prefix + "kick") {
      if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don\'t have the permission \`KICK_MEMBERS\` to complete that command!").catch(console.error); //Check if we have the perm to kick
      let kick_member = message.guild.member(message.mentions.users.first()); //Get the user we are going to kick
      if (!kick_member) return message.reply("I can\'t find that user!"); //If the user magically disappears
      kick_member.kick().then(member => {
        message.reply(`<@${kick_member.id}> was successfully kicked from the server in <#${message.channel.id}>! :boot:`);
      }).catch(console.error);
    }
    
    /* --- Ban Command --- */
    else if (command === prefix + "ban") {
      if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don\'t have the permission \`BAN_MEMBERS\` to complete that command!").catch(console.error); //Check if we have the perm to ban
      let ban_member = message.guild.member(message.mentions.users.first()); //Get the user we are going to ban
      if (!ban_member) return message.reply("I can\'t find that user!"); //If the user magically disappears
      ban_member.ban().then(member => {
        message.reply(`<@${ban_member.id}> was successfully banned from the server in <#${message.channel.id}>! :boot:`);
      }).catch(console.error);
    }
    
    /* --- 8ball Command ---*/
    else if (command === prefix + "8ball") {
      message.channel.send(`${choices[Math.floor(Math.random() * choices.length)]} <@${message.author.id}>.`)
    }
    
    /* --- Copy Command --- */
    else if (command === prefix + "copy") {
      message.channel.send(full_arg).catch(console.error);
    }
    
    /* --- Foo Command --- */
    else if (command === prefix + "foo") {
      message.channel.send(`<@${message.author.id}> Bar!`).catch(console.error);
    }
    
    /* --- Purge Command --- */
    else if (command === prefix + "purge") {
      if (message.author.id != bot_owner) return; //Filter so only you can use it
      message.channel.bulkDelete(100); //Delete 100 messages in that servers channel
    }
    
    /* --- Whois Command --- */
    else if (command === prefix + "whois") {
      let whois_member = message.guild.member(message.mentions.users.first()); //Get the user we are going to get info on
      if (!whois_member) return message.reply("I can\'t find that user!");
      message.channel.send(`<@${whois_member.id}> (\`${whois_member.id}\`) joined discord on ${message.author.createdAt}`);
    }

    /* --- FLipcoin Command --- */
    else if (command === prefix + "flipcoin") {
      message.channel.send(`<@${message.author.id}> ${flipcoin[Math.floor(Math.random() * flipcoin.length)]}!`)
    }

    /* --- Rolldice Command --- */
    else if (command === prefix + "rolldice") {
      message.channel.send(`I rolled a ${Math.round(Math.random() * (6 - 1)) + 1}!`);
    }
    
    /* --- No Valid Command --- */
    else {
      let sliced_command = command.replace(prefix, "");
      console.log(sliced_command);
      message.channel.send(`<@${message.author.id}> \`\'${sliced_command}\'\` wasn't recognised as a command!`);
    }
});

client.login(token); //This logs the bot in
