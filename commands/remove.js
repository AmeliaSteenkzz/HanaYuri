const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let noRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ You didn't specify a role")
.setColor("#af0e97")
.setFooter("Use h!roles to see all available roles");

if(!args[0]) return message.channel.send(noRoleEmbed);
let question = args.slice(1).join(" ");

let removeEmbed = new Discord.RichEmbed()
.setTitle(`✔️ Role removed from ${message.author.tag}`)
.setColor("#af0e97");

let alreadyEmbed = new Discord.RichEmbed()
.setTitle("❌ You don't have that role added")
.setColor("#af0e97");

let wrongRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ That role doesn't exist")
.setColor("#af0e97")
.setFooter("Use h!roles to see all available roles");

let roleCyanColor = message.guild.roles.find(r => r.name === "CyanColor");
let roleDarkGreenColor = message.guild.roles.find(r => r.name === "DarkGreenColor");
let roleGreenColor = message.guild.roles.find(r => r.name === "GreenColor");
let roleLightGreenColor = message.guild.roles.find(r => r.name === "LightGreenColor");
let roleDarkBlueColor = message.guild.roles.find(r => r.name === "DarkBlueColor");
let roleBlueColor = message.guild.roles.find(r => r.name === "BlueColor");
let roleLightBlueColor = message.guild.roles.find(r => r.name === "LightBlueColor");
let roleBloodRedColor = message.guild.roles.find(r => r.name === "BloodRedColor");
let rolePinkColor = message.guild.roles.find(r => r.name === "PinkColor");
let rolePurpleColor = message.guild.roles.find(r => r.name === "PurpleColor");
let roleSweetPurpleColor = message.guild.roles.find(r => r.name === "SweetPurpleColor");
let roleDarkRedColor = message.guild.roles.find(r => r.name === "DarkRedColor");
let roleRedColor = message.guild.roles.find(r => r.name === "RedColor");
let roleBurntOrangeColor = message.guild.roles.find(r => r.name === "BurntOrangeColor");
let roleOrangeColor = message.guild.roles.find(r => r.name === "OrangeColor");
let roleYellowColor = message.guild.roles.find(r => r.name === "YellowColor");
let roleBlackColor = message.guild.roles.find(r => r.name === "BlackColor");
let roleGreyColor = message.guild.roles.find(r => r.name === "GreyColor");
let roleMale = message.guild.roles.find(r => r.name === "Male");
let roleFemale = message.guild.roles.find(r => r.name === "Female");
let roleStraight = message.guild.roles.find(r => r.name === "Straight");
let roleHomosexual = message.guild.roles.find(r => r.name === "Homosexual");
let roleBisexual = message.guild.roles.find(r => r.name === "Bisexual");
let roleAsexual = message.guild.roles.find(r => r.name === "Asexual");
let roleSingle = message.guild.roles.find(r => r.name === "Single");
let roleTaken = message.guild.roles.find(r => r.name === "Taken");
let roleDom = message.guild.roles.find(r => r.name === "Dom");
let roleSub = message.guild.roles.find(r => r.name === "Sub");
let roleSwitch = message.guild.roles.find(r => r.name === "Switch");
let roleTransgender = message.guild.roles.find(r => r.name === "Transgender");
let roleApacheHelicopter = message.guild.roles.find(r => r.name === "Apache Helicopter");
let roleVanilla = message.guild.roles.find(r => r.name === "Vanilla");
let roleFetish = message.guild.roles.find(r => r.name === "Fetish");
let roleAhegao = message.guild.roles.find(r => r.name === "Ahegao");
let roleFuta = message.guild.roles.find(r => r.name === "Futa");
let roleTentacles = message.guild.roles.find(r => r.name === "Tentacles");
let roleNeko = message.guild.roles.find(r => r.name === "Neko");
let roleLoli = message.guild.roles.find(r => r.name === "Loli");
let roleThicc = message.guild.roles.find(r => r.name === "Thicc");
let roleBDSM = message.guild.roles.find(r => r.name === "BDSM");
let roleFurry = message.guild.roles.find(r => r.name === "Furry");
let roleYuri = message.guild.roles.find(r => r.name === "Yuri");
let roleYaoi = message.guild.roles.find(r => r.name === "Yaoi");
let roleLevelBlock = message.guild.roles.find(r => r.name === "Level Block");
let memberRoleAdd = message.member;

