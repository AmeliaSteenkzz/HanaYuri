const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry my dude, you can't do that");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message..channel.send("Usage: h!addrole *@user* *role*");
  if(!rMember) return message.channel.send("Couldn't find that user m8");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role, idiot");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role");
  await(rMember.addRole(gRole.id));

try{
  await rMember.send(`Congrats, you have been given ${gRole.name}. Thank you for donating to Hentai World!`)
}catch(e){
  message.channel.send(`Added ${gRole.name} to <@${rMember.id}>`)
  }
}

module.exports.help = {
  name: "addrole"
}
