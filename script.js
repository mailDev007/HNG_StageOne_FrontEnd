/* ------------ define a function to return date object creation ------------ */
const getUpdatedDateTime = () => {
    let DateTime = new Date();

    return DateTime;
}

/* ------------------- Assign the day index to a variable ------------------- */
let currentDay = getUpdatedDateTime().getDay();

/* ---------------------------- days in an array ---------------------------- */
daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/* ----------------- insert the day into the html index page ---------------- */
document.getElementById("currentDay").textContent = daysArray[currentDay]

/* ------ using the date object function, insert the time in millisecs ------ */
setInterval(() => {
    document.getElementById("UTCTime").innerHTML = getUpdatedDateTime().getTime();
}, 1000)
/* the interval above ensures time corresponds to current time in millisecs - */