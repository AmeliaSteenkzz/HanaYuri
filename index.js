const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const token = process.env.token;
bot.commands = new Discord.Collection();
let cooldown = new Set();


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

  bot.user.setActivity("Anime World", {type: "WATCHING"});

  //bot.user.setGame("AW Original Bot");
});

bot.on("guildMemberAdd", function(member)
{
  let joinEmbed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .setImage("https://cdn.discordapp.com/attachments/486583639253975042/589602872157667328/unknown.png")
  .setDescription("꧁【❦Welcome to Anime World a world of weebs awaits!❦】꧂")
  .addField("Thank you for joining the Anime World (AW) server!", "Don't forget to read the server rules before heading off to enjoy the community!\nThe rules aren't that complicated, just the straight forward kind of rules you'd expect in any other server.\nSo if you behave yourself, then I'm sure you won't break any rules.")
  .addField("Our own server bot Hanayuri!", "We've made the bot Hanayuri specifically for the server!\nMeaning that we're the only one on Discord who owns her. She's the one that sent you this message!\nWe are planning on adding more features like an EXP leveling system and coin system to Hanayuri in the near future as well!\nSo stay tuned for more info and new stuff!")
  .addField("Choose from a mountain of colors!", "You can assign your own color to yourself! There are a whopping 60+ colors available from the get go!\nTo see all these colors for yourself, just use the h!roles command.\nUse the h!add color command to add a color that you like!")
  .addField("Never miss a chapter!", "We have a handful of manga's that we keep an eye on for new releases!\nThe new releases will be announced in the server, so you never miss a chapter!\nIf your favorite manga is not part of the manga releases group, then feel free to suggest it!\nWe take every suggestion into consideration!")
  .addField("Thank you for reading my message!", "Please enjoy our community to the fullest!\nIf you're having any problems with anything, feel free to ask any of our staff members!")
  .setTimestamp()
  .setFooter("Steenkzzisback💕{Martijn}#7981");

   member.send(joinEmbed);

  //let joinMemberEmbed = new Discord.RichEmbed()
  //.setColor("#af0e97")
  //.setThumbnail(member.user.displayAvatarURL)
  //.addField("Welcome to Anime World", `${member}`)
  //.setFooter("You are the 104th user")
  //.setTimestamp(member.joinedAt);


    //let welcomeMessageChannel = member.guild.channels.find(c => c.id === "588325071798403084");
    //welcomeMessageChannel.send(joinMemberEmbed)

  let memberRole = member.guild.roles.find("id", "588646072927387658");
  let memberRole2 = member.guild.roles.find("id", "588440032398802944");
  let memberRole3 = member.guild.roles.find("id", "588646202468466688");
  let memberRole4 = member.guild.roles.find("id", "588646915734896651");
  let memberRole5 = member.guild.roles.find("id", "588676211987709952");
  member.addRole(memberRole);
  member.addRole(memberRole2);
  member.addRole(memberRole3);
  member.addRole(memberRole4);
  member.addRole(memberRole5);
});

bot.on('message', function(message){

  if(message.content == '/gamemode 0')
  {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command');
    message.channel.send('Your game mode has been updated to *Survival Mode*');
  }
  if(message.content == '/gamemode 1')
  {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command');
    return message.channel.send('Your game mode has been updated to *Creative Mode*');
  }
  if(message.content == '/gamemode 2')
  {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command');
    return message.channel.send('Your game mode has been updated to *Adventure Mode*');
  }
  if(message.content == '/gamemode 3')
  {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command');
    return message.channel.send('Your game mode has been updated to *Spectator Mode*');
  }
})

bot.on("guildMemberAdd", async member => {

  let joinicon = member.user.displayAvatarURL;
  let welcomelogembed = new Discord.RichEmbed()
  .setAuthor("Member Joined", joinicon)
  .setColor("#faa0eb")
  .setThumbnail(member.user.displayAvatarURL)
  .addField("Username:", `${member} ${member.user.tag}`)
  .setFooter(`ID: ${member.id}`)
  .setTimestamp(member.joinedAt);

  let welcomechannel = member.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let leavelogchannel = member.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = channel.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = channel.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = channel.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = oldChannel.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = clientUserGuildSettings.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(guildupdateEmbed);
})

bot.on("emojiCreate", async emoji => {

  let sicon = emoji.guild.iconURL;
  let emojicreateEmbed = new Discord.RichEmbed()
  .setAuthor("Emoji Created", sicon)
  .setColor("#faa0eb")
  .addField("Name:", emoji.iconURL)
  .setTimestamp(emoji.createdAt);

  let sChannel = emoji.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(emojicreateEmbed);
})

bot.on("emojiDelete", async emoji => {

  let sicon = emoji.guild.iconURL;
  let emojideleteEmbed = new Discord.RichEmbed()
  .setAuthor("Emoji Deleted", sicon)
  .setColor("#530447")
  .addField("Name:", emoji)
  .setTimestamp(emoji.deletedAt);

  let sChannel = emoji.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = newEmoji.guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = guild.channels.find(c => c.name === "staff_bot_commands");
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

  let sChannel = guild.channels.find(c => c.name === "staff_bot_commands");
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
  .setFooter(`ID: ${oldGuild.id}`)
  .setTimestamp(oldGuild.updatedAt);

  let sChannel = newGuild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(guildupdateEmbed);
})

