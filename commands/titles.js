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
  .addField("Ultimate Gift Giver💐", "Donate $50+ to the server")

  let funembed = new Discord.RichEmbed()
  .setDescription("Epic Titles")
  .setColor("#af0e97")
  .addField("King Of Ranks👑", "Be on the LeaderBoard, aka. be in the top 10 of level members.")
  .addField("Vip Supporter✨", "For members who've donated $5+ to the server.")
  .addField("Server Savior💎", "For all the members who helped us re-build the Hentai World when the server wipe occurred.");

  let othersembed = new Discord.RichEmbed()
  .setDescription("Uncommon Titles")
  .setColor("#af0e97")
  .addField("Invite Warrior📜", "Invite 10+ people to this server.")
  .addField("Reddit Master🤖", "Be active in the Hentai World reddit.");

  let staffhelpembed = new Discord.RichEmbed()
  .setDescription("Event Titles")
  .setColor("#af0e97")
  .addField("Valentine Lover💗", "Obtainable in the Valentine Event")
  .addField("3K Event Pimp⭐", "Obtainable in the 3K Members Event.")
  .addField("Ice Cold Snowman⛄", "Obtainable in the Halloween Event.")
  .addField("Spooky Pumpkin🎃", "Obtainable in the Christmas Event.")

  let nopermembed = new Discord.RichEmbed()
  .setTitle("You have no business here, peasant!")
  .setColor("#af0e97");

  if(args[0] === 'ultimate') {
    message.channel.send(infoembed);
  }
  if(args[0] === 'epic') {
    message.channel.send(funembed);
  }
  if(args[0] === 'uncommon') {
    message.channel.send(othersembed);
  }
  if(args[0] === 'event') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    return message.channel.send(staffhelpembed);
  }
}

module.exports.help = {
  name: "titles"
}
