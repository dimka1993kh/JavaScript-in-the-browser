function arrayFrom(array) {
    array = Array.from(array)[0];
    return array;
}

const collection = [];
collection.push(document.getElementsByClassName("drum-kit__drum key-clap"));
collection.push(document.getElementsByClassName("drum-kit__drum key-hihat"));
collection.push(document.getElementsByClassName("drum-kit__drum key-kick"));
collection.push(document.getElementsByClassName("drum-kit__drum key-openhat"));
collection.push(document.getElementsByClassName("drum-kit__drum key-boom"));
collection.push(document.getElementsByClassName("drum-kit__drum key-ride"));

collection.forEach((button) => {
    function playAudio() {
        arrayFrom(arrayFrom(button).getElementsByTagName('audio')).currentTime = 0;
        arrayFrom(arrayFrom(button).getElementsByTagName('audio')).play();
    }
    arrayFrom(button).onclick = playAudio;
})


