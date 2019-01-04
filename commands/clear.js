const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {

  if(!messages.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Fuck off");
  if(!args[0]) return messages.channel.send("Fuck off will ya?");
  let clearEmbed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle(`Cleared ${args[0]} messages for you!`);

  messages.channel.bulkDelete(args[0]).then(() => {
    messages.channel.send(clearEmbed).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
