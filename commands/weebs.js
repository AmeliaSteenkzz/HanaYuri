const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let weebEmbed = new Discord.RichEmbed()
   .setColor("#af0e97")
   .setImage("https://cdn.discordapp.com/attachments/486583639253975042/590511306914660352/unknown.png");

  message.channel.send(weebEmbed);
}

module.exports.help = {
  name: "weebs"
}
