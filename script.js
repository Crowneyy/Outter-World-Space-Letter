const poem = `Aconteça o que acontecer
Não vou te esquecer
Porque você faz sentir
Como se não existisse
Lugar melhor pra estar
Além do seu lado`;

const typewriter = document.getElementById("typewriter");
const playButton = document.getElementById("playButton");
const ambientSound = document.getElementById("ambientSound");
const videoContainer = document.getElementById("videoContainer"); // Nova div para o vídeo

let index = 0;
let soundPlaying = true;

function addLetter() {
    if (index < poem.length) {
        typewriter.innerHTML += poem.charAt(index);
        index++;
        setTimeout(addLetter, 30);
    }
}

playButton.addEventListener("click", function() {
    // Redirecionar para o link do YouTube
    window.location.href = "https://youtu.be/5IXMUTiMfZ4";
});

document.addEventListener("DOMContentLoaded", function() {
    addLetter();
});
