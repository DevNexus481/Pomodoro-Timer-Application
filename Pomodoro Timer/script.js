let timer;
let minutes;
let seconds = 0;
let isPaused = true;
let intervals;
let currentInterval = 0;

function updateDisplay() {
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (!isPaused) return;
    isPaused = false;
    document.body.className = 'start';
    
    if (currentInterval === 0) {
        minutes = parseInt(document.getElementById("duration").value);
        intervals = parseInt(document.getElementById("intervals").value);
    }
    
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                currentInterval++;
                if (currentInterval >= intervals) {
                    clearInterval(timer);
                    alert("All intervals completed!");
                    resetTimer();
                    return;
                } else {
                    alert(`Interval ${currentInterval} completed! Starting next interval.`);
                    minutes = parseInt(document.getElementById("duration").value);
                    seconds = 0;
                }
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
    document.body.className = 'pause';
}

function resetTimer() {
    isPaused = true;
    clearInterval(timer);
    minutes = parseInt(document.getElementById("duration").value);
    seconds = 0;
    currentInterval = 0;
    updateDisplay();
    document.body.className = 'reset';
}

updateDisplay();