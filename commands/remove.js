const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let noRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ You didn't specify a role")
.setColor("#af0e97")
.setFooter("Use h!roles to see all available roles");

if(!args[0]) return message.channel.send(noRoleEmbed);
let question = args.slice(1).join(" ");

let addEmbed = new Discord.RichEmbed()
.setTitle(`✔️ Role removed from ${message.author.tag}`)
.setColor("#af0e97");

let alreadyEmbed = new Discord.RichEmbed()
.setTitle("❌ You don't have that role added")
.setColor("#af0e97");

let wrongRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ That role doesn't exist")
.setColor("#af0e97")
.setFooter("Use h!roles to see all available roles");

let roleBasicColor = message.guild.roles.find(r => r.name === "BasicColor");
let roleIndianRedColor = message.guild.roles.find(r => r.name === "IndianRedColor");
let roleCrimsonColor = message.guild.roles.find(r => r.name === "CrimsonColor");
let roleRedColor = message.guild.roles.find(r => r.name === "RedColor");
let roleDarkRed = message.guild.roles.find(r => r.name === "DarkRed");
let rolePinkColor = message.guild.roles.find(r => r.name === "PinkColor");
let roleHotPinkColor = message.guild.roles.find(r => r.name === "HotPinkColor");
let roleVioletRedColor = message.guild.roles.find(r => r.name === "VioletRedColor");
let roleLightSalmonColor = message.guild.roles.find(r => r.name === "LightSalmonColor");
let roleOrangeRedColor = message.guild.roles.find(r => r.name === "OrangeRedColor");
let roleDarkOrangeColor = message.guild.roles.find(r => r.name === "DarkOrangeColor");
let roleGoldColor = message.guild.roles.find(r => r.name === "GoldColor");
let roleYellowColor = message.guild.roles.find(r => r.name === "YellowColor");
let roleMoccasinColor = message.guild.roles.find(r => r.name === "MoccasinColor");
let roleKhakiColor = message.guild.roles.find(r => r.name === "KhakiColor");
let roleDarkKhakiColor = message.guild.roles.find(r => r.name === "DarkKhakiColor");
let roleVioletColor = message.guild.roles.find(r => r.name === "VioletColor");
let roleMagentaColor = message.guild.roles.find(r => r.name === "MagentaColor");
let roleMediumOrchidColor = message.guild.roles.find(r => r.name === "MediumOrchidColor");
let roleBlueVioletColor = message.guild.roles.find(r => r.name === "BlueVioletColor");
let roleDarkMagentaColor = message.guild.roles.find(r => r.name === "DarkMagentaColor");
let roleIndigoColor = message.guild.roles.find(r => r.name === "IndigoColor");
let roleDarkSlateBlueColor = message.guild.roles.find(r => r.name === "DarkSlateBlueColor");
let roleMediumSlateBlueColor = message.guild.roles.find(r => r.name === "MediumSlateBlueColor");
let roleGreenYellowColor = message.guild.roles.find(r => r.name === "GreenYellowColor");
let roleLimeColor = message.guild.roles.find(r => r.name === "LimeColor");
let roleLimeGreenColor = message.guild.roles.find(r => r.name === "LimeGreenColor");
let rolePaleGreenColor = message.guild.roles.find(r => r.name === "PaleGreenColor");
let roleSpringGreenColor = message.guild.roles.find(r => r.name === "SpringGreenColor");
let roleSeaGreenColor = message.guild.roles.find(r => r.name === "SeaGreenColor");
let roleGreenColor = message.guild.roles.find(r => r.name === "GreenColor");
let roleDarkGreenColor = message.guild.roles.find(r => r.name === "DarkGreenColor");
let roleOliveColor = message.guild.roles.find(r => r.name === "OliveColor");
let roleAquamarineColor = message.guild.roles.find(r => r.name === "AquamarineColor");
let roleDarkCyanColor = message.guild.roles.find(r => r.name === "DarkCyanColor");
let roleCyanColor = message.guild.roles.find(r => r.name === "CyanColor");
let roleTurquoiseColor = message.guild.roles.find(r => r.name === "TurquoiseColor");
let roleLightCyanColor = message.guild.roles.find(r => r.name === "LightCyanColor");
let roleCadetBlueColor = message.guild.roles.find(r => r.name === "CadetBlueColor");
let roleSteelBlueColor = message.guild.roles.find(r => r.name === "SteelBlueColor");
let rolePowderBlueColor = message.guild.roles.find(r => r.name === "PowderBlueColor");
let roleSkyBlueColor = message.guild.roles.find(r => r.name === "SkyBlueColor");
let roleDeepSkyBlueColor = message.guild.roles.find(r => r.name === "DeepSkyBlueColor");
let roleDodgerBlueColor = message.guild.roles.find(r => r.name === "DodgerBlueColor");
let roleSlateBlueColor = message.guild.roles.find(r => r.name === "SlateBlueColor");
let roleBlueColor = message.guild.roles.find(r => r.name === "BlueColor");
let roleDarkBlueColor = message.guild.roles.find(r => r.name === "DarkBlueColor");
let roleWheatColor = message.guild.roles.find(r => r.name === "WheatColor");
let roleBurlyWoodColor = message.guild.roles.find(r => r.name === "BurlyWoodColor");
let roleRosyBrownColor = message.guild.roles.find(r => r.name === "RosyBrownColor");
let roleSandyBrownColor = message.guild.roles.find(r => r.name === "SandyBrownColor");
let roleGoldenRodColor = message.guild.roles.find(r => r.name === "GoldenRodColor");
let roleDarkGoldenRodColor = message.guild.roles.find(r => r.name === "DarkGoldenRodColor");
let roleChocolateColor = message.guild.roles.find(r => r.name === "ChocolateColor");
let roleSaddleBrownColor = message.guild.roles.find(r => r.name === "SaddleBrownColor");
let roleBrownColor = message.guild.roles.find(r => r.name === "BrownColor");
let roleMaroonColor = message.guild.roles.find(r => r.name === "MaroonColor");
let roleWhiteColor = message.guild.roles.find(r => r.name === "WhiteColor");
let roleBeigeColor = message.guild.roles.find(r => r.name === "BeigeColor");
let roleLavenderBlushColor = message.guild.roles.find(r => r.name === "LavenderBlushColor");
let roleMistyRoseColor = message.guild.roles.find(r => r.name === "MistyRoseColor");
let roleSilverColor = message.guild.roles.find(r => r.name === "SilverColor");
let roleGrayColor = message.guild.roles.find(r => r.name === "GrayColor");
let roleSlateGrayColor = message.guild.roles.find(r => r.name === "SlateGrayColor");
let roleDarkSlateGrayColor = message.guild.roles.find(r => r.name === "DarkSlateGrayColor");
let roleBlackColor = message.guild.roles.find(r => r.name === "BlackColor");

