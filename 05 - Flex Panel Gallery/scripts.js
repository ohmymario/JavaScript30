const panels = document.querySelectorAll('.panel');

function toggleOpen() { 
  console.log(this);
  this.classList.toggle('open');
}

panels.forEach(panel => {
  console.log(panel);
  panel.addEventListener('click', toggleOpen);
});