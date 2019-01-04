const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("1.A", "Do not keep all drama and fights in the server.")
        .addField("1.B", "Do that in Private Messages. if you continue with the drama or the fight, then you'll be muted.")
        .addField("1.C", "We take no responsibility for the events that occur in Pm / Dm, unless it breaks the Discord Tos.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules1"
}
