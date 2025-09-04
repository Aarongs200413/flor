var audio = document.querySelector('audio');
var letra = document.querySelector('#letra');

var Letra = [
    { text: "At the time", time: 15 },
    { text: "The whisper of birds", time: 18 },
    { text: "Lonely before the sun cried", time: 27 },
    { text: "Fell from the sky", time: 32 },
    { text: "Like water drops", time: 33 },
    { text: "Where I'm now? I don't know why", time: 41 },
    { text: "Nice butterflies in my hands", time: 47 },
    { text: "Too much light for twilight", time: 54 },
    { text: "In the mood for the flowers love", time: 59 },
    { text: "That vision", time: 67 },
    { text: "Really strong, blew my mind", time: 72 },
    { text: "Silence Let me see what it was", time: 78 },
    { text: "I only want to live in clouds", time: 83 },
    { text: "Where I'm now? I don't know why", time: 91 },
    { text: "Nice butterflies in my hands", time: 97 },
    { text: "Too much light for twilight", time: 104 },
    { text: "In the mood for the flowers love", time: 108 },
    { text: "At the time", time: 144 },
    { text: "The whisper of birds", time: 148 },
    { text: "Lonely before the sun cried", time: 153 },
    { text: "Fell from the sky", time: 158 },
    { text: "Like water drops", time: 164 },
    { text: "Where I'm now? I don't know why", time: 169 },
    { text: "Nice butterflies in my hands", time: 176 },
    { text: "Too much light for twilight", time: 183 },
    { text: "In the mood for the flowers", time: 188 },
    { text: "Love.", time: 140 },
];

function actualizarLetra() {
    var tiempo = Math.floor(audio.currentTime);
    var linea = Letra.find((line) => tiempo >= line.tiempo && tiempo < line.tiempo + 6);

    if (linea) {
        var duracion = 0.1;
        var opacidad = Math.min(1, (tiempo - linea.tiempo) / duracion);

        letra.style.opacidad = opacidad;
        letra.innerHTML = linea.text;
    } else {
        letra.style.opacidad = 0;
        letra.innerHTML = "";
    }
}
setInterval(actualizarLetra, 1000);

function ocultarTitulo() {
    var titulo = document.querySelector('.titulo');
    titulo.style.animation =
        "fadeOut 3s ease-in-out forwards";
    setTimeout(() => {
        titulo.style.display = 'none';
    }, 3000);
}
setTimeout(ocultarTitulo, 216000);