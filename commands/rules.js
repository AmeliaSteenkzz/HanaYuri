const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.iconURL;
    let rulesembed = new Discord.RichEmbed()
    .setDescription("Please choose a category")
    .setColor("#ff70ff")
    .setThumbnail(sicon)
    .addField("1", "Rules about fights and drama")
    .addField("2", "Rules about behavior")
    .addField("3", "Rules about using channels")
    .addField("4", "Rules about nsfw")
    .setFooter("Usage: h!rules {category number}");

    if(!args[0]) return message.channel.send(rulesembed);
    let question = args.slice(1).join(" ");

    let rules1embed = new Discord.RichEmbed()
    .setDescription("Do not keep all drama and fights in the server.")
    .setColor("#ff70ff")
    .setThumbnail(sicon)
    .addField("1.A", "Do that in Private Messages. if you continue with the drama or the fight, then you'll be muted.")
    .addField("1.B", "Likewise, don't bring needless personal- or DM drama into the server.")
    .addField("1.C", "We take no responsibility for the events that occur in PM / DM, unless it breaks the Discord Tos.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules2embed = new Discord.RichEmbed()
    .setDescription("Have respect and be nice to everyone")
    .setColor("#ff70ff")
    .setThumbnail(sicon)
    .addField("2.A", "Cursing is allowed, but bullying, threatening, stalking, or using someone for your own needs isnt. Basically don't be a dick.")
    .addField("2.B", "Using racist words is allowed. Can't believe I have to put this in here. It's the internet, what do you expect.")
    .addField("2.C", "Insults are allowed. The staff will warn you if insults go too far, to the point of bullying or hurting other people. If you continue after the warning, then you'll be muted.")
    .addField("2.D", "Do not send unwanted nudes in DMs to people. If you do send unwanted nudes, then we're forced to remove you from the server.")
    .addField("2.E", "Continuation of intended spam or being annoying leads to a mute or more if continued.")
    .addField("2.F", "If we find out you take part in Pedophilia like actions in real life, we are forced to remove you from the server.")
    .addField("2.G", "Do not pretend to be someone else. Aka identity theft or catfishing. This could lead to a ban.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules3embed = new Discord.RichEmbed()
    .setDescription("Keep the content in the right channels.")
    .setColor("#ff70ff")
    .setThumbnail(sicon)
    .addField("3.A", "No spamming, trolling, bullshitting or trash talking.")
    .addField("3.B", "It's not allowed to use bot commands in normal chats.")
    .addField("3.C", "It's not allowed to advertise your own server. That goes for in the server, aswell as in DM's.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules4embed = new Discord.RichEmbed()
    .setDescription("All kinds of hentai will be posted in the nsfw channels")
    .setColor("#ff70ff")
    .setThumbnail(sicon)
    .addField("4.A", "Keep the NSFW content in the NSFW marked channels.")
    .addField("4.B", "No Gore, Guro, Vore, Pedophilia, Necrophiliac or other weird disgusting shit.")
    .addField("4.C", "Dont judge other fetishes or hentai. This could get really iritating quick, just respect it, or dont say anything. Otherwise this can lead up to a perma-mute.")
    .addField("4.D", "You will be given the SFW role when you're 14 years of age or below.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    if(args[0] === '1') {
      message.channel.send(rules1embed);
    }
    if(args[0] === '2') {
      message.channel.send(rules2embed);
    }
    if(args[0] === '3') {
      message.channel.send(rules3embed);
    }
    if(args[0] === '4') {
      return message.channel.send(rules4embed);
    }
  }

module.exports.help = {
  name: "rules"
}
