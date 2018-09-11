const msg = new SpeechSynthesisUtterance();

let voices = [];

// Document Selection
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Add input text to Msg
msg.text = document.querySelector('[name="text"]').value;

// Restart speech with new voice or settings
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// Retrieve Voices and populate Dropdown with 'EN' voices
function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

// Change voice to voice dropdown selection
function setVoice() {
  // Loop over voices and find the one that matches the input element
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

// Change voice to voice range selection
function setOption() {
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);

// Listen for each input value
options.forEach(option => option.addEventListener('change', setOption));

speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
