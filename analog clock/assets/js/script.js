const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const setClock = () => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotatez(${hh + mm / 12}deg)`;
    min.style.transform = `rotatez(${mm}deg)`;
    sec.style.transform = `rotatez(${ss}deg)`;
};

// First Time 
setClock();

//Update Every 1000 ms
setInterval(setClock, 1000);