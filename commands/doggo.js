const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setcolor("#ff70ff")
  .setTitle("Doggo")
  .setImage(body.url);

  message.channel.send(dogembed);
}

module.exports.help = {
  name: "doggo"
}
