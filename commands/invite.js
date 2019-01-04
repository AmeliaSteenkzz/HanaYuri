const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()
  .setDescription("Server Invites")
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Instant Invite", `https://discord.gg/bZqJN4s`)
  .addField("DiscordServerList", `https://discord.sl/server/hentaiworld`)
  .addField("DiscordServers", `https://discord.chat/hentaiworld`)
  .addField("Discord.Me", `https://discord.me/hentaiworld`)
  .addField("Discord.IO", `https://discord.io/hentaiworld`)
  .addField("DiscordList.Me", `https://disco.gg/hentaiworld`)
  .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);
  message.channel.send(invEmbed);

}

module.exports.help = {
  name: "invite"
}