let roleYakusokunoNeverland = message.guild.roles.find(r => r.name === "Yakusoku no Neverland");
let roleBlackClover = message.guild.roles.find(r => r.name === "Black Clover");
let roleNanatsuNoTaizai = message.guild.roles.find(r => r.name === "Nanatsu No Taizai");
let roleReZero = message.guild.roles.find(r => r.name === "Re:Zero");
let roleFairyTail = message.guild.roles.find(r => r.name === "Fairy Tail");
let roleBokuNoHeroAcademia = message.guild.roles.find(r => r.name === "Boku No Hero Academia");
let roleGintama = message.guild.roles.find(r => r.name === "Gintama");
let roleJoJosBizarreAdventure = message.guild.roles.find(r => r.name === "JoJo's Bizarre Adventure");
let rolePokémon = message.guild.roles.find(r => r.name === "Pokémon");
let roleKobayashisanChinoMaidDragon = message.guild.roles.find(r => r.name === "Kobayashi-san Chi no Maid Dragon");
let roleOnePiece = message.guild.roles.find(r => r.name === "One Piece");
let roleTheRisingoftheShieldHero = message.guild.roles.find(r => r.name === "The Rising of the Shield Hero");
let roleNaruto = message.guild.roles.find(r => r.name === "Naruto");
let roleDarlingintheFranXX = message.guild.roles.find(r => r.name === "Darling in the FranXX");
let roleInuyasha = message.guild.roles.find(r => r.name === "Inuyasha");
let roleShingekinoKyojin = message.guild.roles.find(r => r.name === "Shingeki no Kyojin");
let roleLuckyStar = message.guild.roles.find(r => r.name === "Lucky Star");
let roleFullMetalAlchemist = message.guild.roles.find(r => r.name === "Full Metal Alchemist");
let roleOverlord = message.guild.roles.find(r => r.name === "Overlord");
let roleMadeInAbyss = message.guild.roles.find(r => r.name === "Made In Abyss");
let roleDragonBallZ = message.guild.roles.find(r => r.name === "Dragon Ball Z");
let roleMobPsycho100 = message.guild.roles.find(r => r.name === "Mob Psycho 100");
let roleOnePunchMan = message.guild.roles.find(r => r.name === "One Punch Man");
let roleAzumangaDaioh = message.guild.roles.find(r => r.name === "Azumanga Daioh");
let roleNoragami = message.guild.roles.find(r => r.name === "Noragami");
let roleTokyoGhoul = message.guild.roles.find(r => r.name === "Tokyo Ghoul");
let roleYoujoSenki = message.guild.roles.find(r => r.name === "Youjo Senki");
let roleHighSchoolDxD = message.guild.roles.find(r => r.name === "High School DxD");
let roleYurionIce = message.guild.roles.find(r => r.name === "Yuri!!! on Ice");
let roleHaikyuu = message.guild.roles.find(r => r.name === "Haikyuu!!");
let roleKurokonoBasket = message.guild.roles.find(r => r.name === "Kuroko no Basket");
let roleKeijo = message.guild.roles.find(r => r.name === "Keijo!!!!!!!!");
let roleInitialD = message.guild.roles.find(r => r.name === "Initial D");
let roleOokamitoKoushinryou = message.guild.roles.find(r => r.name === "Ookami to Koushinryou");
let roleDrifters = message.guild.roles.find(r => r.name === "Drifters");
let roleKOn = message.guild.roles.find(r => r.name === "K-On!!");
let roleMiraiNikki = message.guild.roles.find(r => r.name === "Mirai Nikki");
let roleHunterxHunter = message.guild.roles.find(r => r.name === "Hunter x Hunter");
let roleFoodWars = message.guild.roles.find(r => r.name === "Food Wars");
let roleYuGiOh = message.guild.roles.find(r => r.name === "Yu-Gi-Oh");
let roleIdolmaster = message.guild.roles.find(r => r.name === "Idolm@ster");
let roleKantaiCollection = message.guild.roles.find(r => r.name === "Kantai Collection");
let roleNeptunia = message.guild.roles.find(r => r.name === "Neptunia");
let roleBanGDream = message.guild.roles.find(r => r.name === "BanG Dream");
let roleSteinsGate = message.guild.roles.find(r => r.name === "Steins;Gate");
let roleCodeGeass = message.guild.roles.find(r => r.name === "Code Geass");
let roleTengenToppaGurrenLagann = message.guild.roles.find(r => r.name === "Tengen Toppa Gurren Lagann");
let roleCowboyBebop = message.guild.roles.find(r => r.name === "Cowboy Bebop");
let roleNeonGenesisEvangelion = message.guild.roles.find(r => r.name === "Neon Genesis Evangelion");
let roleGuiltyCrown = message.guild.roles.find(r => r.name === "Guilty Crown");
let roleSuzumiyaHaruhinoYuuutsu = message.guild.roles.find(r => r.name === "Suzumiya Haruhi no Yuuutsu");
let roleToradora = message.guild.roles.find(r => r.name === "Toradora!");
let roleKiminoNawa = message.guild.roles.find(r => r.name === "Kimi no Na wa.");
let roleSwordArtOnline = message.guild.roles.find(r => r.name === "Sword Art Online");
let roleYourLieinApril = message.guild.roles.find(r => r.name === "Your Lie in April");
let roleBakemonogatari = message.guild.roles.find(r => r.name === "Bakemonogatari");
let roleTheDevilisaPartTimer = message.guild.roles.find(r => r.name === "The Devil is a Part-Timer!");
let roleChuunibyoudemoKoigaShitai = message.guild.roles.find(r => r.name === "Chuunibyou demo Koi ga Shitai!");
let roleBoboboboBobobo = message.guild.roles.find(r => r.name === "Bobobo-bo Bo-bobo");
let memberRoleAdd = message.member;

