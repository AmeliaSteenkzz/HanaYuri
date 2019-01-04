//BOTINFO COMMAND
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#af0e97")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username, true)
  .addField("Creator", message.guild.owner, true)
  .addField("Prefix", "h!", true)
  .addField("Bot ID", bot.user.id, true)
  .addField("Created On", bot.user.createdAt)
  .addField("Servers", message.guild.name);

  message.channel.send(botembed);

}
module.exports.help = {
  name: "botinfo"
}
