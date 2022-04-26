
let time = 3600;
const countDownEl = document.getElementById("time");

setInterval(updateCountDown, 1000);

function updateCountDown() {
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;
    countDownEl.innerHTML = `${sec}`
    time--;
}




