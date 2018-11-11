const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#ff70ff")
  .addField("h!help", "shows a list of all the commands")
  .addField("h!rules1/2/3/4", "shows the rules and laws of the server")
  .addField("h!report @someone reason", "report someone in the server")
  .addField("h!serverinfo", "info about the server")
  .addField("h!botinfo", "info about the bot")
  .addField("h!userinfo", "info about the user")
  .addField("h!ping", "shows the response time of the bot")
  .addField("[staff only] h!addrole @someone role", "gives someone a role")
  .addField("[staff only] h!removerole @someone role", "removes a role from someone")
  .addField("[staff only] h!warn @someone", "warn someone. the more warnings the person has, the bigger the punishment")
  .addField("[staff only] h!tempmute @someone time", "mute a person from the chat for a set ammount of time")
  .addField("[staff only] h!kick @someone reason", "kick a person from the server")
  .addField("[staff only] h!ban @someone reason", "ban a person from the server");
  
  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
