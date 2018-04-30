const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // Attempt to retrieve from localStorage first

function addItem(e) {
  e.preventDefault(); // Prevent Refresh

  const text = this.querySelector('[name=item]').value; // refers to clicked submit buttons inputted value
  const item = {
    text, 
    done: false
  }

  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items)); // 
  this.reset(); // Clears form for next input

}

// default of empty array to prevent errors
function populateList(plates = [], platesList) {

  // Create HTML | ${i} will reflect the index number
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index="${i}" id="item${i}">
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');

}

addItems.addEventListener('submit', addItem) 

populateList(items, itemsList);