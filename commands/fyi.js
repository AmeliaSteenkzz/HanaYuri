const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

number = 1;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;

message.channel.send ( {files: ["./208651ef76f11b493e300793fcacd99143c5cb81a2156b5209c34886955e086b_1/" + imageNumber + ".mp4"]} )


}

module.exports.help = {
  name: "fyi"
}
