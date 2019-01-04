const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("2.A", "Have respect and be nice to everyone")
        .addField("2.B", "Cursing is allowed, but bullying, threatening, stalking, or using someone for your own needs isnt.")
        .addField("2.C", "Using racist words is allowed. Can't believe I have to put this in here. It's the internet, what do you expect.")
        .addField("2.D", "Do not send unwanted dickpics or nudes to people. If you do send unwanted nudes, then we are forced to remove you of the server.")
        .addField("2.E", "If we find out you take part in Pedophilia like actions in real life, we are forced to remove you of the server.")
        .addField("2.F", "Do not pretend to be someone else. Aka identity theft or catfishing. This could lead to a ban.")
        .addField("2.G", "Insults are allowed. The staff will warn you if insults go too far, to the point of bullying or hurting other people. If you continue after the warning, then you'll be muted.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules2"
}
