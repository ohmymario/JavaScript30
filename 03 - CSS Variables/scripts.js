const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

function handleUpdate() {
  const suffix = this.dataset.sizing || '' ; // access "data-" attribute if present (px)

  //this.value will be pixel size or color depeding on which input modifying
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// Will continually update whether with just kb or mouse input
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

