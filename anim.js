// Sincronizar las letras con la canción 
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Polaroid of you dancing in my room", time: 10 },
  { text: "I want to remember", time: 15 },
  { text: "I think it was about noon", time: 20 },

  { text: "It's getting harder to understand", time: 28 },
  { text: "to understand how you felt in my hands", time: 34 },

  { text: "And you said you don't want to be my friend", time: 42 },
  { text: "You told me you would rather die", time: 47 },
  { text: "than be in my life", time: 52 },

  { text: "I could be a pretty girl", time: 60 },
  { text: "I'll wear a skirt for you", time: 64 },
  { text: "I could be a pretty girl", time: 70 },
  { text: "Shut up when you want me to", time: 74 },

  { text: "I could be a pretty girl", time: 80 },
  { text: "I'll never make a scene", time: 85 },
  { text: "I could be a pretty girl", time: 90 },
  { text: "I'll do what you like", time: 94 },

  { text: "I could be a pretty girl", time: 108 },
  { text: "I'll lose myself in you", time: 112 },
  { text: "I was so blinded by you", time: 116 },

  { text: "Now I cry just thinking 'bout the fool", time: 124 },
  { text: "that I made myself for you", time: 130 },

  { text: "I could be a pretty girl", time: 138 },
  { text: "I'll wear a skirt for you", time: 142 },
  { text: "I could be a pretty girl", time: 148 },
  { text: "Shut up when you want me to", time: 152 },

  { text: "I could be a pretty girl", time: 158 },
  { text: "I'll never make a scene", time: 162 },
  { text: "I could be a pretty girl", time: 168 },
  { text: "I'll do what you like", time: 172 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

// Función para ocultar el título después de un tiempo
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

// Llama a la función después de un tiempo determinado (2:58 = 178s)
setTimeout(ocultarTitulo, 178000);
