const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// Hover of nav element
function handleEnter() {
  console.log('ENTER');

  this.classList.add('trigger-enter');
  setTimeout(() => {
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');

  // Coordinates
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  // Set Background to correct size
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,

    // Grant offsent for any elements above the nav
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('width', `${coords.width}px`);

  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// After after leaving hover of nav element
function handleLeave() {
  console.log('LEAVE');
  this.classList.remove('trigger-enter', 'trigger-enter-active');

  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

// 1. Grab all elements and addEventListener for mouse interaction
// 2. Show content within nav elements[ find class 'dropdown' ] then remove it
// 3. Add fade in animation [opacity] w/ a setTimeout and remove all "Hover" classes with handleLeave
// 4. Grab the dropdown that is being hovered w/ [this] = dropdownCoords
// 5. Get the coords for the hovered dropdown w/ getBoundingClientRect = navCoords
// 6. Offset the [left] and [top] values of the dropdownCoords w/ navCoords
// 7. Resize and Translate the dropdown background with the coords values

// Problem - when hovering rapidly the class [trigger-enter-active] doesnt get removed due to not being
// there during the 150ms setTimeout.
// Solution - Check for [trigger-enter] before applying [trigger-enter-active]
