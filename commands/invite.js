const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()
  .setDescription("Server Invites")
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Instant Invite", `https://discord.gg/kaVUygM`)
  .addField("Discord.io", `https://discord.io/animeworld`)
  .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);
  message.channel.send(invEmbed);

}

module.exports.help = {
  name: "invite"
}
