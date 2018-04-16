const panels = document.querySelectorAll('.panel');

function toggleOpen() { 
  console.log(this);
  this.classList.toggle('open');
}

function toggleActive(event) {
  // Safari reconizes the ending transition as flex vs flex-grow
  // Using event to check if correct property to respond to
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => {
  console.log(panel);
  panel.addEventListener('click', toggleOpen);

  // Using transitionend gives ability to govern when another transition occurs
  panel.addEventListener('transitionend', toggleActive);
});