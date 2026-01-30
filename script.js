// Select all piano keys
const keys = document.querySelectorAll('.key');

// Add an event listener to each key
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);

  noteAudio.currentTime = 0; 

  noteAudio.play();

  key.classList.add('active');
  
  const currentNoteDisplay = document.getElementById('current-note');
  currentNoteDisplay.textContent = `Current Note: ${key.dataset.note.toUpperCase()}`;
  
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}

const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u'];
const BLACK_KEYS = ['1', '2', '3', '4', '5'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event

  if (e.repeat) {
    return;
  }

  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }

});