const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let channelVerify = message.guild.channels.find(c => c.name === "ios_browser_verification");
let roleUnverified = message.guild.roles.find(r => r.name === "Unverified");
let memberVerify = message.member;

let verifiedEmbed = new Discord.RichEmbed()
.setTitle(`✔️ ${message.author.tag} has been verified`)
.setColor("#af0e97")

if(memberVerify.roles.has(!roleUnverified.id)) return;
message.channel.send(verifiedEmbed);
memberVerify.removeRole(roleUnverified).catch(console.error);
}

module.exports.help = {
  name: "verify"
}
