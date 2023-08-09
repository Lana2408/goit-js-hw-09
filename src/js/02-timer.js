import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  const leftDays = document.querySelector('[data-days]')
  const leftHours = document.querySelector('[data-hours]')
  const leftMinutes = document.querySelector('[data-minutes]')
  const leftSeconds = document.querySelector('[data-seconds]')
const inputDate = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]')

startButton.addEventListener("click", onButton);
startButton.disabled = true;

let selectedDate; 

flatpickr(inputDate, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0].getTime();
      const deltaDate = selectedDate - Date.now();
  
      if (deltaDate > 0) {
        startButton.disabled = false;
      } else {
        btnStartEl.disabled = true;
      }
    },
  });

  function onButton(event) {
    console.log('Start timer');
    startButton.disabled = true;
  
    const interval = setInterval(() => {
      const deltaDate = selectedDate - Date.now();
  
      if (deltaDate >= 0) {
        const { days, hours, minutes, seconds } = convertMs(deltaDate);
  
        leftDays.textContent = addLeadingZero(days);
        leftHours.textContent = addLeadingZero(hours);
        leftMinutes.textContent = addLeadingZero(minutes);
        leftSeconds.textContent = addLeadingZero(seconds);
      } else {
        console.log('Finish timer');
        clearInterval(interval);
      }
    }, 1000);
  }
  

