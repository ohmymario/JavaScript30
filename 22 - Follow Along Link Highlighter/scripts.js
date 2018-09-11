// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

// grab all links

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  // getBoundingClientRect
  // size of an element and its position relative to the viewport.
  const linkCords = this.getBoundingClientRect();
  console.log(linkCords);
  const coords = {
    width: linkCords.width,
    height: linkCords.height,
    left: linkCords.left + window.scrollX,
    top: linkCords.top + window.scrollY,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  // Using Transfor for performance
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => {
  a.addEventListener('mouseenter', highlightLink);
});
