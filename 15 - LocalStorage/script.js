
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault(); // Prevent Refresh
  const text = this.querySelector('[name=item]').value; // refers to clicked submit buttons inputted value
  console.log(text)
  const item = {
    text, 
    done: false
  }

  console.log(item);
  this.reset(); // Clears form for next input

  items.push(item);
  populateList(items, itemsList)
}

// default of empty array to prevent errors
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <label for="">${plate.text}</label>
    </li>
    `;
  }).join('');
}

addItems.addEventListener('submit', addItem) 