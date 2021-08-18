const Discord = require("discord.js");
const pers = require("./people.json");
const fs = require('fs');

let people = JSON.parse(fs.readFileSync("./commands/people.json", "utf8"));

function getPerson(inp) { //inp = "atsu"
    let index = -1;
    index = pers.findIndex(function(item, i) {
        return item.name === inp; //atsu at index 1;
    });
    return index; //returns 1;
}

function postPerson(index, message) {
    let image;
    // while (image == null){
    //     var imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    //     image = people[index].folder + imageNumber + ".jpg";
    // }

    var allImages = fs.readdirSync("./database/" + people[index].name);
    console.log(allImages);
    console.log(allImages.length);
    let num = Math.floor(Math.random() * (allImages.length - 1 + 1));
    console.log(num);
    image = allImages[num];

    message.channel.send({ files: [people[index].folder + image] });
}

module.exports.run = async(bot, message, args) => {
    let index = getPerson(args);
    if (index >= 0) {
        postPerson(index, message);
    }
}

module.exports.help = {
    name: "person"
}