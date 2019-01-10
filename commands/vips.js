const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let vipEmbed = new Discord.RichEmbed()
   .setTitle("Click here to donate")
   .setURL("https://donatebot.io/checkout/403133673408299009?buyer=246693689731186688")
   .setColor("#af0e97")
   .setImage("https://cdn.discordapp.com/attachments/486583639253975042/530507515713028114/unknown.png");

  message.channel.send(vipEmbed);
}

module.exports.help = {
  name: "vips"
}
