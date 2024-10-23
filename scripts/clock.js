const minEl = document.querySelector('.min');
const hourEl = document.querySelector('.hour');

function getHSTDate() {
    const localTime = new Date();
    const utcMs = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
    const hourInMs = 60 * 60 * 1000;
    // HST offset from UTC
    const hstOffset = -5;
    const hstTime = new Date(utcMs + hstOffset * hourInMs);
    return hstTime;
}

function updateTime() {
    const date = getHSTDate();

    const minDeg = date.getMinutes()/60 * 360 -0;
    const hourDeg = date.getHours()/12 * 360 -0;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
}

/*
function dateTOAMORPM(currentDateTime) {
    var hrs = currentDateTime.getHours();
    var mnts = currentDateTime.getMinutes();
    var AMPM = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mnts = mnts < 10 ? '0' + mnts : mnts;
    var wawa = hrs + ':' + mnts + ' ' + AMPM;
    document.getElementById("wawatime").innerHTML = wawa;
 }
 console.log(dateTOAMORPM(new Date()));
 */

setInterval(updateTime,1000);
updateTime();