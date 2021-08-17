const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!mUser) return message.channel.send("Can't find user");
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Only staff can order me that command");
  if(mUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Staff are un-banable");
  let muteRole = message.guild.roles.find(r => r.name === "❌Muted❌");

  let muteEmbed = new Discord.RichEmbed()
  .setDescription("Mute")
  .setColor("#f7c738")
  .addField("Muted user", `${mUser} ID ${mUser.id}`)
  .addField("Muted by", `<@${message.author.id}> ID ${message.author.id}`)
  .addField("Muted in", message.channel)
  .addField("Time", message.createdAt)
  let muteChannel = message.guild.channels.find(c => c.name === "ban_kick_mute_history");
  if(!muteChannel) return message.channel.send("Can't find incidents channel.");
  let muteEmbed2 = new Discord.RichEmbed()
  .setColor("#af0e97")
  .addField("Muted", `${mUser}`);

  if(mUser.roles.has(muteRole.id)) return message.channel.send("They are already muted");
    await(mUser.addRole(muteRole.id));

  message.guild.member(mUser.addRole(muteRole));
  muteChannel.send(muteEmbed)
  message.channel.send(muteEmbed2)
}

module.exports.help = {
  name: "mute"
}
