const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let sicon = messages.guild.iconURL;
  let rolesEmbed = new Discord.RichEmbed()
  .setTitle("Info Roles")
  .setColor("#af0e97")
  .setThumbnail(sicon)
  .addField("Shounen", "Black Clover\nBoku No Hero Academia\nDragon Ball Z\nFood Wars\nFull Metal Alchemist\nHunter x Hunter\nJoJo's Bizarre Adventure\nNaruto\nOne Piece\nShingeki no Kyojin\nYakusoku no Neverland", true)
  .addField("Supernatural", "Fairy Tail\nNanatsu No Taizai\nNoragami\nMirai Nikki\nMob Psycho 100\nOne Punch Man\nOverlord\nRe:Zero\nSword Art Online\nThe Rising of the Shield Hero\nTokyo Ghoul\nYoujo Senki", true)
  .addField("Slice of Life", "Azumanga Daioh\nK-On!!\nKobayashi-san Chi no Maid Dragon\nLucky Star\nNichijou\nSuzumiya Haruhi no Yuuutsu", true)
  .addField("Romance", "Bakemonogatari\nChuunibyou demo Koi ga Shitai!\nHigh School DxD\nKimi no Na wa.\nThe Devil is a Part-Timer!\nToradora!\nYour Lie in April ", true)
  .addField("Mecha", "Code Geass\nDarling in the FranXX\nGuilty Crown\nNeon Genesis Evangelion\nTengen Toppa Gurren Lagann", true)
  .addField("Sci-Fi", "Bobobo-bo Bo-bobo\nCowboy Bebop\nMade In Abyss\nSteins;Gate", true)
  .addField("Sports", "Haikyuu!!\nKeijo!!\nInitial D\nKuroko no Basket\nYuri!!! on Ice", true)
  .addField("Historical", "Drifters\nGintama\nInuyasha\nOokami to Koushinryou", true)
  .addField("Gaming", "BanG Dream\nIdolm@ster\nKantai Collection\nNeptunia\nPokémon\nYu-Gi-Oh\n", true)


  .setFooter("To add a role, use the command h!add {role}");

  messages.channel.send(rolesEmbed);
}
module.exports.help = {
  name: "roles"
}
