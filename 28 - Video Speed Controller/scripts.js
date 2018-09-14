const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop;
  const min = 0.4;
  const max = 4.006;

  const percent = y / this.offsetHeight;
  const height = `${Math.round(percent * 100)}%`;

  const playbackRate = percent * (max - min) + min;
  console.log(playbackRate);

  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(2)}x`;

  video.playbackRate = playbackRate;
});

// 1. Grab values from the top[0px] of the speed element to the bottom[410px]
//    How many pixels from top to bottom [y = e.pageY - this.offsetTop]
// 2. From this create a percentage w/ [percent = y / this.offsetHeight]
//    [TOP 0.0 -> MIDDLE 0.5 -> BOTTOM 1.0]
// 3. Create a percentage EXAMPLE => [ 0.1 -> 10% ]
//    height = `${Math.round(percent * 100)}%`
// 4. Playback rate will be tied between 0.4 and 4.0
// 5. To get values in between here [playbackRate = percent * (max - min) + min]
// 6. Append all grabbed values to the view :
//    bar.style.height = height;
//    bar.textContent = `${playbackRate.toFixed(2)}x`;
//    video.playbackRate = playbackRate;