if(args[0].toLowerCase() === 'indianredcolor') {
  if(!memberRoleAdd.roles.has(roleIndianRedColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleIndianRedColor).catch(console.error);
}
if(args[0].toLowerCase() === 'crimsoncolor') {
  if(!memberRoleAdd.roles.has(roleCrimsonColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCrimsonColor).catch(console.error);
}
if(args[0].toLowerCase() === 'redcolor') {
  if(!memberRoleAdd.roles.has(roleRedColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkred') {
  if(!memberRoleAdd.roles.has(roleDarkRed.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkRed).catch(console.error);
}
if(args[0].toLowerCase() === 'pinkcolor') {
  if(!memberRoleAdd.roles.has(rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0].toLowerCase() === 'hotpinkcolor') {
  if(!memberRoleAdd.roles.has(roleHotPinkColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHotPinkColor).catch(console.error);
}
if(args[0].toLowerCase() === 'violetredcolor') {
  if(!memberRoleAdd.roles.has(roleVioletRedColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleVioletRedColor).catch(console.error);
}
if(args[0].toLowerCase() === 'lightsalmoncolor') {
  if(!memberRoleAdd.roles.has(roleLightSalmonColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLightSalmonColor).catch(console.error);
}
if(args[0].toLowerCase() === 'orangeredcolor') {
  if(!memberRoleAdd.roles.has(roleOrangeRedColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOrangeRedColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkorangecolor') {
  if(!memberRoleAdd.roles.has(roleDarkOrangeColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkOrangeColor).catch(console.error);
}
if(args[0].toLowerCase() === 'goldcolor') {
  if(!memberRoleAdd.roles.has(roleGoldColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGoldColor).catch(console.error);
}
if(args[0].toLowerCase() === 'yellowcolor') {
  if(!memberRoleAdd.roles.has(roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0].toLowerCase() === 'moccasincolor') {
  if(!memberRoleAdd.roles.has(roleMoccasinColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMoccasinColor).catch(console.error);
}
if(args[0].toLowerCase() === 'khakicolor') {
  if(!memberRoleAdd.roles.has(roleKhakiColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKhakiColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkkhakicolor') {
  if(!memberRoleAdd.roles.has(roleDarkKhakiColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkKhakiColor).catch(console.error);
}
if(args[0].toLowerCase() === 'violetcolor') {
  if(!memberRoleAdd.roles.has(roleVioletColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleVioletColor).catch(console.error);
}
if(args[0].toLowerCase() === 'magentacolor') {
  if(!memberRoleAdd.roles.has(roleMagentaColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMagentaColor).catch(console.error);
}
if(args[0].toLowerCase() === 'mediumorchidcolor') {
  if(!memberRoleAdd.roles.has(roleMediumOrchidColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMediumOrchidColor).catch(console.error);
}
if(args[0].toLowerCase() === 'bluevioletcolor') {
  if(!memberRoleAdd.roles.has(roleBlueVioletColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBlueVioletColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkmagentacolor') {
  if(!memberRoleAdd.roles.has(roleDarkMagentaColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkMagentaColor).catch(console.error);
}
if(args[0].toLowerCase() === 'indigocolor') {
  if(!memberRoleAdd.roles.has(roleIndigoColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleIndigoColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkslatebluecolor') {
  if(!memberRoleAdd.roles.has(roleDarkSlateBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkSlateBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'mediumslatebluecolor') {
  if(!memberRoleAdd.roles.has(roleMediumSlateBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMediumSlateBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'greenyellowcolor') {
  if(!memberRoleAdd.roles.has(roleGreenYellowColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGreenYellowColor).catch(console.error);
}
if(args[0].toLowerCase() === 'limecolor') {
  if(!memberRoleAdd.roles.has(roleLimeColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLimeColor).catch(console.error);
}
if(args[0].toLowerCase() === 'limegreencolor') {
  if(!memberRoleAdd.roles.has(roleLimeGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLimeGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'palegreencolor') {
  if(!memberRoleAdd.roles.has(rolePaleGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(rolePaleGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'springgreencolor') {
  if(!memberRoleAdd.roles.has(roleSpringGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSpringGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'seagreencolor') {
  if(!memberRoleAdd.roles.has(roleSeaGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSeaGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'greencolor') {
  if(!memberRoleAdd.roles.has(roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkgreencolor') {
  if(!memberRoleAdd.roles.has(roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0].toLowerCase() === 'olivecolor') {
  if(!memberRoleAdd.roles.has(roleOliveColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOliveColor).catch(console.error);
}
if(args[0].toLowerCase() === 'aquamarinecolor') {
  if(!memberRoleAdd.roles.has(roleAquamarineColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleAquamarineColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkcyancolor') {
  if(!memberRoleAdd.roles.has(roleDarkCyanColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkCyanColor).catch(console.error);
}
if(args[0].toLowerCase() === 'cyancolor') {
  if(!memberRoleAdd.roles.has(roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0].toLowerCase() === 'turquoisecolor') {
  if(!memberRoleAdd.roles.has(roleTurquoiseColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTurquoiseColor).catch(console.error);
}
if(args[0].toLowerCase() === 'lightcyancolor') {
  if(!memberRoleAdd.roles.has(roleLightCyanColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLightCyanColor).catch(console.error);
}
if(args[0].toLowerCase() === 'cadetbluecolor') {
  if(!memberRoleAdd.roles.has(roleCadetBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCadetBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'steelbluecolor') {
  if(!memberRoleAdd.roles.has(roleSteelBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSteelBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'powderbluecolor') {
  if(!memberRoleAdd.roles.has(rolePowderBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(rolePowderBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'skybluecolor') {
  if(!memberRoleAdd.roles.has(roleSkyBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSkyBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'deepskybluecolor') {
  if(!memberRoleAdd.roles.has(roleDeepSkyBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDeepSkyBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'dodgerbluecolor') {
  if(!memberRoleAdd.roles.has(roleDodgerBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDodgerBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'slatebluecolor') {
  if(!memberRoleAdd.roles.has(roleSlateBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSlateBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'bluecolor') {
  if(!memberRoleAdd.roles.has(roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkbluecolor') {
  if(!memberRoleAdd.roles.has(roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0].toLowerCase() === 'wheatcolor') {
  if(!memberRoleAdd.roles.has(roleWheatColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleWheatColor).catch(console.error);
}
if(args[0].toLowerCase() === 'burlywoodcolor') {
  if(!memberRoleAdd.roles.has(roleBurlyWoodColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBurlyWoodColor).catch(console.error);
}
if(args[0].toLowerCase() === 'rosybrowncolor') {
  if(!memberRoleAdd.roles.has(roleRosyBrownColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleRosyBrownColor).catch(console.error);
}
if(args[0].toLowerCase() === 'sandybrowncolor') {
  if(!memberRoleAdd.roles.has(roleSandyBrownColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSandyBrownColor).catch(console.error);
}
if(args[0].toLowerCase() === 'goldenrodcolor') {
  if(!memberRoleAdd.roles.has(roleGoldenRodColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGoldenRodColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkgoldenrodcolor') {
  if(!memberRoleAdd.roles.has(roleDarkGoldenRodColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkGoldenRodColor).catch(console.error);
}
if(args[0].toLowerCase() === 'chocolatecolor') {
  if(!memberRoleAdd.roles.has(roleChocolateColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleChocolateColor).catch(console.error);
}
if(args[0].toLowerCase() === 'saddlebrowncolor') {
  if(!memberRoleAdd.roles.has(roleSaddleBrownColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSaddleBrownColor).catch(console.error);
}
if(args[0].toLowerCase() === 'browncolor') {
  if(!memberRoleAdd.roles.has(roleBrownColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBrownColor).catch(console.error);
}
if(args[0].toLowerCase() === 'marooncolor') {
  if(!memberRoleAdd.roles.has(roleMaroonColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMaroonColor).catch(console.error);
}
if(args[0].toLowerCase() === 'whitecolor') {
  if(!memberRoleAdd.roles.has(roleWhiteColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleWhiteColor).catch(console.error);
}
if(args[0].toLowerCase() === 'beigecolor') {
  if(!memberRoleAdd.roles.has(roleBeigeColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBeigeColor).catch(console.error);
}
if(args[0].toLowerCase() === 'lavenderblushcolor') {
  if(!memberRoleAdd.roles.has(roleLavenderBlushColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLavenderBlushColor).catch(console.error);
}
if(args[0].toLowerCase() === 'mistyrosecolor') {
  if(!memberRoleAdd.roles.has(roleMistyRoseColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMistyRoseColor).catch(console.error);
}
if(args[0].toLowerCase() === 'silvercolor') {
  if(!memberRoleAdd.roles.has(roleSilverColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSilverColor).catch(console.error);
}
if(args[0].toLowerCase() === 'graycolor') {
  if(!memberRoleAdd.roles.has(roleGrayColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGrayColor).catch(console.error);
}
if(args[0].toLowerCase() === 'slategraygolor') {
  if(!memberRoleAdd.roles.has(roleSlateGrayColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSlateGrayColor).catch(console.error);
}
if(args[0].toLowerCase() === 'darkslategraycolor') {
  if(!memberRoleAdd.roles.has(roleDarkSlateGrayColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarkSlateGrayColor).catch(console.error);
}
if(args[0].toLowerCase() === 'black color') {
  if(!memberRoleAdd.roles.has(roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  if(!memberRoleAdd.roles.has(roleBasicColor.id)) memberRoleAdd.addRole(roleBasicColor);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}

if(args[0].toLowerCase() === 'black') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleYakusokunoNeverland.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYakusokunoNeverland).catch(console.error);
}
if(args[1].toLowerCase() === 'clover') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleYakusokunoNeverland.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYakusokunoNeverland).catch(console.error);
}}}
if(args[0].toLowerCase() === 'yakusoku') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleYakusokunoNeverland.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYakusokunoNeverland).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleYakusokunoNeverland.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYakusokunoNeverland).catch(console.error);
}}
if(args[2].toLowerCase() === 'neverland') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleYakusokunoNeverland.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYakusokunoNeverland).catch(console.error);
}}}
if(args[0].toLowerCase() === 'nanatsu') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleNanatsuNoTaizai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNanatsuNoTaizai).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleNanatsuNoTaizai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNanatsuNoTaizai).catch(console.error);
}}
if(args[2].toLowerCase() === 'taizai') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleNanatsuNoTaizai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNanatsuNoTaizai).catch(console.error);
}}}
if(args[0].toLowerCase() === 're:zero') {
  if(!memberRoleAdd.roles.has(roleReZero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleReZero).catch(console.error);
}
if(args[0].toLowerCase() === 'fairy') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleFairyTail.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFairyTail).catch(console.error);
}
if(args[1].toLowerCase() === 'tail') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleFairyTail.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFairyTail).catch(console.error);
}}}
if(args[0].toLowerCase() === 'boku') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleBokuNoHeroAcademia.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBokuNoHeroAcademia).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleBokuNoHeroAcademia.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBokuNoHeroAcademia).catch(console.error);
}}
if(args[2].toLowerCase() === 'hero') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleBokuNoHeroAcademia.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBokuNoHeroAcademia).catch(console.error);
}}
if(args[3].toLowerCase() === 'academia') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleBokuNoHeroAcademia.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBokuNoHeroAcademia).catch(console.error);
}}}
if(args[0].toLowerCase() === 'gintama') {
  if(!memberRoleAdd.roles.has(roleGintama.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGintama).catch(console.error);
}
if(args[0].toLowerCase() === "jojo's") {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleJoJosBizarreAdventure.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleJoJosBizarreAdventure).catch(console.error);
}
if(args[1].toLowerCase() === 'bizarre') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleJoJosBizarreAdventure.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleJoJosBizarreAdventure).catch(console.error);
}}
if(args[2].toLowerCase() === 'adventure') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleJoJosBizarreAdventure.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleJoJosBizarreAdventure).catch(console.error);
}}}
if(args[0].toLowerCase() === 'pokemon') {
  if(!memberRoleAdd.roles.has(rolePokémon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(rolePokémon).catch(console.error);
}
if(args[0].toLowerCase() === 'kobayashi-san') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleKobayashisanChinoMaidDragon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKobayashisanChinoMaidDragon).catch(console.error);
}
if(args[1].toLowerCase() === 'chi') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleKobayashisanChinoMaidDragon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKobayashisanChinoMaidDragon).catch(console.error);
}}
if(args[2].toLowerCase() === 'no') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleKobayashisanChinoMaidDragon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKobayashisanChinoMaidDragon).catch(console.error);
}}
if(args[3].toLowerCase() === 'maid') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleKobayashisanChinoMaidDragon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKobayashisanChinoMaidDragon).catch(console.error);
}}
if(args[4].toLowerCase() === 'dragon') {
  if(!args[5]){
  if(!memberRoleAdd.roles.has(roleKobayashisanChinoMaidDragon.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKobayashisanChinoMaidDragon).catch(console.error);
}}}
if(args[0].toLowerCase() === 'one') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleOnePiece.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOnePiece).catch(console.error);
}
if(args[1].toLowerCase() === 'piece') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleOnePiece.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOnePiece).catch(console.error);
}}}
if(args[0].toLowerCase() === 'the') {
  if(!args[1]) return;
  if(args[1].toLowerCase() === 'rising') {
  if(!memberRoleAdd.roles.has(roleTheRisingoftheShieldHero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheRisingoftheShieldHero).catch(console.error);
}
if(args[2].toLowerCase() === 'of') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleTheRisingoftheShieldHero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheRisingoftheShieldHero).catch(console.error);
}}
if(args[3].toLowerCase() === 'the') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleTheRisingoftheShieldHero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheRisingoftheShieldHero).catch(console.error);
}}
if(args[4].toLowerCase() === 'shield') {
  if(!args[5]){
  if(!memberRoleAdd.roles.has(roleTheRisingoftheShieldHero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheRisingoftheShieldHero).catch(console.error);
}}
if(args[5].toLowerCase() === 'hero') {
  if(!args[6]){
  if(!memberRoleAdd.roles.has(roleTheRisingoftheShieldHero.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheRisingoftheShieldHero).catch(console.error);
}}}
if(args[0].toLowerCase() === 'naruto') {
  if(!memberRoleAdd.roles.has(roleNaruto.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNaruto).catch(console.error);
}
if(args[0].toLowerCase() === 'darling in the franxx') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleDarlingintheFranXX.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarlingintheFranXX).catch(console.error);
}
if(args[1].toLowerCase() === 'in') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleDarlingintheFranXX.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarlingintheFranXX).catch(console.error);
}}
if(args[2].toLowerCase() === 'the') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleDarlingintheFranXX.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarlingintheFranXX).catch(console.error);
}}
if(args[3].toLowerCase() === 'franxx') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleDarlingintheFranXX.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDarlingintheFranXX).catch(console.error);
}}}
if(args[0].toLowerCase() === 'inuyasha') {
  if(!memberRoleAdd.roles.has(roleInuyasha.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleInuyasha).catch(console.error);
}
if(args[0].toLowerCase() === 'shingeki') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleShingekinoKyojin.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleShingekinoKyojin).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleShingekinoKyojin.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleShingekinoKyojin).catch(console.error);
}}
if(args[2].toLowerCase() === 'kyojin') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleShingekinoKyojin.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleShingekinoKyojin).catch(console.error);
}}}
if(args[0].toLowerCase() === 'lucky star') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleLuckyStar.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLuckyStar).catch(console.error);
}
if(args[1].toLowerCase() === 'star') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleLuckyStar.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleLuckyStar).catch(console.error);
}}}
if(args[0].toLowerCase() === 'full') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleFullMetalAlchemist.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFullMetalAlchemist).catch(console.error);
}
if(args[1].toLowerCase() === 'metal') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleFullMetalAlchemist.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFullMetalAlchemist).catch(console.error);
}}
if(args[2].toLowerCase() === 'alchemist') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleFullMetalAlchemist.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFullMetalAlchemist).catch(console.error);
}}}
if(args[0].toLowerCase() === 'overlord') {
  if(!memberRoleAdd.roles.has(roleOverlord.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOverlord).catch(console.error);
}
if(args[0].toLowerCase() === 'made') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleMadeInAbyss.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMadeInAbyss).catch(console.error);
}
if(args[1].toLowerCase() === 'in') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleMadeInAbyss.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMadeInAbyss).catch(console.error);
}}
if(args[2].toLowerCase() === 'abyss') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleMadeInAbyss.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMadeInAbyss).catch(console.error);
}}}
if(args[0].toLowerCase() === 'dragon') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleDragonBallZ.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDragonBallZ).catch(console.error);
}
if(args[1].toLowerCase() === 'ball') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleDragonBallZ.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDragonBallZ).catch(console.error);
}}
if(args[2].toLowerCase() === 'z') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleDragonBallZ.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDragonBallZ).catch(console.error);
}}}
if(args[0].toLowerCase() === 'mob') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleMobPsycho100.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMobPsycho100).catch(console.error);
}
if(args[1].toLowerCase() === 'psycho') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleMobPsycho100.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMobPsycho100).catch(console.error);
}}
if(args[2].toLowerCase() === '100') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleMobPsycho100.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMobPsycho100).catch(console.error);
}}}
if(args[0].toLowerCase() === 'one') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleOnePunchMan.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOnePunchMan).catch(console.error);
}
if(args[1].toLowerCase() === 'punch') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleOnePunchMan.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOnePunchMan).catch(console.error);
}}
if(args[2].toLowerCase() === 'man') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleOnePunchMan.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOnePunchMan).catch(console.error);
}}}
if(args[0].toLowerCase() === 'azumanga') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleAzumangaDaioh.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleAzumangaDaioh).catch(console.error);
}
if(args[1].toLowerCase() === 'daioh') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleAzumangaDaioh.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleAzumangaDaioh).catch(console.error);
}}}
if(args[0].toLowerCase() === 'noragami') {
  if(!memberRoleAdd.roles.has(roleNoragami.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNoragami).catch(console.error);
}
if(args[0].toLowerCase() === 'tokyo') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleTokyoGhoul.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTokyoGhoul).catch(console.error);
}
if(args[1].toLowerCase() === 'ghoul') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleTokyoGhoul.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTokyoGhoul).catch(console.error);
}}}
if(args[0].toLowerCase() === 'high') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleHighSchoolDxD.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHighSchoolDxD).catch(console.error);
}
if(!args[1].toLowerCase() === 'school') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleHighSchoolDxD.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHighSchoolDxD).catch(console.error);
}}
if(args[2].toLowerCase() === 'dxd') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleHighSchoolDxD.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHighSchoolDxD).catch(console.error);
}}}
if(args[0].toLowerCase() === 'yuri!!!') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleYurionIce.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYurionIce).catch(console.error);
}
if(args[1].toLowerCase() === 'on') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleYurionIce.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYurionIce).catch(console.error);
}}
if(args[2].toLowerCase() === 'ice') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleYurionIce.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYurionIce).catch(console.error);
}}}
if(args[0].toLowerCase() === 'haikyuu') {
  if(!memberRoleAdd.roles.has(roleHaikyuu.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHaikyuu).catch(console.error);
}
if(args[0].toLowerCase() === 'kuroko') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleKurokonoBasket.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKurokonoBasket).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleKurokonoBasket.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKurokonoBasket).catch(console.error);
}}
if(args[2].toLowerCase() === 'basket') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleKurokonoBasket.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKurokonoBasket).catch(console.error);
}}}
if(args[0].toLowerCase() === 'keijo') {
  if(!memberRoleAdd.roles.has(roleKeijo.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKeijo).catch(console.error);
}
if(args[0].toLowerCase() === 'initial') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleInitialD.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleInitialD).catch(console.error);
}
if(args[1].toLowerCase() === 'd') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleInitialD.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleInitialD).catch(console.error);
}}}
if(args[0].toLowerCase() === 'ookami') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleOokamitoKoushinryou.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOokamitoKoushinryou).catch(console.error);
}
if(args[1].toLowerCase() === 'to') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleOokamitoKoushinryou.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOokamitoKoushinryou).catch(console.error);
}}
if(args[2].toLowerCase() === 'koushinryou') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleOokamitoKoushinryou.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleOokamitoKoushinryou).catch(console.error);
}}}
if(args[0].toLowerCase() === 'drifters') {
  if(!memberRoleAdd.roles.has(roleDrifters.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleDrifters).catch(console.error);
}
if(args[0].toLowerCase() === 'k-on') {
  if(!memberRoleAdd.roles.has(roleKOn.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKOn).catch(console.error);
}
if(args[0].toLowerCase() === 'mirai') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleMiraiNikki.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMiraiNikki).catch(console.error);
}
if(args[1].toLowerCase() === 'nikki') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleMiraiNikki.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleMiraiNikki).catch(console.error);
}}}
if(args[0].toLowerCase() === 'hunter') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleHunterxHunter.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHunterxHunter).catch(console.error);
}
if(args[1].toLowerCase() === 'x') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleHunterxHunter.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHunterxHunter).catch(console.error);
}}
if(args[2].toLowerCase() === 'hunter') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleHunterxHunter.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleHunterxHunter).catch(console.error);
}}}
if(args[0].toLowerCase() === 'food') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleFoodWars.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFoodWars).catch(console.error);
}
if(args[1].toLowerCase() === 'wars') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleFoodWars.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleFoodWars).catch(console.error);
}}}
if(args[0].toLowerCase() === 'yu-gi-oh') {
  if(!memberRoleAdd.roles.has(roleYuGiOh.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYuGiOh).catch(console.error);
}
if(args[0].toLowerCase() === 'idolm@ster') {
  if(!memberRoleAdd.roles.has(roleIdolmaster.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleIdolmaster).catch(console.error);
}
if(args[0].toLowerCase() === 'kantai') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleKantaiCollection.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKantaiCollection).catch(console.error);
}
if(args[1].toLowerCase() === 'collection') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleKantaiCollection.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKantaiCollection).catch(console.error);
}}}
if(args[0].toLowerCase() === 'neptunia') {
  if(!memberRoleAdd.roles.has(roleNeptunia.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNeptunia).catch(console.error);
}
if(args[0].toLowerCase() === 'bang') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleBanGDream.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBanGDream).catch(console.error);
}
if(args[1].toLowerCase() === 'dream') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleBanGDream.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBanGDream).catch(console.error);
}}}
if(args[0].toLowerCase() === 'steins;gate') {
  if(!memberRoleAdd.roles.has(roleSteinsGate.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSteinsGate).catch(console.error);
}
if(args[0].toLowerCase() === 'code') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleCodeGeass.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCodeGeass).catch(console.error);
}
if(args[1].toLowerCase() === 'geass') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleCodeGeass.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCodeGeass).catch(console.error);
}}}
if(args[0].toLowerCase() === 'tengen') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleTengenToppaGurrenLagann.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTengenToppaGurrenLagann).catch(console.error);
}
if(args[1].toLowerCase() === 'toppa') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleTengenToppaGurrenLagann.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTengenToppaGurrenLagann).catch(console.error);
}}
if(args[2].toLowerCase() === 'gurren') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleTengenToppaGurrenLagann.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTengenToppaGurrenLagann).catch(console.error);
}}
if(args[3].toLowerCase() === 'lagann') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleTengenToppaGurrenLagann.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTengenToppaGurrenLagann).catch(console.error);
}}}
if(args[0].toLowerCase() === 'cowboy') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleCowboyBebop.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCowboyBebop).catch(console.error);
}
if(args[1].toLowerCase() === 'bebop') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleCowboyBebop.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleCowboyBebop).catch(console.error);
}}}
if(args[0].toLowerCase() === 'neon') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleNeonGenesisEvangelion.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNeonGenesisEvangelion).catch(console.error);
}
if(args[1].toLowerCase() === 'genesis') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleNeonGenesisEvangelion.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNeonGenesisEvangelion).catch(console.error);
}}
if(args[2].toLowerCase() === 'evangelion') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleNeonGenesisEvangelion.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleNeonGenesisEvangelion).catch(console.error);
}}}
if(args[0].toLowerCase() === 'guilty') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleGuiltyCrown.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGuiltyCrown).catch(console.error);
}
if(args[1].toLowerCase() === 'crown') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleGuiltyCrown.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleGuiltyCrown).catch(console.error);
}}}
if(args[0].toLowerCase() === 'suzumiya') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleSuzumiyaHaruhinoYuuutsu.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSuzumiyaHaruhinoYuuutsu).catch(console.error);
}
if(args[1].toLowerCase() === 'haruhi') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleSuzumiyaHaruhinoYuuutsu.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSuzumiyaHaruhinoYuuutsu).catch(console.error);
}}
if(args[2].toLowerCase() === 'no') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleSuzumiyaHaruhinoYuuutsu.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSuzumiyaHaruhinoYuuutsu).catch(console.error);
}}
if(args[3].toLowerCase() === 'yuuutsu') {
  if(!args[4]){
  if(memberRoleAdd.roles.has(roleSuzumiyaHaruhinoYuuutsu.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSuzumiyaHaruhinoYuuutsu).catch(console.error);
}}}
if(args[0].toLowerCase() === 'toradora') {
  if(!memberRoleAdd.roles.has(roleToradora.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleToradora).catch(console.error);
}
if(args[0].toLowerCase() === 'kimi') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleKiminoNawa.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKiminoNawa).catch(console.error);
}
if(args[1].toLowerCase() === 'no') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleKiminoNawa.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKiminoNawa).catch(console.error);
}}
if(args[2].toLowerCase() === 'na') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleKiminoNawa.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKiminoNawa).catch(console.error);
}}
if(args[3].toLowerCase() === 'wa') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleKiminoNawa.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleKiminoNawa).catch(console.error);
}}}
if(args[0].toLowerCase() === 'sword') {
  if(!args[1]){
  if(!memberRoleAdd.roles.has(roleSwordArtOnline.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSwordArtOnline).catch(console.error);
}
if(args[1].toLowerCase() === 'art') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleSwordArtOnline.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSwordArtOnline).catch(console.error);
}}
if(args[2].toLowerCase() === 'online') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleSwordArtOnline.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleSwordArtOnline).catch(console.error);
}}}
if(args[0].toLowerCase() === 'your') {
  if(!args[1]){
  if(memberRoleAdd.roles.has(roleYourLieinApril.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYourLieinApril).catch(console.error);
}
if(args[1].toLowerCase() === 'lie') {
  if(!args[2]){
  if(!memberRoleAdd.roles.has(roleYourLieinApril.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYourLieinApril).catch(console.error);
}}
if(args[2].toLowerCase() === 'in') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleYourLieinApril.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYourLieinApril).catch(console.error);
}}
if(args[3].toLowerCase() === 'april') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleYourLieinApril.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleYourLieinApril).catch(console.error);
}}}
if(args[0].toLowerCase() === 'bakemonogatari') {
  if(!memberRoleAdd.roles.has(roleBakemonogatari.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleBakemonogatari).catch(console.error);
}
if(args[0].toLowerCase() === 'the') {
  if(!args[1]) return;
  if(args[1].toLowerCase() === 'devil') {
  if(!memberRoleAdd.roles.has(roleTheDevilisaPartTimer.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheDevilisaPartTimer).catch(console.error);
}
if(args[2].toLowerCase() === 'is') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleTheDevilisaPartTimer.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheDevilisaPartTimer).catch(console.error);
}}
if(args[3].toLowerCase() === 'a') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleTheDevilisaPartTimer.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheDevilisaPartTimer).catch(console.error);
}}
if(args[4].toLowerCase() === 'part-timer') {
  if(!args[5]){
  if(!memberRoleAdd.roles.has(roleTheDevilisaPartTimer.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleTheDevilisaPartTimer).catch(console.error);
}}}
if(args[0].toLowerCase() === 'chuunibyou') {
   if(!args[1]){
   if(!memberRoleAdd.roles.has(roleChuunibyoudemoKoigaShitai.id)) return message.channel.send(alreadyEmbed);
   message.channel.send(addEmbed);
   memberRoleAdd.removeRole(roleChuunibyoudemoKoigaShitai).catch(console.error);
}
  if(args[1].toLowerCase() === 'demo') {
   if(!args[2]){
   if(!memberRoleAdd.roles.has(roleChuunibyoudemoKoigaShitai.id)) return message.channel.send(alreadyEmbed);
   message.channel.send(addEmbed);
   memberRoleAdd.removeRole(roleChuunibyoudemoKoigaShitai).catch(console.error);
}}
if(args[2].toLowerCase() === 'koi') {
  if(!args[3]){
  if(!memberRoleAdd.roles.has(roleChuunibyoudemoKoigaShitai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleChuunibyoudemoKoigaShitai).catch(console.error);
}}
if(args[3].toLowerCase() === 'ga') {
  if(!args[4]){
  if(!memberRoleAdd.roles.has(roleChuunibyoudemoKoigaShitai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleChuunibyoudemoKoigaShitai).catch(console.error);
}}
if(args[4].toLowerCase() === 'shitai') {
  if(!args[5]){
  if(!memberRoleAdd.roles.has(roleChuunibyoudemoKoigaShitai.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(addEmbed);
  memberRoleAdd.removeRole(roleChuunibyoudemoKoigaShitai).catch(console.error);
}}
}
if(args[0].toLowerCase() === 'bobobo-bo') {
   if(!args[1]){
    if(!memberRoleAdd.roles.has(roleBoboboboBobobo.id)) return message.channel.send(alreadyEmbed);
    message.channel.send(addEmbed);
    memberRoleAdd.removeRole(roleBoboboboBobobo).catch(console.error);
}
  if(args[1].toLowerCase() === 'bo-bobo') {
   if(!args[2]){
    if(!memberRoleAdd.roles.has(roleBoboboboBobobo.id)) return message.channel.send(alreadyEmbed);
    message.channel.send(addEmbed);
    memberRoleAdd.removeRole(roleBoboboboBobobo).catch(console.error);
  }}}
}
module.exports.help = {
  name: "remove"
}
