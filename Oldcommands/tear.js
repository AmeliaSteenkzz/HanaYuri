const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 20;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./tear/" + imageNumber + ".jpg"]} )


}

module.exports.help = {
  name: "tear"
}
