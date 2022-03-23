const loginFormDOM = document.getElementById('login-form'),
    emailInputDOM = document.getElementById('login-email-input'),
    passwordInputDOM = document.getElementById('login-password-input')

// Login Form
loginFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the submit button from refreshing the page

    email = emailInputDOM.value;
    password = passwordInputDOM.value;

    try {
        let users = await axios.get('/api/v1/users');
        users = users.data.users;
        console.log(users);
        for (let i=0; i < users.length; i++) {
            if ((email === users[i].email) && (password === users[i].password)) {
                console.log("Credentials match");
                // Give the user access to the page
                window.location.pathname = "/loggedIn";
                return;
            }
        }
        console.log("Incorrect email or password");
    } catch (error) {
        console.log(error);
    }
})