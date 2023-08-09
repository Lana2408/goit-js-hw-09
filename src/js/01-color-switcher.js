function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', onStartClick);
stopButton.addEventListener('click', onStopClick);
stopButton.disabled = true;
let interval = null;

function onStartClick(evt) {
    startButton.disabled = true;
    stopButton.disabled = false;
    interval = setInterval(() => {
        document.body.style.background = getRandomHexColor();}, 1000); 

   }
   function onStopClick(evt) {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(interval);
   }