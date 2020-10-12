const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 39;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./atsu/" + imageNumber + ".jpg"]} )


}

module.exports.help = {
  name: "atsu"
}
