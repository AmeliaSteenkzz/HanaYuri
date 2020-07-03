const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Read nigga", "We do not have any obligation to provide protection to those being hurt by hurtful comments in this server. Everyone acts on their own accord. Neither the owner or moderators, admins or normal members are forced to punish or go against those who are spouting racist, dark, sexist, or any other kind of hateful comments, and are not responsible for them. If you're a sensitive person then it's advised to stay away from this server, or at the very least take precautions when participating. If you choose to ignore this warning then this is at your own risk. You have been warned.")
  .setFooter(`now enjoy your cyber-bullying`);
  message.channel.send(invEmbed);

}

module.exports.help = {
  name: "warning"
}
