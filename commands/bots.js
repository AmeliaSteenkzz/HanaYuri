const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .addField("Bots", `:${message.guild.roles.get('536579349474836483').members.map(m=>m.user).join('\n')}`)
  return message.channel.send(helpembed);
}
module.exports.help = {
  name: "bots"
}
