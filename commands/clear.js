const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {



  if(!messages.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Fuck off");
  if(!args[0]) return messages.channel.send("Fuck off will ya?");
  messages.channel.bulkDelete(args[0]).then(() => {
    messages.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
