'use strict'

const buttons = document.getElementsByClassName("drum-kit__drum");

Array.from(buttons).forEach((button) => {
    function playAudio() {
        const audio = button.getElementsByTagName('audio')[0];
        audio.currentTime = 0;
        audio.play();
    }
    button.onclick = playAudio;
})


