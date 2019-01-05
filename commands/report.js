//REPORT COMMAND
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!args[0]) return message.channel.send("Usage: h!report *@user* reason");
      if(!rUser) return message.channel.send("Couldn't find user.");
      if(!args[1]) return message.channel.send("Input a reason or explanation for the report");
      let reason = args.join(" ").slice(22);
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#ff5d01")
      .setThumbnail(rUser.user.displayAvatarURL)
      .addField("Reported User", `${rUser} ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

      let reporterEmbed = new Discord.RichEmbed()
      .setTitle("Your report has been recieved!")
      .setColor("#af0e97");

      let reportschannel = message.guild.channels.find(c => c.name === "other_logs");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed).then(msg => message.channel.send(reporterEmbed));

}

module.exports.help = {
  name: "report"
}
