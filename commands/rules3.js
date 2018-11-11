const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("3.A", "Keep the content in the right channels.")
        .addField("3.B", "Keep the chats clean from fights or any kind of drama.")
        .addField("3.C", "No spamming, trolling, bullshitting or trash talking.")
        .addField("3.D", "Continuation of intended spam or being annoying leads to a mute or more if continued.")
        .addField("3.E", "It isnt allowed to promote or advertise your own server. That goes for in the server, aswell as in DM's.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules3"
}
