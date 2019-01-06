const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands");
    return;
  }

  jsfile.forEach((f,i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("Hentai World", {type: "WATCHING"});

});

bot.on("guildMemberAdd", async member => {

  let joinicon = member.user.displayAvatarURL;
  let welcomelogembed = new Discord.RichEmbed()
  .setAuthor("Member Joined", joinicon)
  .setColor("#faa0eb")
  .setThumbnail(member.user.displayAvatarURL)
  .addField("Username:", `${member} ${member.user.tag}`)
  .setFooter(`ID: ${member.id}`)
  .setTimestamp(member.joinedAt);

  let welcomechannel = member.guild.channels.find(c => c.name === "other_logs");
  welcomechannel.send(welcomelogembed);
 });

bot.on("guildMemberRemove", async member => {

  let joinicon = member.user.displayAvatarURL;
  let leavelogembed = new Discord.RichEmbed()
  .setAuthor("Member Left", joinicon)
  .setColor("#530447")
  .setThumbnail(member.user.displayAvatarURL)
  .addField("Username:", `${member} ${member.user.tag}`)
  .setFooter(`ID: ${member.id}`)
  .setTimestamp(member.leftAt);

  let leavelogchannel = member.guild.channels.find(c => c.name === "other_logs");
  leavelogchannel.send(leavelogembed);
})

bot.on("channelCreate", async channel => {

  let sicon = channel.guild.iconURL;
  let channelcreatelogsEmbed = new Discord.RichEmbed()
  .setAuthor("Channel Created", sicon)
  .setColor("#ff00d6")
  .addField("Name:", `${channel}`)
  .setFooter(`ID: ${channel.id}`)
  .setTimestamp(channel.createdAt);

  let sChannel = channel.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(channelcreatelogsEmbed);
})

bot.on("channelDelete", async channel => {

  let sicon = channel.guild.iconURL;
  let channeldeletelogsEmbed = new Discord.RichEmbed()
  .setAuthor("Channel Deleted", sicon)
  .setColor("#3b0534")
  .addField("Name:", `#${channel.name}`)
  .setFooter(`ID: ${channel.id}`)
  .setTimestamp(channel.deletedAt);

  let sChannel = channel.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(channeldeletelogsEmbed);
})

bot.on("channelPinsUpdate", async (channel, time) => {

  let sicon = channel.guild.iconURL;
  let pinsupdateEmbed = new Discord.RichEmbed()
  .setAuthor("Pin Updated", sicon)
  .setColor("#9f5a96")
  .addField("Channel:", `${channel}`)
  .setFooter(`ID: ${channel.id}`)
  .setTimestamp(channel.pinnedAt);

  let sChannel = channel.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(pinsupdateEmbed);
})

bot.on("channelUpdate", async (oldChannel, newChannel) => {

  let sicon = oldChannel.guild.iconURL;
  let channelupdateEmbed = new Discord.RichEmbed()
  .setAuthor("Channel Updated", sicon)
  .setColor("#492543")
  .addField("Before:", oldChannel.name, true)
  .addField("After:", newChannel, true)
  .setFooter(`ID: ${newChannel.id}`)
  .setTimestamp(oldChannel.updatedAt);

  let sChannel = oldChannel.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(channelupdateEmbed);
})

bot.on("clientUserGuildSettingsUpdate", async clientUserGuildSettings => {

  let sicon = clientUserGuildSettings.guild.iconURL;
  let guildupdateEmbed = new Discord.RichEmbed()
  .setAuthor("Server Updated", sicon)
  .setColor("#af0e97")
  .addField(`${oldclientUserGuildSettings} -> ${newclientUserGuildSettings}`)
  .setFooter(`ID: ${clientUserGuildSettings.id}`)
  .setTimestamp(clientUserGuildSettings.updatedAt);

  let sChannel = clientUserGuildSettings.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(guildupdateEmbed);
})

bot.on("emojiCreate", async emoji => {

  let sicon = emoji.guild.iconURL;
  let emojicreateEmbed = new Discord.RichEmbed()
  .setAuthor("Emoji Created", sicon)
  .setColor("#faa0eb")
  .addField("Name:", emoji.iconURL)
  .setTimestamp(emoji.createdAt);

  let sChannel = emoji.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(emojicreateEmbed);
})

