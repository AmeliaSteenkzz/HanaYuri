const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpCembed = new Discord.RichEmbed()
  .setTitle("Please choose a type of title")
  .setColor("#af0e97")
  .addField("Ultimate", "The rarest type of titles ever", true)
  .addField("Epic", "Gained by doing something incredible", true)
  .addField("Event", "Gained through a specific event", true)
  .addField("Uncommon", "Quickly or easily obtainable", true)
  .setFooter("Usage: h!titles {title type}");

  if(!args[0]) return message.channel.send(helpCembed);
  let question = args.slice(1).join(" ");

  let infoembed = new Discord.RichEmbed()
  .setDescription("Ultimate Titles")
  .setColor("#af0e97")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/531130449649467393/2000px-Icon-notepad.svg.png")
  .addField("<@&497410652772761601>", "test")

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

  if(args[0] === 'ultimate') {
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
  name: "titles"
}
