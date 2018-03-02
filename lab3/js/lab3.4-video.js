var video = document.getElementById('video-element'); //gets video from video element with id video-stream
var volume = document.getElementById('volume');

function videoPlay() {
  video.play();
}

function videoPause() {
  video.pause();
}

function changeVolume() {
  video.volume = volume.value;
}

volume.addEventListener("input", changeVolume);//for changing volume
