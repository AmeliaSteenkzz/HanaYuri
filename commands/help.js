const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#ff70ff")
  .addField("h!help", "shows a list of all the commands")
  .addField("h!bots", "shows a list of all the bots and prefixes in the server")
  .addField("h!rules1/2/3/4", "shows the rules and laws of the server")
  .addField("h!report @someone reason", "report someone in the server")
  .addField("h!serverinfo", "info about the server")
  .addField("h!botinfo", "info about the bot")
  .addField("h!userinfo", "info about the user")
  .addField("h!ping", "shows the response time of the bot")
  .addField("h!cat", "shows a random cat picture")
  .addField("h!doggo", "shows a random doggo picture")
  .addField("h!coins", "shows how much coins you have")
  .addField("h!pay", "pay someone an amount of money")
  
  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
