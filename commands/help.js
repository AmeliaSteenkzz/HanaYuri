const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#af0e97")
  .addField("h!help", "shows a list of all the commands")
  .addField("h!bots", "shows a list of all the bots and prefixes in the server")
  .addField("h!rules1/2/3/4", "shows the rules and laws of the server")
  .addField("h!report @someone reason", "report someone in the server")
  .addField("h!serverinfo", "info about the server")
  .addField("h!botinfo", "info about the bot")
  .addField("h!userinfo", "info about the user")
  .addField("h!invite", "shows all invites to this server")
  .addField("h!vips", "shows all VIP packs for donators")
  .addField("h!halloffame", "shows the Hall Of Fame")
  .addField("h!staff", "shows all current staff members")
  .addField("h!ping", "shows the response time of the bot")
  .addField("h!8ball question", "ask Hanayuri a random question")
  .addField("h!cat", "shows a random cat picture")
  .addField("h!doggo", "shows a random doggo picture")
  
  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
