const bands = [
  'The Plot in You', 'The Devil Wears Prada',
  'Pierce the Veil', 'Norma Jean', 'The Bled',
  'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'
];

// Will Replace "A", "The", and "An" regardless of capitalization
// Ignores strings with more than just "An" or "The"
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

// const sortedBands = bands.sort((a, b) => {
//   //Data not modified only assesses where it will land in the sort
//   if(strip(a) > strip(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// }) 

// Refactored with implicit return
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1) 

//.join('') removes default comma
// Returns one big string
document.querySelector('#bands').innerHTML = 
sortedBands
.map(band => `<li>${band}</li>`)
.join('');

console.log(sortedBands);