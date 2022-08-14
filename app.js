var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

router.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get('/', function(req, res) {
    res.sendFile(path + 'menu.html');
});

router.get('/game', function(req, res) {
    res.sendFile(path + 'game.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function() {
    console.info(`Listening on port ${PORT}`);
});