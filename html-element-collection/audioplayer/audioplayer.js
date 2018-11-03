function arrayFrom(array) {
    return array = Array.from(array)[0];
}
function playStateAudio() {
    player.src = audioArray[numberAudio];
    if (mediaplayer.classList.contains('play')) {
        player.pause();
    } else {
        player.play();
    }   
    mediaplayer.classList.toggle('play');
}

function nextAudio() {
    numberAudio++;
    if (numberAudio === audioArray.length) {
        numberAudio = 0;
    }
    nameSongInPlayer.title = nameAudio[numberAudio];
    player.src = audioArray[numberAudio];
    if (mediaplayer.classList.contains('play')) { // добавил данный код
        player.play();
    }
}
function backAudio() {
    numberAudio--;
    if (numberAudio === -1) {
        numberAudio = audioArray.length - 1;
    }
    nameSongInPlayer.title = nameAudio[numberAudio];
    player.src = audioArray[numberAudio];
    if (mediaplayer.classList.contains('play')) { // добавил данный код
        player.play();
    }
}

const mediaplayer = arrayFrom(document.getElementsByClassName('mediaplayer'));
const playstateButton = arrayFrom(document.getElementsByClassName('playstate'));
const pauseButton = arrayFrom(document.getElementsByClassName('mediaplayer pause'));
const playButton = arrayFrom(document.getElementsByClassName('mediaplayer play'));
const backButton = arrayFrom(document.getElementsByClassName('back'));
const stopButton = arrayFrom(document.getElementsByClassName('stop'));
const nextButton = arrayFrom(document.getElementsByClassName('next'));

const pauseImage = arrayFrom(document.getElementsByClassName('fa-pause'))

const player = arrayFrom(document.getElementsByTagName('audio'));

const nameSongInPlayer =  arrayFrom(document.getElementsByClassName('title'));

const nameAudio = ['Chill Tour',
                    'This is it band',
                    'LA Fusion Jam']

const audioArray = ['https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'];

let numberAudio = 0

playstateButton.onclick = playStateAudio;
backButton.onclick = backAudio;
nextButton.onclick = nextAudio;

stopButton.onclick = () => {
    mediaplayer.classList.remove('play');
    player.pause();
    player.currentTime = 0;
}

