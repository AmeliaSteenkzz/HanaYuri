 const Discord = require("discord.js");
 const mysql = require("mysql");
// let xp = require("../xp.json");

 // module.exports.run = async (bot, message, args) => {
 //
 //  if(!xp[message.author.id]){
 //  xp[message.author.id] = {
 //    xp: 0,
 //    level: 1
 //  };
 // }
 //  let curxp = xp[message.author.id].xp;
 //  let curlvl = xp[message.author.id].level;
 //  let nxtLvlXp = curlvl * 150;
 //  let difference = nxtLvlXp - curxp;
 //
 //  let lvlEmbed = new Discord.RichEmbed()
 //  .setAuthor(message.author.username)
 //  .setColor("#af0e97")
 //  .setThumbnail(message.author.displayAvatarURL)
 //  .addField("Level", curlvl, true)
 //  .addField("XP", curxp, true)
 //  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);
 //
 //  return message.channel.send(lvlEmbed);
 // }
 // module.exports.help = {
 //   name: "rank"
 // }

module.exports.run = async (bot, message, args, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    let xp = rows[0].xp;
    message.channel.send(xp);
  });
}

module.exports.help = {
  name: "rank"
}
