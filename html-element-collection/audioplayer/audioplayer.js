function arrayFrom(array) {
    return array = Array.from(array)[0];
}
function playAudio() {
    player.src = audioArray[numberAudio];
    mediaplayer.classList.toggle('play');
    player.play();
}

function pauseAudio() {
    mediaplayer.classList.toggle('play');
    player.pause();
}

function nextAudio() {
    numberAudio++;
    if (numberAudio === audioArray.length) {
        numberAudio = 0;
    }
    nameSongInPlayer.title = nameAudio[numberAudio];
    player.src = audioArray[numberAudio];
    mediaplayer.classList.add('play');
    player.play();
}
function backAudio() {
    numberAudio--;
    if (numberAudio === -1) {
        numberAudio = audioArray.length - 1;
    }
    nameSongInPlayer.title = nameAudio[numberAudio];
    player.src = audioArray[numberAudio];
    mediaplayer.classList.add('play');
    player.play();
}

const mediaplayer = arrayFrom(document.getElementsByClassName('mediaplayer'));
const playButton = arrayFrom(document.getElementsByClassName('fa fa-play'));
const pauseButton = arrayFrom(document.getElementsByClassName('fa fa-pause'));
const backButton = arrayFrom(document.getElementsByClassName('back'));
const stopButton = arrayFrom(document.getElementsByClassName('stop'));
const nextButton = arrayFrom(document.getElementsByClassName('next'));

const pauseImage = arrayFrom(document.getElementsByClassName('fa fa-pause'))

const player = arrayFrom(document.getElementsByTagName('audio'));

const nameSongInPlayer =  arrayFrom(document.getElementsByClassName('title'));

const nameAudio = ['Chill Tour',
                    'This is it band',
                    'LA Fusion Jam']

const audioArray = ['https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'];

let numberAudio = 0

playButton.onclick = playAudio;
pauseButton.onclick = pauseAudio;
backButton.onclick = backAudio;
nextButton.onclick = nextAudio;

stopButton.onclick = () => {
    pauseAudio();
    player.currentTime = 0;
}

