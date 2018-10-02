function arrayFrom(array) {
    array = Array.from(array)[0];
    return array;
}

const clapCollection = document.getElementsByClassName("drum-kit__drum key-clap");
const clap = arrayFrom(clapCollection);

const hihatCollection = document.getElementsByClassName("drum-kit__drum key-hihat");
const hihat = arrayFrom(hihatCollection);

const kickCollection = document.getElementsByClassName("drum-kit__drum key-kick");
const kick = arrayFrom(kickCollection);

const openhatCollection = document.getElementsByClassName("drum-kit__drum key-openhat");
const openhat = arrayFrom(openhatCollection);

const boomCollection = document.getElementsByClassName("drum-kit__drum key-boom");
const boom = arrayFrom(boomCollection);

const rideCollection = document.getElementsByClassName("drum-kit__drum key-ride");
const ride = arrayFrom(rideCollection);

const soundClap = clap.getElementsByTagName('audio');
const soundHihat = hihat.getElementsByTagName('audio');
const soundKick = kick.getElementsByTagName('audio');
const soundOpenhat = openhat.getElementsByTagName('audio');
const soundBoom = boom.getElementsByTagName('audio');
const soundRide = ride.getElementsByTagName('audio');

function playClap() {
    arrayFrom(soundClap).play();
}
function playHihat() {
    arrayFrom(soundHihat).play();
}
function playKick() {
    arrayFrom(soundKick).play();
}
function playOpenhat() {
    arrayFrom(soundOpenhat).play();
}
function playBoom() {
    arrayFrom(soundBoom).play();
}
function playRide() {
    arrayFrom(soundRide).play();
}
clap.onclick = playClap;
hihat.onclick = playHihat;
kick.onclick = playKick;
openhat.onclick = playOpenhat;
boom.onclick = playBoom;
ride.onclick = playRide;

