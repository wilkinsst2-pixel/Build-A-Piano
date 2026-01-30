// Select all piano keys
const keys = document.querySelectorAll('.key');

// Add an event listener to each key
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  console.log(noteAudio);
}