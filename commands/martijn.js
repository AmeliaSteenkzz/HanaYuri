const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 19;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./martijn/" + imageNumber + ".jpg"]} )


}

module.exports.help = {
  name: "martijn"
}
