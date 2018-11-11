const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("1.A", "Do not keep all drama and fights in the server.")
        .addField("1.B", "Do that in Private Messages, unless it has something to do with the server.")
        .addField("1.C", "If you continue with the drama or the fight, it will rise to a temporary mute. These rules also fall under aggression.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules1"
}
