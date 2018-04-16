const panels = document.querySelectorAll('.panel');

function toggleOpen() { 
  console.log(this);
  this.classList.toggle('open');
}

function toggleActive(event) {
  // Safari reconizes the ending transition as flex vs flex-grow
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => {
  console.log(panel);
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});