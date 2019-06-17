const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let fameembed = new Discord.RichEmbed()
  .setDescription("Hall Of Fame")
  .setColor("#FFD700")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/530873400156225536/848351_cup_512x512.png")
  .addField("Everyone In The Hall Of Fame", `<@169518742106013696> <@460579880153645056> <@322477147476197379> <@442014182767067150> <@356392325271781386> <@276972608941981698> <@448444982219636748> <@228500259972710400> <@205254896386048001> <@353024868490543114> <@284843196201172993> <@353524058777976834>`);

  message.channel.send(fameembed);

}

module.exports.help = {
  name: "halloffame"
}
