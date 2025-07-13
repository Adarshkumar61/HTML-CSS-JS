function showLoginPage() {
    document.querySelector('.login-page').style.display = 'block';
}

function showCreateAccountPage() {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.create-account-page').style.display = 'block';
}

// Add event listener to login submit button
document.querySelector('.login-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Call login API or perform login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
});

// Add event listener to create account submit button
document.querySelector('.create-account-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Call create account API or perform create account logic here
    console.log(`Creating account with name: ${name}, email: ${email}, username: ${username} and password: ${password}`);
});

