import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const btnStart = document.querySelector("[data-start]");
const timerEl = document.querySelector(".timer")
btnStart.disabled = true;

let timerId = null;
let timerDeadLine = null;
Notify.init({
  width: '360px',
  position: 'center-top',
  distance: '47px',
  opacity: 1,
  
});
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timerDeadLine = selectedDates[0];
        if (selectedDates[0] < Date.now()) {
             btnStart.disabled = true;
           Notify.info("Please choose a date in the future");
        } else {
            btnStart.disabled = false;
        }
    console.log(selectedDates[0]);
  },
});


btnStart.addEventListener("click", startCount);

function startCount() {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = timerDeadLine - currentTime;
    if (diff <= 0) {
      clearInterval(timerId);
      return Notify.info("CONGRATULATIONS :)");
    }
    const timeRemaining = convertMs(diff);
    timerEl.querySelector('[data-days]').textContent = formatTime(
      timeRemaining.days
    );
    timerEl.querySelector('[data-hours]').textContent = formatTime(
      timeRemaining.hours
    );
    timerEl.querySelector('[data-minutes]').textContent = formatTime(
      timeRemaining.minutes
    );
    timerEl.querySelector('[data-seconds]').textContent = formatTime(
      timeRemaining.seconds
    );
  }, 1000);
}



function formatTime(time) {
    return time.toString().padStart(2, "0");
  }


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