bot.on("emojiDelete", async emoji => {

  let sicon = emoji.guild.iconURL;
  let emojideleteEmbed = new Discord.RichEmbed()
  .setAuthor("Emoji Deleted", sicon)
  .setColor("#530447")
  .addField("Name:", emoji)
  .setTimestamp(emoji.deletedAt);

  let sChannel = emoji.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(emojideleteEmbed);
})

bot.on("emojiUpdate", async (oldEmoji, newEmoji) => {

  let sicon = newEmoji.guild.iconURL;
  let emojiupdateEmbed = new Discord.RichEmbed()
  .setAuthor("Emoji Updated", sicon)
  .setColor("#af0e97")
  .addField("Before:", oldEmoji.name)
  .addField("After:", newEmoji.name)
  .setTimestamp(oldEmoji.updatedAt);

  let sChannel = newEmoji.guild.channels.find(c => c.name === "other_logs");
  sChannel.send(emojiupdateEmbed);
})

bot.on("guildBanAdd", async (guild, user) => {

  let sicon = guild.iconURL;
  let guildbanEmbed = new Discord.RichEmbed()
  .setAuthor("Member Banned", sicon)
  .setColor("#530447")
  .setThumbnail(user.displayAvatarURL)
  .addField("Username:", `${user} ${user.tag}`)
  .setFooter(`ID: ${user.id}`)
  .setTimestamp(user.addedAt);

  let sChannel = guild.channels.find(c => c.name === "other_logs");
  sChannel.send(guildbanEmbed);
})

bot.on("guildBanRemove", async (guild, user) => {

  let sicon = guild.iconURL;
  let guildunbanEmbed = new Discord.RichEmbed()
  .setAuthor("Member Unbanned", sicon)
  .setColor("#faa0eb")
  .setThumbnail(user.displayAvatarURL)
  .addField("Username:", `${user} ${user.tag}`)
  .setFooter(`ID: ${user.id}`)
  .setTimestamp(user.removedAt);

  let sChannel = guild.channels.find(c => c.name === "other_logs");
  sChannel.send(guildunbanEmbed);
})

bot.on("guildUpdate", async (oldGuild, newGuild) => {

  let sicon = newGuild.iconURL;
  let guildupdateEmbed = new Discord.RichEmbed()
  .setAuthor("Server Updated", sicon)
  .setColor("#af0e97")
  .setThumbnail(newGuild.iconURL)
  .addField("Before:", oldGuild.name)
  .addField("After:", newGuild.name)
  .setFooter(`ID: ${newGuild.id}`)
  .setTimestamp(oldGuild.updatedAt);

  let sChannel = newGuild.channels.find(c => c.name === "other_logs");
  sChannel.send(guildupdateEmbed);
})

bot.on("messageDelete", async message => {

  if(message.author.bot) return;
  let sicon = message.author.displayAvatarURL;
  let messagedeleteEmbed = new Discord.RichEmbed()
  .setAuthor(`Deleted Message by ${message.author.username}`, sicon)
  .setColor("#530447")
  .setThumbnail(message.author.displayAvatarURL)
  .setDescription(`Deleted in channel ${message.channel}`)
  .addField("Message:", message)
  .addField("Original Date:", message.createdAt)
  .setFooter(`ID: ${message.author.id}`)
  .setTimestamp(message.deletedAt);

  let sChannel = message.guild.channels.find(c => c.name === "message_logs");
  sChannel.send(messagedeleteEmbed);
})

bot.on("messageUpdate", async (oldMessage, newMessage) => {

  if((!oldMessage.content || !newMessage.content) || (oldMessage.content === newMessage.content)) return;
  if(newMessage.author.bot) return;
  let sicon = newMessage.author.displayAvatarURL;
  let messageupdateEmbed = new Discord.RichEmbed()
  .setAuthor(`Message Edited by ${newMessage.author.username}`, sicon)
  .setColor("#530447")
  .setThumbnail(newMessage.author.displayAvatarURL)
  .setDescription(`Edited in channel ${newMessage.channel}`)
  .addField("Before:", oldMessage)
  .addField("After:", newMessage)
  .addField("Original Date:", oldMessage.createdAt)
  .setFooter(`ID: ${newMessage.author.id}`)
  .setTimestamp(oldMessage.deletedAt);

  let sChannel = newMessage.guild.channels.find(c => c.name === "message_logs");
  sChannel.send(messageupdateEmbed);
})

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  });

bot.login(process.env.token);
