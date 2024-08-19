document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username && email && password) {
            // Store user data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            // Redirect to welcome page
            window.location.href = 'welcome.html';
        } else {
            alert('Please enter all fields.');
        }
    });
});
