const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("Please ask a full question, dummy!");
  let replies = ["Yes", "No", "Definitely", "Of course not", "Maybe", "No... I mean yes... Well... Ask again later", "The answer is unclear... Seriously I double checked", "It's a coin flip really...", "Yes, he will... Sorry I wan't really listening", "I could tell you but I'd have to permanently ban you", "Yes, No, Maybe... I don't know, could you repeat the question?", "Do you REALLY want me to answer that? OK... Maybe", "Ask yourself this question in the mirror three times, the answer will become clear"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#af0e97")
  .addField("Question", question)
  .addField("Answer", replies[result])

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
