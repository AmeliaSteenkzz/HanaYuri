const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#af0e97")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name, true)
        .addField("Server ID", message.guild.id, true)
        .addField("Owner", message.guild.owner, true)
        .addField("Owner ID", message.guild.ownerID, true)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount, true)
        .addField("Verification Level", message.guild.verificationLevel, true)
        .addField("Region", message.guild.region, true)
        .addField("Total Roles", message.guild.roles.size, true)
        .addField("Total Channels", message.guild.channels.size, true)
        .addField("Invite Link", `https://discord.gg/bZqJN4s`, true);

        message.channel.send(serverembed);

}
module.exports.help = {
  name: "serverinfo"
}

