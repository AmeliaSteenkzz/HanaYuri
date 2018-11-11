const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Rules")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("4.A", "All kinds of Hentai will only be posted in channels with the nsfw tag")
        .addField("4.B", "No Gore, Guro, Vore, Pedophilia, Necrophiliac or other weird disgusting shit.")
        .addField("4.C", "Dont judge other fetishes or hentai. This could get really iritating quick, just respect it, or dont say anything. Otherwise this can lead up to a perma-mute.")
        .addField("4.D", "You will be given the SFW role when you're 13 years of age or below.");

        return message.channel.send(serverembed);

}
module.exports.help = {
  name: "rules4"
}
