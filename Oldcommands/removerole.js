const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  
  if(!message.member.hasPermission("")) return message.reply("I'm sorry, but you can't do that");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(r => r.name === role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role");
  await(rMember.removeRole(gRole.id));

  let reactEmbed = new Discord.RichEmbed()
  .addField("That's too bad, you lost the title", `${gRole.name}`)
  .setColor("#af0e97");

try{
  await rMember.send(reactEmbed)
    message.channel.send(`Removed ${gRole.name} from <@${rMember.id}>`)
}catch(e){
  }
}


module.exports.help = {
  name: "removerole"
}
