import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector("[data-start]");
btnStart.disabled = true;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
         
        if (selectedDates[0] < Date.now()) {
             btnStart.disabled = true;
            alert("Please choose a date in the future");
           
        } else {
            btnStart.disabled = false;
        }
    console.log(selectedDates[0]);
  },
});


