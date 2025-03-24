<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gewicht Controle</title>
    <script>
        function controleerGewicht() {
            let gewicht = parseFloat(document.getElementById("gewicht").value);
            let audio = new Audio('alert.mp3');
            
            if (gewicht > 5) {
                audio.play();
                let synth = window.speechSynthesis;
                let utterance = new SpeechSynthesisUtterance("Gewicht is hoger dan 5 kilogram");
                utterance.lang = "nl-NL";
                synth.speak(utterance);
            }
        }
    </script>
</head>
<body>
    <h2>Voer het gewicht in (kg)</h2>
    <input type="number" id="gewicht" step="0.1"> kg
    <button onclick="controleerGewicht()">Controleer</button>
</body>
</html>