bot.on("messageDelete", async message => {

  let sicon = message.author.displayAvatarURL;
  let messagedeleteEmbed = new Discord.RichEmbed()
  .setAuthor(`Message Deleted by ${message.author.username}`, sicon)
  .setColor("#530447")
  .setThumbnail(message.author.displayAvatarURL)
  .setDescription(`Deleted in channel ${message.channel}`)
  .addField("Message:", message)
  .addField("Original Date:", message.createdAt)
  .setFooter(`ID: ${message.author.id}`)
  .setTimestamp(message.deletedAt);

  let sChannel = message.guild.channels.find(c => c.name === "staff_bot_commands");
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
  .addField("Before", oldMessage)
  .addField("After", newMessage)
  .addField("Original Date:", oldMessage.createdAt)
  .setFooter(`ID: ${newMessage.author.id}`)
  .setTimestamp(oldMessage.deletedAt);

  let sChannel = newMessage.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(messageupdateEmbed);
})

bot.on("roleCreate", async role => {

  let sicon = role.guild.iconURL;
  let rolecreateEmbed = new Discord.RichEmbed()
  .setAuthor("Role Created", sicon)
  .setColor("#ff00d6")
  .setThumbnail(role.guild.iconURL)
  .addField("Role Name", role)
  .setFooter(`ID: ${role.id}`)
  .setTimestamp(role.createdAt);

  let sChannel = role.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(rolecreateEmbed);
})

bot.on("roleDelete", async role => {

  let sicon = role.guild.iconURL;
  let roledeleteEmbed = new Discord.RichEmbed()
  .setAuthor(`Role Created`, sicon)
  .setColor("#ff00d6")
  .setThumbnail(role.guild.iconURL)
  .addField("Role Name", role)
  .setFooter(`ID: ${role.id}`)
  .setTimestamp(role.deletedAt);

  let sChannel = role.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(roledeleteEmbed);
})

bot.on("roleUpdate", async (oldRole, newRole) => {

  let sicon = newRole.guild.iconURL;
  let roleupdateEmbed = new Discord.RichEmbed()
  .setAuthor(`Role Updated`, sicon)
  .setColor("#ff00d6")
  .setThumbnail(newRole.guild.iconURL)
  .addField("Old Role Name:", oldRole.name)
  .addField("New Role Name:", newRole.name)
  .setFooter(`ID: ${newRole.id}`)
  .setTimestamp(oldRole.updatedAt);

  let sChannel = newRole.guild.channels.find(c => c.name === "staff_bot_commands");
  sChannel.send(roleupdateEmbed);
})

bot.on("message", async message => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  });

// bot.on("message", async message => {

//   if(!coins[message.author.id]){
//     coins[message.author.id] = {
//       coins: 0
// }};

// let coinAmt = Math.floor(Math.random() * 1) + 1;
// let baseAmt = Math.floor(Math.random() * 1) + 1;

// if(coinAmt === baseAmt){
//   coins[message.author.id] = {
//     coins: coins[message.author.id].coins + coinAmt
//   };
// fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//   if (err) console.log(err)
// });
// let coinEmbed = new Discord.RichEmbed()
// .setAuthor(message.author.username)
// .setColor("#af0e97")
// .addField("➕", `${coinAmt} coins added!💰`)

// if(message.author.bot) return;
// let coinschannel = message.guild.channels.find(c => c.name === "coins");
// if(!coinschannel) return message.channel.send("Couldn't find coins channel.");
// coinschannel.send(coinEmbed);

// }
// //if(!cooldown.has(message.author.id)){

// con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
//   if(err) throw err;

//   let sql;

//   if(rows.length < 1) {
//     sql = `INSTERT INTO xp (id, xp) VALUES ('${message.author.id}', ${generateXP()})`
//   } else {
//     let xp = rows[0].xp;
//     sql = `UPDATE xp SET xp = ${xp + generateXP()} WHERE id = '${message.guild.id}'`;
//   }
//   con.query(sql, console.log);
//})
//let xpAdd = Math.floor(Math.random() * 15) + 10;
//console.log(`${xpAdd} XP added`)

//if(!xp[message.author.id]){
//  xp[message.author.id] = {
//    xp: 0,
//    level: 1
//  };
//})
//let curxp = xp[message.author.id].xp;
//let curlvl = xp[message.author.id].level;
//let nxtLvl = xp[message.author.id].level * 150;
//xp[message.author.id].xp = curxp + xpAdd;
//if(nxtLvl <= xp[message.author.id].xp){
//  xp[message.author.id].level = curlvl + 1;
//  xp[message.author.id].xp = 0;

