const container = document.querySelector('#timer-container');
const timer = document.querySelector('#timer-display');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let pause = true;
let idIntervals = 0;

container.addEventListener('dblclick', resetTimer);
container.addEventListener('click', run);

function run() {
    if (!pause) {
        pause = true;
        clearInterval(idIntervals);
    } else {
        idIntervals = setInterval(startTimer, 10);
        pause = false;
    }
}

function startTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        seconds += 1;
        milliseconds = 0;
    }
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes === 59) {
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
    }

    printTimer(minutes, seconds, milliseconds);
}

function resetTimer() {
    pause = true;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    printTimer(minutes, seconds, milliseconds);
}

function printTimer(minutes, seconds, milliseconds) {
    let printMinutes = minutes < 10 ? '0' + minutes : minutes;
    let printSeconds = seconds < 10 ? '0' + seconds : seconds;
    let printMilliseconds = milliseconds === 0 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds;
    timer.textContent = `${printMinutes}:${printSeconds}:${printMilliseconds}`;
}