const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play and Pause

function toggleVideoStatus() {
  if(video.paused){
      video.play();
  }else{
      video.pause();
  }
}

function updatePlayIcon() {
  return true;
}

// Update Progress and timestamp
function updateProgress() {
  return true;
}

function setVideoProgress() {
  return true;
}

// Stop Video

function stopVideo() {
  return true;
}

// Event Listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
