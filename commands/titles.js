const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let titleembed = new Discord.RichEmbed()
  .setTitle("Please choose a type of title")
  .setColor("#af0e97")
  .addField("Legendary", "Ultra rare ones that very few people have. Typically the hardest of the hardest tasks.", true)
  .addField("Epic", "A lot less common as Rare titles. Typically harder to get as well.", true)
  .addField("Rare", "Easiest types of titles to get.", true)
  .addField("Limited", "Will go away after a certain time and will never be available again. Mostly not hard to get.")
  .setFooter("Usage: h!titles {title type}");

  if(!args[0]) return message.channel.send(titleembed);
  let question = args.slice(1).join(" ");

  let legendaryembed = new Discord.RichEmbed()
  .setDescription("Legendary Titles")
  .setColor("#af0e97")
  .addField("Names and how to obtain", "<@&588676209035051041> Donate to the Anime World server.\n<@&588676211983777792> Be in the top 3 highest member levels. To see the top 10 go to #leaderboard.")

  let epicembed = new Discord.RichEmbed()
  .setDescription("Epic Titles")
  .setColor("#af0e97")
  .addField("Names and how to obtain", "<@&588664739362504715> Boost the server with Nitro Server Boost.\n<@&588676209357881364> Be in the top 10 highest member levels. To see the top 10 go to #leaderboard.\n<@&588709100737789952> Reach level 50 in ranks.")

  let rareembed = new Discord.RichEmbed()
  .setDescription("Rare Titles")
  .setColor("#af0e97")
  .addField("Names and how to obtain", "<@&588676207202140162> Invite 10 or more people to the server. Duplicate accounts do not count as an invite.\n<@&588676208099590144> Bump the server frequently in the #bump_island channel.\n<@&588740057855295488> Win the weekly EXP event by gathering the most EXP out of anyone in a week.")

  let limitedembed = new Discord.RichEmbed()
  .setDescription("Limited Titles")
  .setColor("#af0e97")
  .addField("Names and how to obtain", "<@&588676208737255435> Be part of the first 100 users to join the community.")

  if(args[0] === 'legendary') {
    message.channel.send(legendaryembed);
  }
  if(args[0] === 'epic') {
    message.channel.send(epicembed);
  }
  if(args[0] === 'rare') {
    message.channel.send(rareembed);
  }
  if(args[0] === 'limited') {
    message.channel.send(limitedembed);
  }
}

module.exports.help = {
  name: "titles"
}