//  if(message.author.bot) return;
//  let xpchannel = message.guild.channels.find(c => c.name === "staff_bot_commands");
//  if(!xpchannel) return message.channel.send("Couldn't find XP channel.");
//  xpchannel.send(`${message.author} just advanced to level ${curlvl + 1}!`);
//};

  // let lvl1Role = message.guild.roles.get("403690738916786197");
  // let lvl5Role = message.guild.roles.get("403158611506888704");
  // let lvl10Role = message.guild.roles.get("406436350611685376");
  // let lvl15Role = message.guild.roles.get("406436357473435649");
  // let lvl20Role = message.guild.roles.get("406436353102970880");
  // let lvl25Role = message.guild.roles.get("403158611703889931");
  // let lvl30Role = message.guild.roles.get("403158613209776128");
  // let lvl35Role = message.guild.roles.get("406436356470996992");
  // let lvl40Role = message.guild.roles.get("406436354126512138");
  // let lvl45Role = message.guild.roles.get("406436352167772161");
  // let lvl50Role = message.guild.roles.get("403158613679407104");
  // let lvl55Role = message.guild.roles.get("403158613864087552");
  // let lvl60Role = message.guild.roles.get("406436355879731201");
  // let lvl65Role = message.guild.roles.get("403158613994242060");
  // let lvl70Role = message.guild.roles.get("533706086205751318");
  // let lvl75Role = message.guild.roles.get("533706091297767424");
  // let lvl80Role = message.guild.roles.get("533706088797962270");
  // let lvl85Role = message.guild.roles.get("533706090047602691");
  // let lvl90Role = message.guild.roles.get("533706091066949643");
  // let lvl95Role = message.guild.roles.get("531237626045530112");
  // let lvl100Role = message.guild.roles.get("532295488947486720");
  // let memberXPLevel = message.member;


  // if (curlvl === 2) {
  //   memberXPLevel.addRole(lvl1Role).catch(console.error);
  //   }
  //   if (curlvl === 5) {
  //     memberXPLevel.addRole(lvl5Role).catch(console.error);
  //   }
  //   if (curlvl === 10) {
  //     memberXPLevel.addRole(lvl10Role).catch(console.error);
  //   }
  //   if (curlvl === 15) {
  //     memberXPLevel.addRole(lvl15Role).catch(console.error);
  //   }
  //   if (curlvl === 20) {
  //     memberXPLevel.addRole(lvl20Role).catch(console.error);
  //   }
  //   if (curlvl === 25) {
  //     memberXPLevel.addRole(lvl25Role).catch(console.error);
  //   }
  //   if (curlvl === 30) {
  //     memberXPLevel.addRole(lvl30Role).catch(console.error);
  //   }
  //   if (curlvl === 35) {
  //     memberXPLevel.addRole(lvl35Role).catch(console.error);
  //   }
  //   if (curlvl === 40) {
  //     memberXPLevel.addRole(lvl40Role).catch(console.error);
  //   }
  //   if (curlvl === 45) {
  //     memberXPLevel.addRole(lvl45Role).catch(console.error);
  //   }
  //   if (curlvl === 50) {
  //     memberXPLevel.addRole(lvl50Role).catch(console.error);
  //   }
  //   if (curlvl === 55) {
  //     memberXPLevel.addRole(lvl55Role).catch(console.error);
  //   }
  //   if (curlvl === 60) {
  //     memberXPLevel.addRole(lvl60Role).catch(console.error);
  //   }
  //   if (curlvl === 65) {
  //     memberXPLevel.addRole(lvl65Role).catch(console.error);
  //   }
  //   if (curlvl === 70) {
  //     memberXPLevel.addRole(lvl70Role).catch(console.error);
  //   }
  //   if (curlvl === 75) {
  //     memberXPLevel.addRole(lvl75Role).catch(console.error);
  //   }
  //   if (curlvl === 80) {
  //     memberXPLevel.addRole(lvl80Role).catch(console.error);
  //   }
  //   if (curlvl === 85) {
  //     memberXPLevel.addRole(lvl85Role).catch(console.error);
  //   }
  //   if (curlvl === 90) {
  //     memberXPLevel.addRole(lvl90Role).catch(console.error);
  //   }
  //   if (curlvl === 95) {
  //     memberXPLevel.addRole(lvl95Role).catch(console.error);
  //   }
  //   if (curlvl === 100) {
  //     memberXPLevel.addRole(lvl100Role).catch(console.error);
  //   }

//fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
//  if(err) console.log(err);
//});
//let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
//let prefix = prefixes[message.guild.id].prefixes;

//};
//if(!message.member.hasPermission("ADMINISTRATOR")){
//   cooldown.add(message.author.id);
//}

//let messageArray = message.content.split(" ");
//let cmd = messageArray[0];
//et args = messageArray.slice(1);

//let commandfile = bot.commands.get(cmd.slice(prefix.length));
//if(commandfile) commandfile.run(bot,message,args);

// setTimeout(() => {
//   cooldown.delete(message.author.id);
// }, 60000);
// }
//);

bot.login(botconfig.token);
