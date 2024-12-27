const countdown = () => {
    const lunarNewYear = new Date('February 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = lunarNewYear - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (gap <= 0) {
        clearInterval(interval);
        document.getElementById('fireworks-container').style.display = 'block';
        document.getElementById('fireworks-sound').play();
        // Add fireworks animation logic here
    }
};

const interval = setInterval(countdown, 1000);