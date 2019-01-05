const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  console.log('Pong!')
  startTime = Date.now()

  message.channel.send("Calculating...").then((message) => {
    endTime = Date.now()

    let ping = Math.round(endTime - startTime)
    let rounded = ping / 1000

    let pingembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .addField(":ping_pong: Pong!", `${ping} ms | ${rounded} seconds.`);

    message.channel.send(pingembed);
  });
}
module.exports.help = {
  name: "ping"
}
