// Set the birthday date (Month is 0-based, so 5 = June)
const birthdayDate = new Date(2025, 5, 2, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = '<h2>Happy Birthday! 🎉</h2>';
    }
}

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
