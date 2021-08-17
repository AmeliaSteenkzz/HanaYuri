const pers = require("./people.json");
const fs = require('fs');

let people = JSON.parse(fs.readFileSync("./commands/people.json", "utf8"));

module.exports = {
    name: 'martijn',
    description: 'Posts a picture of Martijn.',
    async execute(interaction) {
        index = pers.findIndex(function(item, i) {
            return item.name === "martijn";
        });
        let number = people[index].images;
        let imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        await interaction.reply({ files: ["./martijn/" + imageNumber + ".jpg"] });
    }
}