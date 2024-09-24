const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');

// Function to update time, date, and day
function updateClock() {
    const now = new Date();
    
    // Format time (hh:mm)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    timeElement.textContent = `${hours}:${minutes}`;

    // Format date (yyyy/mm/dd)
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    dateElement.textContent = `${year}/${month}/${day}`;

    // Format day of the week (Monday, Tuesday, etc.)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    dayElement.textContent = dayOfWeek;
}

// Function to handle theme change based on system preference
function handleThemeChange(event) {
    if (event.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Set the initial theme based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the correct time, date, and day
updateClock();
