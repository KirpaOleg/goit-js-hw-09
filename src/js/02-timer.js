import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const timerDiv = (document.querySelector('.timer').style.display = 'flex');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');

const fieldEl = document.querySelectorAll('.field').forEach(el => {
  el.style.marginRight = '30px';
  el.style.textAlign = 'center';
});

const valueEl = document.querySelectorAll('.value').forEach(el => {
  el.style.fontSize = '56px';
  el.style.display = 'flex';
  el.style.justifyContent = 'center';
});

const labelEl = document.querySelectorAll('.label').forEach(el => {
  el.style.textTransform = 'uppercase';
});

btnEl.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function countTime(components) {
  secEl.textContent = components.seconds;
  minEl.textContent = components.minutes;
  hoursEl.textContent = components.hours;
  daysEl.textContent = components.days;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates < Date.now()) {
      console.log('selectedDates:', selectedDates);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
    }
  },
};

class Timer {
  constructor() {
    this.isActive = false;
    this.timerId = null;
  }
  timerStart() {
    if (this.isActive) {
      return;
    }
    btnEl.disabled = true;
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = new Date(inputEl.value) - currentTime;
      const components = convertMs(deltaTime);
      countTime(components);
      if (deltaTime <= 999) {
        Notiflix.Notify.info('Time is over!');
        clearInterval(this.timerId);
        btnEl.disabled = false;
      }
    }, 1000);
  }
}

const timer = new Timer();
flatpickr(inputEl, options);

btnEl.addEventListener('click', () => timer.timerStart());
