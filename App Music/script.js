const ad = document.querySelector('.song');
const playing = document.querySelector('.fa-play');
const pause = document.querySelector('.fa-pause');
const playSong = document.querySelector('#playsong');
const art_img = document.querySelector('#artist');
const ttl = document.querySelector('.title');
const art_name = document.querySelector('#name');
const progress = document.querySelector('.line');
const lineChild = document.querySelector('.lineChild');
const volumeButton = document.getElementById('volume-btn');
const volumeIcon = document.getElementById('vlm');
const volumeSlider = document.getElementById('volume');
const mIcon = document.getElementById('muted');

const artist_name = ['Drake','Adele', 'Ariana Grande', 'BTS', 'Camila Cabello', 'Ed Sheeran', 'Harry Styles', 'Justin Bieber', 'Katy Perry','Post Malone', 'Shawn Mendes', 'The Weeknd'];

const artist_title = ["God's plan",'Someone Like You', 'Thank U, Next','Butter', 'Havana','Shape of You', 'Watermelon Sugar', 'Yummy', 'Roar', 'Congratulations', 'Lost in Japan', 'Blinding Lights'];

let intervalId;
let isDragging = false;
let x = 0;

playSong.addEventListener('click', effect);

function effect(){
    if(ad.paused){
        ad.play();
        playing.style.display = 'none';
        pause.style.display = 'flex';
        intervalId = setInterval(prog, 1000);
    } else {
        ad.pause();
        playing.style.display = 'flex';
        pause.style.display = 'none';
        clearInterval(intervalId);
    }
    ttl.classList.toggle('run');
    art_img.classList.toggle('round');
    dur();
}

function removeEffect(){
    ad.pause();
    ad.currentTime = 0;
    ttl.classList.remove('run');
    playing.classList.remove('none');
    pause.classList.add('none');
    art_img.classList.remove('round');
    clearInterval(intervalId);
}

function backward(){
    dur();
    x = (x - 1 + artist_name.length) % artist_name.length;
    removeEffect();
    songs(x);
}

function forward(){
    dur();
    x = (x + 1) % artist_name.length;
    removeEffect();
    songs(x);
}

function songs(x){
    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_title[x];
    art_img.src = `./imagenes/${x}.jpg`;
    ad.src = `./songs/${x}.mp3`;
}

songs(0);

const strt = document.querySelector('#start');
const end = document.querySelector('#end');

function dur(){
    const dura = ad.duration;
    const secdu = Math.floor(dura % 60).toString().padStart(2, '0');
    const mindu = Math.floor(dura / 60);
    end.innerHTML = `${mindu}:${secdu}`;
}

function prog(){
    const curtine = ad.currentTime;
    const mincur = Math.floor(curtine / 60);
    const seccur = Math.floor(curtine % 60).toString().padStart(2, '0');

    strt.innerHTML = `${mincur}:${seccur}`;

    const progressPercent = (curtine / ad.duration) * 100;
    lineChild.style.width = `${progressPercent}%`;
}

progress.addEventListener('click', (e) => {
    updateProgress(e);
});

lineChild.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateProgress(e);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function updateProgress(e) {
    const clickX = e.offsetX;
    const progressWidth = progress.clientWidth;
    const newTime = (clickX / progressWidth) * ad.duration;
    ad.currentTime = newTime;
    lineChild.style.width = `${(newTime / ad.duration) * 100}%`;
}

volumeButton.addEventListener('click', () => {
    if (ad.volume > 0) {
        ad.volume = 0;
        volumeIcon.style.display = "none"
        mIcon.style.display = "flex"
    } else {
        ad.volume = volumeSlider.value;
        volumeIcon.style.display = "flex";
        mIcon.style.display = "none";
    }
});

volumeSlider.addEventListener('input', () => {
    ad.volume = volumeSlider.value;
    if (ad.volume == 0) {
        mIcon.style.display = "flex"
        volumeIcon.style.display = "none";
    }else {
        volumeIcon.style.display = "flex"
        mIcon.style.display = "none"
    }
});