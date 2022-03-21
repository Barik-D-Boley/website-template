const express = require("express"),
    app = express(),
    bodyParser = require("body-parser")
    // mongoose = require("mongoose"),
    // passport = require("passport"),
    // LocalStrategy = require("passport-local"),
    // passportLocalMongoose = require("passport-local-mongoose"),
    // User = require("./models/user");

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/styles", express.static(__dirname + "/views/styles")) // Use this when linking stuff in ejs
// app.use("/api/v1/users", )

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
}

// index page
app.get('/', function (req, res) {
    res.render('pages/index', {
        user: user
    });
});

// Resume page
app.get('/resume', function (req, res) {
    res.render('pages/resume');
});

// Contact Page
app.get('/contact', function (req, res) {
    res.render('pages/contact');
});

// Login Page
app.get('/login', function (req, res) {
    res.render('pages/login');
});
app.post('/login', function (req, res) {
    // Insert Login Code Here
    let username = req.body.email;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});

// Register Page
app.get('/register', function (req, res) {
    res.render('pages/register');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});