module.exports = {
    name: 'ping',
    description: 'Generic ping command.',
    async execute(interaction) {
        await interaction.reply("Pong!");
    }
}