const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("This server is toxic bla bla bla, don't take anything personally bla bla bla, we might seem racist bla bla bla, we might look like shitty people bla bla bla")
  .setFooter(`now shut the fuck up`);
  message.channel.send(invEmbed);

}

module.exports.help = {
  name: "server"
}
