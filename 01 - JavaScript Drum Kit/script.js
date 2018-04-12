function playSound(e) {

  //Check for corrosponding audio element in html file
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  const key = document.querySelector(`.key[data-key="${e.which}"]`);

  if(!audio) return;

  key.classList.add('playing');

  audio.currentTime = 0; //Restart audio if key hit again
  audio.volume = 0.2; //lower volume

  audio.play();

}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; 
  this.classList.remove('playing'); // this refers to specific key element
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', (e) => {playSound(e)})
