const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let staffembed = new Discord.RichEmbed()
  .setDescription("All Current Staff Members")
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Owner", `<@246693689731186688>`)
  .addField("Admin", `<@377284513723842561>`)
  .addField("Mods", `<@253227808208191488> <@302469215779160065> <@203471080742977538>`);

  message.channel.send(staffembed);

}

module.exports.help = {
  name: "staff"
}
