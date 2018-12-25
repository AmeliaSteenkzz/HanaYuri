const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("2.A", "Have respect and be nice to everyone")
        .addField("2.B", "Cursing is allowed, but bullying, threatening, stalking, or using someone for your own needs isnt.")
        .addField("2.C", "Using racist words is allowed, except if the person your talking too is not cool with it.")
        .addField("2.D", "Do not send unwanted dickpics or nudes to people. If you do send unwanted nudes, then we are forced to remove you of the server.")
        .addField("2.E", "If we find out you take part in Pedophilia like actions in real life, we are forced to remove you of the server.")
        .addField("2.F", "Do not pretend to be someone else. Aka identity theft or catfishing. This could lead to a ban.")
        .addField("2.G", "Disrespecting Staff members could get you perma muted.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules2"
}
