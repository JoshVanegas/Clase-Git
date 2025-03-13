document.addEventListener("DOMContentLoaded", inicializar());

function inicializar() {
    document.body.innerHTML = "";

    setTimeout(() => {
        document.body.innerHTML = `<div id="reproductor">
            <h1>Reproductor</h1>
            <div class="container" id="container">
                <h3 id="cancion">No hay canciones reproduciéndose</h3>
                <span id="artistas">N/A</span>
                <audio src="" id="audio"></audio>
            </div>
            <div>
                <div class="btns">
                    <div class="btns1">
                        <input id="volumenSlider" type="range" min="0" max="1" step="0.1" value="0.5">
                        <button id="volumen"><i class="bi bi-volume-down-fill"></i></button>
                    </div>
                    <div class="btns2">
                        <button id="back"><i class="bi bi-skip-backward-fill"></i></button>
                        <button id="play"><i class="bi bi-play-fill"></i></button>
                        <button id="next"><i class="bi bi-skip-forward-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>`;

        // Configurar eventos una vez que los elementos existen
        configurarEventos();
    }, 1000);
}

const canciones = [
    { 
        titulo: "IA",
        artistas: "Clarentkp Ft. Mora", 
        img: "./Img/1.jfif",
        audio: "./Audios/1.mp3" },
    { 
        titulo: "Van Cleef",
        artistas: "Myke Towers Ft. Pirlo420", 
        img: "./Img/2.jfif",
        audio: "./Audios/2.mp3" },
    { 
        titulo: "SISAS NADA",
        artistas: "Tury Ft Blessd", 
        img: "./Img/3.jfif",
        audio: "./Audios/3.mp3" },
    { 
        titulo: "Todo lo bueno tarda",
        artistas: "AlcolirykoZ",
        img: "./Img/4.jfif",
        audio: "./Audios/4.mp3" }
];

let contPlay = false;
let contNext = 0;
let contVolumen = 1;

function configurarEventos() {
    const audio = document.getElementById("audio");
    const play = document.getElementById("play");
    const next = document.getElementById("next");
    const back = document.getElementById("back");
    const volumen = document.getElementById("volumen");
    const volumenSlider = document.getElementById("volumenSlider");
    let repIniciada = true
    play.addEventListener("click", () => {
        const audio = document.getElementById("audio");
        if (repIniciada) {
            empezarReproduccion()
            repIniciada = !repIniciada
        }else{
            if (audio.paused) {
                audio.play();
                play.innerHTML = `<i class="bi bi-pause-fill"></i>`;
            } else {
                audio.pause();
                play.innerHTML = `<i class="bi bi-play-fill"></i>`;
            }
        }
            
    });

    
    next.addEventListener("click", () => {
        contNext = (contNext + 1) % canciones.length; 
        actualizarCancion(audio);
    });

    // Canción anterior
    back.addEventListener("click", () => {
        contNext = (contNext - 1 + canciones.length) % canciones.length; // Ciclo circular hacia atrás
        actualizarCancion(audio);
    });

    // Control de volumen
    volumenSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    volumen.addEventListener("click", () => {
        if (contVolumen === 1) {
            audio.muted = true;
            volumen.innerHTML = `<i class="bi bi-volume-mute-fill"></i>`;
            contVolumen = 0;
            volumenSlider.value = 0
        } else {
            audio.muted = false;
            volumen.innerHTML = `<i class="bi bi-volume-down-fill"></i>`;
            contVolumen = 1;
            volumenSlider.value = 0.5
        }
    });
}

function actualizarCancion(audio) {
    const container = document.getElementById("container");
    const cancion = canciones[contNext];

    container.innerHTML = `
        <h3 id="cancion">${cancion.titulo}</h3>
        <span id="artistas">${cancion.artistas}</span>
        <audio src="${cancion.audio}" id="audio" autoplay></audio>
    `;
}
function empezarReproduccion(){
    container.innerHTML = `
        <h3 id="cancion">${canciones[0].titulo}</h3>
        <img src="${canciones[0].img}" alt="">
        <span id="artistas">${canciones[0].artistas}</span>
        <audio src="${canciones[0].audio}" id="audio" autoplay></audio>
    `;
}