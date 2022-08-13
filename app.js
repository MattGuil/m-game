// Imports
const express = require('express');
const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', function(req, res) {
    res.render('menu');
});

app.get('/game', function(req, res) {
    res.render('game');
});

// Listen on port 3000
app.listen(port, function() {
    console.info(`Listening on port ${port}`);
});