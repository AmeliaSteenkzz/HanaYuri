const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Use the prefix from a bot with the help command to get more info.")
  .setColor("#af0e97")
  .addField("Normal Bots", "`42 [+]` `AmariBot [!]` `Ayana [=]` `Ayana Beta [=]` `Carl-bot [!rr]` `Dank Memer [pls ]` `Donate Bot [donate]` `Dyno [?]` `Hanayuri [h!]` `Jeanne [s/]` `Koya [^^]` `Miki [>]` `Nadeko [.]` `Namiko [!]` `Nekobot [n!]` `Paisley Park [-]` `Park Battles [-]` `Pokécord [p!]` `Pollux [+]` `qtChan [-]` `Tatsumaki [t!]` `Yggdrasil [--]` `ZeroTwo [zt!]`")
  .addField("Music Bots", "`FredBoat♪♪ [;;]` `Mantaro [->]` `Rythm []`")
  .addField("Waifu Bots", "`Mudae [$]` `Mudamaid4 [$]`")
  .addField("Bump Bots", "` []`")
  return message.channel.send(helpembed);
}
module.exports.help = {
  name: "bots"
}
