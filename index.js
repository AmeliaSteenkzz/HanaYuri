const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
const token = process.env.token;
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
bot.on("ready", async() => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("you", { type: "WATCHING" });
    //bot.user.setGame("AW Original Bot");
});
bot.on("guildMemberAdd", function(member) {
    let joinEmbed = new Discord.RichEmbed()
        .setColor("#af0e97")
        .setImage("https://cdn.discordapp.com/attachments/626509854260854814/728342962605522974/welcome.jpg")
        .setDescription("꧁【❦Kindly go fuck yourself❦】꧂")
        .addField("Enjoy the anime tiddies")
        .setTimestamp()
        .setFooter("Steenkzz | Martijn#0001");
    member.send(joinEmbed);
    let memberRole = member.guild.roles.find("id", "536591473211211790");
    member.addRole(memberRole);
});
bot.on('message', function(message) {
    if (message.content == '/gamemode 0') {
        message.channel.send('Your game mode has been updated to *Survival Mode*');
    }
    if (message.content == '/gamemode 1') {
        return message.channel.send('Your game mode has been updated to *Creative Mode*');
    }
    if (message.content == '/gamemode 2') {
        return message.channel.send('Your game mode has been updated to *Adventure Mode*');
    }
    if (message.content == '/gamemode 3') {
        return message.channel.send('Your game mode has been updated to *Spectator Mode*');
    }
})
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) {
        return;
    }
    let commandfile = bot.commands.get(cmd.slice(prefix.length)); //try and get command
    if (!commandfile) {
        commandfile = bot.commands.get("person"); //try for a name instead
        if (!commandfile) {} else {
            args = cmd.slice(prefix.length);
        }
    }
    commandfile.run(bot, message, args); //run command
});

bot.login(token).catch(err => console.log(err)); 
