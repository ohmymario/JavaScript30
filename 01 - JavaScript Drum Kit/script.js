window.addEventListener('keydown', function(e) {

  //Check for corrosponding audio element in html file
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  if(!audio) return;

  audio.play();

})