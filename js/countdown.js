// Countdown to fest dates (21 & 22 Feb 2026)
function updateCountdown() {
    const festDate = new Date('February 21, 2026 10:00:00').getTime();
    const now = new Date().getTime();
    const distance = festDate - now;
    const statusElement = document.getElementById('fest-status');

    if (distance < 0) {
        // If fest has started
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        statusElement.textContent = '🎉 The Festival is ON! Enjoy! 🎉';
        statusElement.style.color = '#6a11cb';
        statusElement.style.fontWeight = 'bold';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // Update status message based on remaining time
    if (days === 0 && hours < 24) {
        statusElement.textContent = '🚀 Festival starts TODAY! Get ready!';
        statusElement.style.color = '#ff6b6b';
    } else if (days === 1) {
        statusElement.textContent = '✨ Only 1 day to go! Final preparations!';
        statusElement.style.color = '#ffa726';
    } else if (days < 7) {
        statusElement.textContent = '🌟 Less than a week remaining!';
        statusElement.style.color = '#4ecdc4';
    } else {
        statusElement.textContent = '🎵 Get ready for the festival!';
        statusElement.style.color = '#333';
    }
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Optional: Add animation for countdown changes
function animateValueChange(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element.innerText !== newValue) {
        element.style.transform = 'scale(1.2)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    }
}