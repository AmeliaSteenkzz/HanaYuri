const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {



  if(!messages.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nuh-uh");
  let botmessage = args.join(" ");
  messages.delete().catch();
  messages.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
