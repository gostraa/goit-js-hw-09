


const refs = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
    bodyElem: document.querySelector("body"),
};


let timerId = null;
refs.btnStart.addEventListener("click", (e) => {
     timerId = setInterval(() => {
        changeBodyColor()
     }, 1000);
    
    console.log(timerId);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
});

refs.btnStop.addEventListener("click", (e) => {
    clearInterval(timerId);
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
});



function changeBodyColor() {
    refs.bodyElem.style.backgroundColor = getRandomHexColor();
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};