const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  console.log('Pong!')
  startTime = Date.now()

  message.channel.send(":ping_pong: Pong!").then((message) => {
    endTime = Date.now()

    let ping = Math.round(endTime - startTime)
    let rounded = ping / 1000

    message.channel.send(` ${ping} ms | ${rounded} seconds.`);
  });
}
module.exports.help = {
  name: "ping"
}
