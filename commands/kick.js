const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Can't find user");
  let kReason = args.join(" ").slice(22);
  if (!kReason) return message.channel.send(`Please input a reason for the kick. Example: h!kick ${kUser}  reason`);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Only the staff can order me that command");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Staff are un-kickable");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#af0e97")
  .setThumbnail(kUser.displayAvatarURL)
  .addField("Kicked User", `${kUser} ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);
  let kickChannel = message.guild.channels.find(`name`, "ban_kick_mute_history");
  if(!kickChannel) return message.channel.send("Can't find incidents channel.");
  let kickEmbed2 = new Discord.RichEmbed()
  .setColor("#af0e97")
  .addField("Kicked", `${kUser}`);

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed)
  message.channel.send(kickEmbed2)
}
module.exports.help = {
  name: "kick"
}
