const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send({
      file: "https://cdn.discordapp.com/attachments/486583639253975042/530507515713028114/unknown.png"
  });

}

module.exports.help = {
  name: "vips"
}
