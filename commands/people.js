module.exports = {
    name: 'people', //naam command
    description: 'post someone', //beschrijving command
    options: [{ //extra optie die bij het command horen
        name: 'name', //naam van de optie
        type: 'STRING', //variabele type keuze (INT, STRING, etc.)
        description: 'The person to post', //beschrijving keuze
        required: true, //moet deze keuze ingevuld worden voordat de command gemaakt mag worden?
        choices: [{ //keuzes waar je uit kan kiezen
                name: 'Martijn', //naam keuze (wordt gekozen door persoon)
                value: 'martijn' //waarde die bij deze keuze hoort.
            },
            {
                name: 'Steef',
                value: 'steef'
            },
            {
                name: 'Atsu',
                value: 'atsu'
            }
        ],
    }],
    async execute(interaction) { //functie die uitgevoerd wordt als de command aangeroepen wordt.
        let opt = interaction.options.getString('name'); //neem de waarde van de optie
        switch (opt) {
            case "martijn":
                //martijn :_
                break;
            case "steef":
                break;
            case "atsu":
                break;
        }
        await interaction.reply({ files: ["./danae/3.jpg"] }); //reageer met als inhoud het bestand(file)
    }
}