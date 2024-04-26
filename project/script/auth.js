function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation
    if (username === "user" && password === "pass") { // Replace with actual validation logic
        localStorage.setItem('user', username); // Store user session
        window.location.href = 'questionnaire.html'; // Redirect to questionnaire
    } else {
        alert('Invalid credentials, please try again!');
    }
}

function signup() {
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    // Simulate account creation
    if (username && email && password) { // Simplified check
        localStorage.setItem('user', username); // Store user session
        window.location.href = 'questionnaire.html'; // Redirect to questionnaire
    } else {
        alert('Please fill out all fields correctly!');
    }
}
