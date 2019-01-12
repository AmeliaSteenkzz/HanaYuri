const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let sicon = messages.guild.iconURL;
  let rolesEmbed = new Discord.RichEmbed()
  .setTitle("Extra Roles")
  .setColor("#af0e97")
  .setThumbnail(sicon)
  .addField("Info", "Male\nFemale\nTransgender\nStraight\nHomosexual\nBisexual\nAsexual\nSingle\nTaken\nDom\nSub\nSwitch\nLevel Block", true)
  .addField("Likes", "Vanilla\nFetish\nAhegao\nFuta\nTentacles\nNeko\nLoli\nThicc\nBDSM\nFurry\nYuri\nYaoi", true)
  .setFooter("To add a role, use the command h!add {role}");

  messages.channel.send(rolesEmbed);
}
module.exports.help = {
  name: "roles"
}
