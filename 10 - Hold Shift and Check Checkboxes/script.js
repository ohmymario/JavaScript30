// shift = 16 keycode keydown
const checkboxes = document.querySelectorAll('.item>input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  //  Check for shiftkey and checked to be true
  if(e.shiftKey === true && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('working')
      }
      // Check the checkboxes
      if(inBetween) {
        checkbox.checked = true;
      }
    })
  }
  // holds the last input checkbox clicked
  lastChecked = this;
}

// Click event fires even if you use your keyboard
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', handleCheck)
})


