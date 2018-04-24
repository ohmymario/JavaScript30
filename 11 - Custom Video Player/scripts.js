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
    toggle.textContent = '►';
  } else {
    toggle.textContent = '❚ ❚';
  }
}

// Skip times refer to data-skip in element| obtain w/ this.dataset
function skip() {
  video.currentTime += parseInt(this.dataset.skip)
}

// input range will give back value based on slider position
// this.name will only change value on slider being changed
function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progessBar.style.flexBasis = `${percent}%`
}

// Add event listeners
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

skipButtons.forEach(button => button.addEventListener('click', skip))

// calls function on mousemove to continually update 
ranges.forEach(range => range.addEventListener('click', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))



