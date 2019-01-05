const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("")) return message.channel.send("Sorry my dude, you can't do that");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("Couldn't find that user m8");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("They don't have that role");
  await(rMember.removeRole(gRole.id));

try{
  await rMember.send(`Your ${gRole.name} has expired.`)
}catch(e){
  message.channel.send(`Removed ${gRole.name} from <@${rMember.id}>`)
  }
}


module.exports.help = {
  name: "removerole"
}
