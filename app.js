var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/styles", express.static(__dirname + "/views/styles")) // Use this when linking stuff in ejs

// index page
app.get('/', function (req, res) {
    let title = "Homepage";

    res.render('pages/index');
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(5000);
console.log('Server is listening on port 5000');
