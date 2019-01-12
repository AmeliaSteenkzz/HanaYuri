const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let sicon = messages.guild.iconURL;
  let colorEmbed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .setThumbnail(sicon)
  .addField("Color Roles", "CyanColor\nLightBlueColor\nBlueColor\nDarkBlueColor\nLightGreenColor\nGreenColor\nDarkGreenColor\nBloodRedColor\nRedColor\nDarkRedColor\nSweetPurpleColor\nPurpleColor\nPinkColor\nBurntOrangeColor\nOrangeColor\nYellowColor\nGreyColor\nBlackColor")
  .setFooter("To add a color, use the command h!add {color}");

  messages.channel.send(colorEmbed);
}
module.exports.help = {
  name: "colors"
}
