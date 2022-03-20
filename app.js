var express = require('express');
var app = express();

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.use("/styles", express.static(__dirname + "/views/styles")) // Use this when linking stuff in ejs

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

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});