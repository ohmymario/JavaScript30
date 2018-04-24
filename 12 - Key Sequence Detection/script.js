const pressed = [];
const secretCode = 'mario'

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  console.log(pressed);
  var amountToRemove = pressed.length - secretCode.length;

  pressed.splice(-secretCode.length - 1, amountToRemove);

  if(pressed.join('').includes(secretCode)) {
    console.log('You found the secret code')
    cornify_add();
  }
})

console.log(pressed);
