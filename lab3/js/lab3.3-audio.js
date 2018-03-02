var audio = document.getElementById('audio-stream'); //gets audio from audio element with id audio-stream
var volume = document.getElementById('volume');

function audioPlay() {
  audio.play();
}

function audioPause() {
  audio.pause();
}

function changeVolume() {
  audio.volume = volume.value;
}

volume.addEventListener("input", changeVolume);//for changing volume
