const express = require("express"),
    app = express(),
    // bodyParser = require("body-parser"),
    userRoutes = require("./login/userRoutes"),
    connectDB = require("./login/connectDB"),
    populateUsers = require("./login/populate"),
    ensureAuthenticated = require("./public/ensureAuthenticated"),
    port = process.env.PORT || 5000

require('dotenv').config();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/styles", express.static(__dirname + "/views/styles")) // Use this when linking stuff in ejs

// Middleware
app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// Resume page
app.get('/resume', function(req, res) {
    res.render('pages/resume');
});

// Contact Page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// Login Page
app.get('/login', function(req, res) {
    res.render('pages/login');
});

// Register Page
app.get('/register', function(req, res) {
    res.render('pages/register');
});

// Logged in Page
app.get('/loggedIn', /* ensureAuthenticated, */ function(req, res) {
    res.render('pages/loggedIn');
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // populateUsers();
        app.listen(port, console.log(`Server is listening on port ${port}`));
    } catch (error) { console.log(error) }
}
start();