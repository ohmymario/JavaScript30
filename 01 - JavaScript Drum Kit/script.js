window.addEventListener('keydown', function(e) {
  console.log(e.which);

  //Check for corrosponding audio element in html file
  const audio = document.querySelector(`audio[data-key="${e.which}"]`);
  console.log(audio);
})