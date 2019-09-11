const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date(); // The time right now
    
    /* Logic for the seconds hand */
    const seconds = now.getSeconds(); //Seconds of current minute
    const secondsDegrees = ((seconds / 60) * 360) + 90; // rotate hand formula
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    /* Logic for minute hand */
    const mins = now.getMinutes();
    const minsDegrees = (( mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    /* Logic for hours hand */
    const hour = now.getMinutes();
    const hourDegrees = (( hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//call setDate() every second
setInterval(setDate, 1000);
