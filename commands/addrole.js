const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("I'm sorry, but you can't do that");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!args[0]) return message.channel.send("Usage: h!addrole *@user* *role*");
  if(!rMember) return message.channel.send("Hmm I couldn't find that user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role, idiot");
  let gRole = message.guild.roles.find(r => r.name === role);
  if(!gRole) return message.reply("Couldn't find that role.");

  let reactEmbed = new Discord.RichEmbed()
  .addField("Congratulations! You recieved the title", `${gRole.name}`)
  .setColor("#af0e97");

  if(rMember.roles.has(gRole.id)) return message.channel.send("They already have that role");
  await(rMember.addRole(gRole.id));

try{
  await rMember.send(reactEmbed)
    message.channel.send(`Added ${gRole.name} to <@${rMember.id}>`)
}catch(e){
  }
}

module.exports.help = {
  name: "addrole"
}
