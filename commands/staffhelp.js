const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let staffhelpembed = new Discord.RichEmbed()
  .setDescription("Staff Command List")
  .setColor("#ff70ff")
  .addField("h!staffhelp", "shows a list of all staff commands")
  .addField("h!say {text}", "let Hanayuri say something")
  .addField("h!clear {number}", "delete an ammount of messages in the chat")
  .addField("h!addrole @someone {role}", "give someone a role")
  .addField("h!removerole @someone {role}", "remove a role from someone")
  .addField("h!warn @someone", "warns someone. The more warnings, the bigger the punishment")
  .addField("h!tempmute @someone {time}", "mute a person from the chat for a set ammount of time");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You have no business here, peasant!");
  return message.channel.send(staffhelpembed);
}
module.exports.help = {
  name: "staffhelp"
}
