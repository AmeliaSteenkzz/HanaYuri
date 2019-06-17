const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.iconURL;
    let rulesembed = new Discord.RichEmbed()
    .setDescription("Please choose a category")
    .setColor("#af0e97")
    .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/590186238036803585/Screenshot_20.png")
    .addField("1", "Rules about fights and arguments")
    .addField("2", "Rules about behavior")
    .addField("3", "Rules about content usage")
    .setFooter("Usage: h!rules {category number}");

    if(!args[0]) return message.channel.send(rulesembed);
    let question = args.slice(1).join(" ");

    let rules1embed = new Discord.RichEmbed()
    .setDescription("Drama and arguments in the server.")
    .setColor("#af0e97")
    .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/590186163348701184/Screenshot_17.png")
    .addField("1.A", "Starting or continuing drama in the server is strictly forbidden. Take it to DM's or somewhere else.")
    .addField("1.B", "Likewise, don't bring needless personal- or DM drama into the server.")
    .addField("1.C", "The staff always has the final saying. Disagreeing with the judgement of one will not do you any good.")
    .addField("1.D", "Using double accounts is allowed, but not to be used for bots or games to get an upper hand.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules2embed = new Discord.RichEmbed()
    .setDescription("Have respect and be nice to everyone")
    .setColor("#af0e97")
    .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/590186178666561545/Screenshot_18.png")
    .addField("2.A", "Cursing is allowed, but bullying, threatening, stalking, or using someone for your own needs isnt. Basically don't be a dick.")
    .addField("2.B", "Insults are allowed. The staff will warn you if insults go too far, to the point of bullying or hurting other people.")
    .addField("2.C", "Continuation of intended spam or being annoying leads to a mute or more if continued.")
    .addField("2.D", "Follow the Discord Terms Of Service and Guide Lines.\nTerms Of Service: https://discordapp.com/terms\nGuide Lines: https://discordapp.com/guidelines")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules3embed = new Discord.RichEmbed()
    .setDescription("Content in the right channels.")
    .setColor("#af0e97")
    .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/590188720951656448/Screenshot_22.png")
    .addField("3.A", "No spamming, trolling, bullshitting or trash talking.")
    .addField("3.B", "Use spoiler tags for spoilers. Failing to follow this rule might result in a mute or ban if needed.")
    .addField("3.C", "It's not allowed to advertise your own server. That goes for in the server, as well as in DM's.")
    .addField("3.D", "All kinds of NSFW will be posted in NSFW marked channels.")
    .addField("3.E", "Underaged content such as Lolicon, Shotacon, and horrible stuff like Necrophilia are not allowed.")
    .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

    let rules1Aembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("1.A: Starting or continuing drama in the server is strictly forbidden. Take it to DM's or somewhere else.");

    let rules1Bembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("1.B: Likewise, don't bring needless personal- or DM drama into the server.");

    let rules1Cembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("1.C: The staff always has the final saying. Disagreeing with the judgement of one will not do you any good.");

    let rules1Dembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("1.D: Using double accounts is allowed, but not to be used for bots or games to get an upper hand.");

    let rules2Aembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("2.A: Cursing is allowed, but bullying, threatening, stalking, or using someone for your own needs isnt. Basically don't be a dick.");

    let rules2Bembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("2.B: Insults are allowed. The staff will warn you if insults go too far, to the point of bullying or hurting other people.");

    let rules2Cembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("2.C: Continuation of intended spam or being annoying leads to a mute or more if continued.");

    let rules2Dembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("2.D: Follow the Discord Terms Of Service and Guide Lines.\nTerms Of Service: https://discordapp.com/terms\nGuide Lines: https://discordapp.com/guidelines");

    let rules3Aembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("3.A: No spamming, trolling, bullshitting or trash talking.");

    let rules3Bembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("3.B: Use spoiler tags for spoilers. Failing to follow this rule might result in a mute or ban if needed.");

    let rules3Cembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("3.C: It's not allowed to advertise your own server. That goes for in the server, as well as in DM's.");

    let rules3Dembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("3.D: All kinds of NSFW will be posted in NSFW marked channels.");

    let rules3Eembed = new Discord.RichEmbed()
    .setColor("#af0e97")
    .setTitle("3.E: Underaged content such as Lolicon, Shotacon, and horrible stuff like Necrophilia are not allowed.");

    if(args[0].toLowerCase() === '1') {
      message.channel.send(rules1embed);
    }
    if(args[0].toLowerCase() === '1.a') {
      message.channel.send(rules1Aembed);
    }
    if(args[0].toLowerCase() === '1.b') {
      message.channel.send(rules1Bembed);
    }
    if(args[0].toLowerCase() === '1.c') {
      message.channel.send(rules1Cembed);
    }
    if(args[0].toLowerCase() === '1.d') {
      message.channel.send(rules1Dembed);
    }
    if(args[0].toLowerCase() === '2') {
      message.channel.send(rules2embed);
    }
    if(args[0].toLowerCase() === '2.a') {
      message.channel.send(rules2Aembed);
    }
    if(args[0].toLowerCase() === '2.b') {
      message.channel.send(rules2Bembed);
    }
    if(args[0].toLowerCase() === '2.c') {
      message.channel.send(rules2Cembed);
    }
    if(args[0].toLowerCase() === '2.d') {
      message.channel.send(rules2Dembed);
    }
    if(args[0].toLowerCase() === '3') {
      message.channel.send(rules3embed);
    }
    if(args[0].toLowerCase() === '3.a') {
      message.channel.send(rules3Aembed);
    }
    if(args[0].toLowerCase() === '3.b') {
      message.channel.send(rules3Bembed);
    }
    if(args[0].toLowerCase() === '3.c') {
      message.channel.send(rules3Cembed);
    }
    if(args[0].toLowerCase() === '3.d') {
      message.channel.send(rules3Dembed);
    }
    if(args[0].toLowerCase() === '3.e') {
      message.channel.send(rules3Eembed);
    }
  }

module.exports.help = {
  name: "rules"
}
