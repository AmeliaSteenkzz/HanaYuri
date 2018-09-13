const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#ff70ff")
  .addField("h!help", "shows a list of all the commands")
  .addField("h!report @someone reason", "report someone in the server")
  .addField("h!serverinfo", "info about the server")
  .addField("h!botinfo", "info about the bot")
  .addField("h!userinfo", "info about the user")
  .addField("h!ping", "shows the response time of the bot")
  .addField("h!kick @someone reason [staff only]", "kick a person from the server")
  .addField("h!ban @someone reason [staff only]", "ban a person from the server");

  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
