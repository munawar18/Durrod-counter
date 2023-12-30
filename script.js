let clickCount = 0;
let lastCount = 0;

function updateCounterDisplay() {
    document.getElementById('counterDisplay').innerText = clickCount;
}

function countClick() {
    clickCount++;
    updateCounterDisplay();
}

function subtractClick() {
    if (clickCount > 0) {
        clickCount--;
        updateCounterDisplay();
    }
}

function clearCount() {
    lastCount = clickCount;
    clickCount = 0;
    updateCounterDisplay();
    updateLastCount(lastCount);
}

function updateLastCount(lastCount) {
    const lastCountContainer = document.getElementById('lastCountContainer');

    // Update styles for the last count container
    lastCountContainer.innerText = `Last Count: ${lastCount}`;
    lastCountContainer.style.backgroundColor = 'white';
    lastCountContainer.style.color = 'blue';
}

document.addEventListener('DOMContentLoaded', function () {
    // Display the app name for 3 seconds
    setTimeout(function () {
        const appNameContainer = document.querySelector('.app-name-container');
        appNameContainer.style.display = 'none'; // Hide the app name container
        const appContainer = document.querySelector('.app-container');
        appContainer.classList.add('show'); // Add the 'show' class to display the app
    }, 3000);
});
