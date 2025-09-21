// Sincronizar las letras con la canción 
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I don't wanna be your friend", time: 5 },
  { text: "I wanna kiss your neck", time: 10 },
  { text: "I wanna be your pretty girl", time: 14 },
  { text: "I'm just not in the mood", time: 18 },
  { text: "I wanna tell you that I love you", time: 22 },
  { text: "But I'm too afraid to do", time: 26 },
  { text: "Cause I don't think you feel the same", time: 31 },
  { text: "But I just wanna be your pretty girl", time: 35 },
  { text: "And I don't wanna be alone", time: 40 },
  { text: "I don't wanna be alone", time: 44 },
  { text: "I don't wanna be your friend", time: 50 },
  { text: "I wanna kiss your neck", time: 54 },
  { text: "I wanna be your pretty girl", time: 58 },
  { text: "I wanna be your pretty girl", time: 65 },
  { text: "And I don't wanna be alone", time: 70 },
  { text: "I don't wanna be alone", time: 74 },
  { text: "I just want to be your pretty girl", time: 78 },
  { text: "But I'm too afraid to say", time: 82 },
  { text: "That I love you", time: 86 },
  { text: "Cause I don't think you feel the same", time: 90 },
  { text: "But I just wanna be your pretty girl", time: 94 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de un tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de un tiempo determinado (en este caso 216 segundos)
setTimeout(ocultarTitulo, 216000);
