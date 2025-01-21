// This file contains JavaScript code for interactive features on the resume website.

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to dynamically update the year in the footer
function updateYear() {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
}

// Call the updateYear function on page load
window.onload = updateYear;