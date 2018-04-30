const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // Attempt to retrieve from localStorage first

// Add users item to the Items Array
function addItem(e) {
  e.preventDefault(); // Prevent Refresh

  // Text from input field is added to an object
  const text = this.querySelector('[name=item]').value; // refers to clicked submit buttons inputted value
  const item = {
    text, 
    done: false
  }

  // Add items to array / Add to view / Add to localStorage / reset form
  items.push(item);
  populateList(items, itemsList)
  localStorage.setItem('items', JSON.stringify(items)); // 
  this.reset(); // Clears form for next input

}

// Populates the View with User inputted data
function populateList(plates = [], platesList) {

  // Create HTML | ${i} will reflect the index number
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join('');

}

function toggleDone(e) {
  // Check if correct element(input) to act upon
  if (!e.target.matches('input')) return;

  // Grab index from "data-" attribute
  const el = e.target;
  const index = el.dataset.index;

  // Change the status on array(items) to opposite
  // Update localStorage with new done status
  // Repopulate the view
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem) ;

// Listening for click on parent element | toggleDone checks if checkbox 
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);