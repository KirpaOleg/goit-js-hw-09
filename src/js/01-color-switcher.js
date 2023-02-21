const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgcBody = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
};

let timer = 0;
stopEl.disabled = true;

const onClickStartBtn = () => {
  timer = setInterval(changeBgcBody, 1000);
  startEl.disabled = true;
  stopEl.disabled = false;
};

const onClickStopBtn = () => {
  startEl.disabled = false;
  stopEl.disabled = true;
  clearInterval(timer);
};

startEl.addEventListener('click', onClickStartBtn);
stopEl.addEventListener('click', onClickStopBtn);
