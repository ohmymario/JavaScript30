// shift = 16 keycode keydown

const checkboxes = document.querySelectorAll('.item>input[type=checkbox]');

// Click event fires even if you use your keyboard
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    console.log(this.checked);
  })
})

window.addEventListener('keydown', function(e) {
  console.log(e.shiftKey)
})