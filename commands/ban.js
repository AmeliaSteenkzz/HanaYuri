const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("Can't find user");
  let bReason = args.join(" ").slice(22);
  if (!bReason) return message.channel.send(`Please input a reason for the ban. Example: h!ban ${bUser}  reason`);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Only staff can order me that command");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Staff are un-banable");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#af0e97")
  .setThumbnail(bUser.displayAvatarURL)
  .addField("Banned User", `${bUser} ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);
  let banChannel = message.guild.channels.find(c => c.name === "other_logs");
  if(!banChannel) return message.channel.send("Can't find incidents channel.");
  let banEmbed2 = new Discord.RichEmbed()
  .setColor("#af0e97")
  .addField("Banned", `${bUser}`);

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed)
  message.channel.send(banEmbed2)
}

module.exports.help = {
  name: "ban"
}
