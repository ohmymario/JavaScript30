window.addEventListener('keydown', function(e) {

  //Check for corrosponding audio element in html file
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  const key = document.querySelector(`.key[data-key="${e.which}"]`);

  if(!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0; //Restart audio if key hit again
  audio.volume = 0.6; //lower volume

  audio.play();

})