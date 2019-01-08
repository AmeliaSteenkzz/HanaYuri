const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Hah nice try, idiot!")
 if(!args[0] || args[0 == "help"]) return message.reply("Usage: h!prefix {prefix}");

 let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

 prefixes[message.guild.id] = {
   prefixes: args[0]
 };

 fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
   if (err) console.log(err)
 });

 let prefixembed = new Discord.RichEmbed()
 .setColor("#af0e97")
 .setTitle("Prefix Set!")
 .setDescription(`Set to ${args[0]}`);

 message.channel.send(prefixembed);

}

module.exports.help = {
  name: "prefix"
}
