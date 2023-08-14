const poem = `Eu te amo.`;

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
    // Tocar a música ambiente
    ambientSound.play();

    videoContainer.innerHTML = '<div class="video-wrapper"><video width="560" height="315" controls><source src="https://cdn.discordapp.com/attachments/885668867907661876/1136479557596225576/Rick_Astley_-_Never_Gonna_Give_You_Up_Official_Music_Video.mp4" type="video/mp4">Seu navegador não suporta o elemento de vídeo.</video></div>';
    typewriter.style.display = "none"; // Esconder o texto
    playButton.style.display = "none"; // Esconder o botão

    // Parar a música quando o vídeo for reproduzido
    ambientSound.pause();
    ambientSound.currentTime = 0;

    soundPlaying = false;
});

document.addEventListener("DOMContentLoaded", function() {
    addLetter();
});
