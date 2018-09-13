const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#ff70ff")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Server ID", message.guild.id)
        .addField("Owner", message.guild.owner)
        .addField("Owner ID", message.guild.ownerID)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount)
        .addField("Verification Level", message.guild.verificationLevel)
        .addField("Region", message.guild.region)
        .addField("Total Roles", message.guild.roles.size)
        .addField("Total Channels", message.guild.channels.size)
        .addField("Invite Link", "https://discord.gg/vGu2qEj");

        message.channel.send(serverembed);

}
module.exports.help = {
  name: "serverinfo"
}
