const { MessageEmbed, MessageEmbedImage } = require('discord.js');
module.exports = {
    name: 'hentai',
    description: 'post hentai',

    async execute(interaction) {
        let embed = new MessageEmbed();
        embed.image.url = "attachment://hentai.mp4"; //"https://cdn.discordapp.com/attachments/384598444825640960/876949134924464159/video0.mp4";
        //embed.image = embedImage;
        await interaction.reply({ embeds: [embed] });
    }
}