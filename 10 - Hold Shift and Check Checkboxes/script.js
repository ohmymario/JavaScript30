// shift = 16 keycode keydown
const checkboxes = document.querySelectorAll('.item>input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
  if(e.shiftKey === true) {
    console.log("TRUEE")
  }

  console.log(this.checked)

  lastChecked = this;
}

// Click event fires even if you use your keyboard
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', handleCheck)
})