if(args[0] === 'cyancolor') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'cyan') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'CyanColor') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'Cyan') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'DarkGreenColor') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'DarkGreen') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'darkgreencolor') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'darkgreen') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'GreenColor') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'Green') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'greencolor') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'green') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'LightGreenColor') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'LightGreen') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'lightgreencolor') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'lightgreen') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'DarkBlueColor') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'DarkBlue') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'darkbluecolor') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'darkblue') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'BlueColor') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'Blue') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'bluecolor') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'blue') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'LightBlueColor') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'LightBlue') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'lightbluecolor') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'lightblue') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'BloodRedColor') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'BloodRed') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'bloodredcolor') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'bloodred') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'PinkColor') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'Pink') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'pinkcolor') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'pink') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'PurpleColor') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'Purple') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'purplecolor') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'purple') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'SweetPurpleColor') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'SweetPurple') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'sweetpurplecolor') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'sweetpurple') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'DarkRedColor') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'DarkRed') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'darkredcolor') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'darkred') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'RedColor') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'Red') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'redcolor') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'red') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'BurntOrangeColor') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'BurntOrange') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'burntorangecolor') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'burntorange') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'OrangeColor') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'Orange') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'orangecolor') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'orange') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'YellowColor') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'Yellow') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'yellowcolor') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'yellow') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'BlackColor') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'Black') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'blackcolor') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'black') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'GreyColor') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'Grey') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'greycolor') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'grey') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'Male') {
  if(memberRoleAdd.roles.has(!roleMale.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleMale).catch(console.error);
}
if(args[0] === 'male') {
  if(memberRoleAdd.roles.has(!roleMale.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleMale).catch(console.error);
}
if(args[0] === 'Female') {
  if(memberRoleAdd.roles.has(!roleFemale.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFemale).catch(console.error);
}
if(args[0] === 'female') {
  if(memberRoleAdd.roles.has(!roleFemale.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFemale).catch(console.error);
}
if(args[0] === 'Straight') {
  if(memberRoleAdd.roles.has(!roleStraight.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleStraight).catch(console.error);
}
if(args[0] === 'straight') {
  if(memberRoleAdd.roles.has(!roleStraight.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleStraight).catch(console.error);
}
if(args[0] === 'Homosexual') {
  if(memberRoleAdd.roles.has(!roleHomosexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleHomosexual).catch(console.error);
}
if(args[0] === 'homosexual') {
  if(memberRoleAdd.roles.has(!roleHomosexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleHomosexual).catch(console.error);
}
if(args[0] === 'Bisexual') {
  if(memberRoleAdd.roles.has(!roleBisexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBisexual).catch(console.error);
}
if(args[0] === 'bisexual') {
  if(memberRoleAdd.roles.has(!roleBisexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBisexual).catch(console.error);
}
if(args[0] === 'Asexual') {
  if(memberRoleAdd.roles.has(!roleAsexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleAsexual).catch(console.error);
}
if(args[0] === 'asexual') {
  if(memberRoleAdd.roles.has(!roleAsexual.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleAsexual).catch(console.error);
}
if(args[0] === 'Single') {
  if(memberRoleAdd.roles.has(!roleSingle.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSingle).catch(console.error);
}
if(args[0] === 'single') {
  if(memberRoleAdd.roles.has(!roleSingle.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSingle).catch(console.error);
}
if(args[0] === 'Taken') {
  if(memberRoleAdd.roles.has(!roleTaken.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleTaken).catch(console.error);
}
if(args[0] === 'taken') {
  if(memberRoleAdd.roles.has(!roleTaken.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleTaken).catch(console.error);
}
if(args[0] === 'Dom') {
  if(memberRoleAdd.roles.has(!roleDom.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDom).catch(console.error);
}
if(args[0] === 'dom') {
  if(memberRoleAdd.roles.has(!roleDom.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDom).catch(console.error);
}
if(args[0] === 'Sub') {
  if(memberRoleAdd.roles.has(!roleSub.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSub).catch(console.error);
}
if(args[0] === 'sub') {
  if(memberRoleAdd.roles.has(!roleSub.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSub).catch(console.error);
}
if(args[0] === 'Switch') {
  if(memberRoleAdd.roles.has(!roleSwitch.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSwitch).catch(console.error);
}
if(args[0] === 'switch') {
  if(memberRoleAdd.roles.has(!roleSwitch.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSwitch).catch(console.error);
}
if(args[0] === 'Transgender') {
  if(memberRoleAdd.roles.has(!roleTransgender.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleTransgender).catch(console.error);
}
if(args[0] === 'transgender') {
  if(memberRoleAdd.roles.has(!roleTransgender.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRolee(roleTransgender).catch(console.error);
}
if(args[0] === 'Apache Helicopter') {
  if(memberRoleAdd.roles.has(!roleApacheHelicopter.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleApacheHelicopter).catch(console.error);
}
if(args[0] === 'apache helicopter') {
  if(memberRoleAdd.roles.has(!roleApacheHelicopter.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleApacheHelicopter).catch(console.error);
}
if(args[0] === 'Vanilla') {
  if(memberRoleAdd.roles.has(!roleVanilla.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleVanilla).catch(console.error);
}
if(args[0] === 'vanilla') {
  if(memberRoleAdd.roles.has(!roleVanilla.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleVanilla).catch(console.error);
}
if(args[0] === 'Fetish') {
  if(memberRoleAdd.roles.has(!roleFetish.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFetish).catch(console.error);
}
if(args[0] === 'fetish') {
  if(memberRoleAdd.roles.has(!roleFetish.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFetish).catch(console.error);
}
if(args[0] === 'Ahegao') {
  if(memberRoleAdd.roles.has(!roleAhegao.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleAhegao).catch(console.error);
}
if(args[0] === 'ahegao') {
  if(memberRoleAdd.roles.has(!roleAhegao.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleAhegao).catch(console.error);
}
if(args[0] === 'Futa') {
  if(memberRoleAdd.roles.has(!roleFuta.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFuta).catch(console.error);
}
if(args[0] === 'futa') {
  if(memberRoleAdd.roles.has(!roleFuta.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFuta).catch(console.error);
}
if(args[0] === 'Tentacles') {
  if(memberRoleAdd.roles.has(!roleTentacles.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleTentacles).catch(console.error);
}
if(args[0] === 'tentacles') {
  if(memberRoleAdd.roles.has(!roleTentacles.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleTentacles).catch(console.error);
}
if(args[0] === 'Neko') {
  if(memberRoleAdd.roles.has(!roleNeko.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleNeko).catch(console.error);
}
if(args[0] === 'neko') {
  if(memberRoleAdd.roles.has(!roleNeko.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleNeko).catch(console.error);
}
if(args[0] === 'Loli') {
  if(memberRoleAdd.roles.has(!roleLoli.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLoli).catch(console.error);
}
if(args[0] === 'loli') {
  if(memberRoleAdd.roles.has(!roleLoli.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLoli).catch(console.error);
}
if(args[0] === 'Thicc') {
  if(memberRoleAdd.roles.has(!roleThicc.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleThicc).catch(console.error);
}
if(args[0] === 'thicc') {
  if(memberRoleAdd.roles.has(!roleThicc.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleThicc).catch(console.error);
}
if(args[0] === 'BDSM') {
  if(memberRoleAdd.roles.has(!roleBDSM.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBDSM).catch(console.error);
}
if(args[0] === 'bdsm') {
  if(memberRoleAdd.roles.has(!roleBDSM.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBDSM).catch(console.error);
}
if(args[0] === 'Furry') {
  if(memberRoleAdd.roles.has(!roleFurry.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFurry).catch(console.error);
}
if(args[0] === 'furry') {
  if(memberRoleAdd.roles.has(!roleFurry.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleFurry).catch(console.error);
}
if(args[0] === 'Yuri') {
  if(memberRoleAdd.roles.has(!roleYuri.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYuri).catch(console.error);
}
if(args[0] === 'yuri') {
  if(memberRoleAdd.roles.has(!roleYuri.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYuri).catch(console.error);
}
if(args[0] === 'Yaoi') {
  if(memberRoleAdd.roles.has(!roleYaoi.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYaoi).catch(console.error);
}
if(args[0] === 'yaoi') {
  if(memberRoleAdd.roles.has(!roleYaoi.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYaoi).catch(console.error);
}
if(args[0] === 'Level') {
  if (!args[1]) return;
  if (args[1] === 'Block') {
  if(memberRoleAdd.roles.has(!roleLevelBlock.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLevelBlock).catch(console.error);
}}
if(args[0] === 'level') {
  if (!args[1]) return;
  if (args[1] === 'block') {
  if(memberRoleAdd.roles.has(!roleLevelBlock.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLevelBlock).catch(console.error);
}};
}

module.exports.help = {
  name: "remove"
}
