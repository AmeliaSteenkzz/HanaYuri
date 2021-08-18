const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 1;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./database/kamira/" + imageNumber + ".mp4"]} )


}

module.exports.help = {
  name: "kamira"
}
