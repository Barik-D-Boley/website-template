function ensureAuthenticated() {
    if (isLoggedIn) {
        console.log("You're logged in");
    } else if (!isLoggedIn) {
        console.log("You're not logged in");
    } else {
        console.log("Error")
    }
}