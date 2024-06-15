const startBtn = document.getElementById('startBtn');
const output = document.getElementById('output');

const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.continuous = true;
recognition.lang = 'en-US';

startBtn.addEventListener('click', () => {
  if (startBtn.textContent === 'Start Recording') {
    startBtn.textContent = 'Stop Recording';
    recognition.start();
  } else {
    startBtn.textContent = 'Start Recording';
    recognition.stop();
  }
});

recognition.onresult = function(event) {
  const transcript = event.results[event.results.length - 1][0].transcript;
  output.textContent += transcript;
};

recognition.onend = function() {
  startBtn.textContent = 'Start Recording';
};

recognition.onerror = function(event) {
  console.error('Speech recognition error detected: ' + event.error);
};
