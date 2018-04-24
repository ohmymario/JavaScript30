// Get Elements
const player = document.querySelector('.player');

const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progessBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  if(this.paused) {
    console.log("paused")
    toggle.textContent = '►';
  } else {
    toggle.textContent = '❚ ❚';
  }
}

// Skip times refer to data-skip in element| obtain w/ this.dataset
function skip() {
  var skippedTime = video.currentTime + parseInt(this.dataset.skip)
  video.currentTime = skippedTime;
}

// Add event listeners
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

skipButtons.forEach(button => button.addEventListener('click', skip))