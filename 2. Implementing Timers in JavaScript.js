// Task 1
function startCountdown(duration) {
    let timer = duration;
    const display = document.getElementById('timer-display'); // Assumes there is an element with this ID

    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            notifyUser("Time's up!");
        }
    }, 1000);
}

// Task 2
function delayedNotification(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

// Task 3
function repeatNotification(message, interval) {
    const notificationInterval = setInterval(() => {
        const userResponse = confirm(message); // Using confirm to give dismiss option
        if (userResponse) {
            clearInterval(notificationInterval);
        }
    }, interval);
}