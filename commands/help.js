const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpCembed = new Discord.RichEmbed()
  .setTitle("Please choose a category")
  .setColor("#af0e97")
  .addField("Info", "general information about stuff", true)
  .addField("Fun", "extra things to play around with", true)
  .addField("Others", "extra commands for utility", true)
  .addField("Staff", "moderations for staff members", true)
  .setFooter("Usage: h!help {category name}");

  if(!args[0]) return message.reply(helpCembed);
  let question = args.slice(1).join(" ");

  let infoembed = new Discord.RichEmbed()
  .setDescription("Information Command List")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/531130449649467393/2000px-Icon-notepad.svg.png")
  .addField("h!help", "shows a list of all my commands")
  .addField("h!bots", "shows a list of all the bots and prefixes in the Hentai World")
  .addField("h!rules", "shows all the rules in the server")
  .addField("h!serverinfo", "information about the Hentai World")
  .addField("h!botinfo", "information about Hanayuri")
  .addField("h!userinfo", "information about a user")
  .addField("h!invite", "shows all available invites to the Hentai World")
  .addField("h!vips", "shows all VIP packs for donators")
  .addField("h!halloffame", "shows everyone in the Hall Of Fame")
  .addField("h!staff", "shows all current staff members")
  .addField("h!ping", "shows the response time of Hanayuri");

  let funembed = new Discord.RichEmbed()
  .setDescription("Fun Command List")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/531132326638387201/b8316909587b624d18cd4c52b27c653e.png")
  .addField("h!8ball", "ask Hanayuri a question")
  .addField("h!cat", "shows a random cat picture")
  .addField("dogembed", "shows a random doggo picture");

  let othersembed = new Discord.RichEmbed()
  .setDescription("Others Command List")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/531133221992398868/854145.png")
  .addField("h!report", "report someone in the server");

  let staffhelpembed = new Discord.RichEmbed()
  .setDescription("Staff Command List")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/531134577675337748/wrench-512.png")
  .addField("h!say", "let Hanayuri say something")
  .addField("h!clear", "delete an ammount of messages in the chat")
  .addField("h!addrole", "give someone a role")
  .addField("h!removerole", "remove a role from someone")
  .addField("h!warn", "warns someone. The more warnings, the bigger the punishment")
  .addField("h!tempmute", "mute a person from the chat for a set ammount of time");

  let nopermembed = new Discord.RichEmbed()
  .setTitle("You have no business here, peasant!")
  .setColor("#af0e97");

  if(args[0] === 'info') {
    message.channel.send(infoembed);
  }
  if(args[0] === 'fun') {
    message.channel.send(funembed);
  }
  if(args[0] === 'others') {
    message.channel.send(othersembed);
  }
  if(args[0] === 'staff') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    return message.channel.send(staffhelpembed);
  }
}

module.exports.help = {
  name: "help"
}
