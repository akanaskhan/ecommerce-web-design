function startCountdown() {
    let days = 4, hours = 13, minutes = 34, seconds = 56;
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) minutes--;
            else {
                minutes = 59;
                if (hours > 0) hours--;
                else {
                    hours = 23;
                    if (days > 0) days--;
                }
            }
        }

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);
}
startCountdown();
