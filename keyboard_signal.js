const readline = require('readline');
const player = require('play-sound')();
const say = require('say');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function controleerGewicht() {
    rl.question("Voer het gewicht in (kg): ", (input) => {
        let gewicht = parseFloat(input);
        if (gewicht > 5) {
            console.log("Gewicht is hoger dan 5kg");
            player.play('alert.mp3', (err) => {
                if (err) console.error("Fout bij afspelen van geluid:", err);
            });
            say.speak("Gewicht is hoger dan 5 kilogram", "nl-NL");
        } else {
            console.log("Gewicht is binnen de limiet.");
        }
        rl.close();
    });
}

controleerGewicht();
