const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
let timerId = null;

function onStart() {
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  startBtn.setAttribute('disabled', '');
}

function onStop() {
  startBtn.removeAttribute('disabled', '');
  clearInterval(timerId);
}

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
