// Define global variables
let currentValue = 0;

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

// Function to update the current value displayed on the page
function updateCurrentValue() {
	document.getElementById('current-value').textContent = currentValue;
}

// Function to handle the "Higher" button click
function handleHigherClick() {
	const nextValue = generateRandomNumber();
	if (nextValue > currentValue) {
		currentValue = nextValue;
		updateCurrentValue();
	} else {
		alert('Sorry, the next value was not higher!');
	}
}

// Function to handle the "Lower" button click
function handleLowerClick() {
	const nextValue = generateRandomNumber();
	if (nextValue < currentValue) {
		currentValue = nextValue;
		updateCurrentValue();
	} else {
		alert('Sorry, the next value was not lower!');
	}
}

// Add event listeners to the buttons
document.getElementById('higher-btn').addEventListener('click', handleHigherClick);
document.getElementById('lower-btn').addEventListener('click', handleLowerClick);
