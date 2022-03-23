const registerFormDOM = document.getElementById('register-form'),
    nameInputDOM = document.getElementById('register-name-input'),
    emailInputDOM = document.getElementById('register-email-input'),
    password1InputDOM = document.getElementById('register-password1-input'),
    password2InputDOM = document.getElementById('register-password2-input')

// Register Form
registerFormDOM.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the submit button from refreshing the page

    if (password1InputDOM.value !== password2InputDOM.value) {
        // Make an error div visible
        console.log("Passwords don't match");
        return;
    }

    const registerInfo = {
        displayName: nameInputDOM.value,
        email: emailInputDOM.value,
        password: password1InputDOM.value,
    }

    try {
        await axios.post('/api/v1/users', registerInfo);
        window.location.pathname = "/login";
    } catch (error) {
        console.log(error);
    }
})