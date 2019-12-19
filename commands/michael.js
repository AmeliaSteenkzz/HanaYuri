const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 33;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./Michael/" + imageNumber + ".jpg"]} )


}

module.exports.help = {
  name: "michael"
}
