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

  if(!args[0]) return message.channel.send(helpCembed);
  let question = args.slice(1).join(" ");

  let infoembed = new Discord.RichEmbed()
  .setDescription("Information command list")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893110629269534/Screenshot_3.png")
  .addField("h!help", "shows a list of all my commands")
  .addField("h!bots", "shows a list of all the bots and prefixes in the Hentai World")
  .addField("h!rules", "shows all the rules in the server")
  .addField("h!staff", "shows the whole staff")
  .addField("h!serverinfo", "information about the Anime World")
  .addField("h!botinfo", "information about me, Hanayuri")
  .addField("h!userinfo", "information about a user")
  .addField("h!invite", "shows all available invites to the Anime World")
  .addField("h!donate", "shows information and a link to donate and support the server")
  .addField("h!titles", "show a list of all titles")
  .addField("h!roles", "shows a list of all available extra roles that you can add")
  .addField("h!colors", "shows a list of all available colors that you can add")
  .addField("h!ping", "shows the response time of Hanayuri");

  let funembed = new Discord.RichEmbed()
  .setDescription("Fun command list")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893205303099432/Screenshot_12.png")
  .addField("h!8ball", "ask me a question")
  .addField("h!cat", "shows a random cat picture")
  .addField("h!doggo", "shows a random doggo picture");

  let othersembed = new Discord.RichEmbed()
  .setDescription("Others command list")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893208029528115/Screenshot_13.png")
  .addField("h!add", "add a role or color to yourself")
  .addField("h!remove", "remove a role or color from yourself")
  .addField("h!report", "report someone in the server")
  .addField("h!avatar", "get the avatar of a user in a URL");

  let staffhelpembed = new Discord.RichEmbed()
  .setDescription("Staff command list")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/589893195068866713/Screenshot_10.png")
  .addField("h!say", "let me say something")
  .addField("h!clear", "delete an ammount of messages in the chat")
  .addField("h!prefix", "change the prefix of Hanayuri")
  .addField("h!addrole", "give someone a role")
  .addField("h!removerole", "remove a role from someone")
  .addField("h!warn", "warns someone. The more warnings, the bigger the punishment")
  .addField("h!tempmute", "mute a person from the chat for a set ammount of time")
  .addField("h!kick", "kick someone from the server")
  .addField("h!ban", "ban someone from the server");

  let oocembed = new Discord.RichEmbed()
  .setDescription("Out of Commission command list")
  .setColor("#af0e97")
  .setThumbnail("")
  .addField("h!verfiy", "different way of verifying yourself")

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
  if(args[0] === 'ooc') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    return message.channel.send(oocembed);
  }
}

module.exports.help = {
  name: "help"
}
