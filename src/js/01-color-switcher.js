const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgcBody = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
};

let timer = null;
stopEl.disabled = true;

const onClickStartBtn = () => {
  timer = setInterval(changeBgcBody, 1000);
  btnDisabled(startEl, stopEl);
};

const onClickStopBtn = () => {
  btnDisabled(stopEl, startEl);
  clearInterval(timer);
};

function btnDisabled(start, stop) {
  start.disabled = true;
  stop.disabled = false;
}

startEl.addEventListener('click', onClickStartBtn);
stopEl.addEventListener('click', onClickStopBtn);
