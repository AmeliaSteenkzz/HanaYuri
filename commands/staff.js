const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let staffembed = new Discord.RichEmbed()
  .setDescription("All Current Staff Members")
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Owner", `:${message.guild.roles.get('588438904668160010').members.map(m=>m.user).join('\n')}`)
  .addField("Admin", `:${message.guild.roles.get('588438924679184385').members.map(m=>m.user).join('\n')}`)
  .addField("Moderator", `:${message.guild.roles.get('588438942819287123').members.map(m=>m.user).join('\n')}`);

  message.channel.send(staffembed);

}

module.exports.help = {
  name: "staff"
}
