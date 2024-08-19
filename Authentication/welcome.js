document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    
    if (username && email) {
        document.getElementById('usernameDisplay').textContent = username;
        document.getElementById('emailDisplay').textContent = email;
    } else {
        // Redirect to login page if not authenticated
        window.location.href = 'index.html';
    }
});
