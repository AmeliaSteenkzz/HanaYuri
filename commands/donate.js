const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let donateEmbed = new Discord.RichEmbed()
   .setTitle("Click here to donate")
   .setURL("https://donatebot.io/checkout/588325071798403082?buyer=246693689731186688")
   .addField("Thank you for being interested in supporting us! <3", "As you might know, we don't have any special benefits for donators except for the <@&588676209035051041> title. This is because we want to create a fair and balanced experience that is accessible for everyone. But if we get a lot of support and/or needs for it in the future, then we would certainly take it into consideration!")
   .addField("Information", "If you want to donate and support us, then click the link at the top of this message. Thank you for considering it, we really mean it. If you ever want to know what we use the donation money for, then you're always welcome to DM me (<@246693689731186688>)!")
   .setColor("#af0e97")
   .setImage("https://cdn.discordapp.com/attachments/486583639253975042/589886389965947067/unknown.png");

  message.channel.send(donateEmbed);
}

module.exports.help = {
  name: "donate"
}
