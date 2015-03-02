var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var newsController = require('./controllers/news.js')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-news');

//seed database
require('./models/seeds/newsSeed.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

//api routes
app.get('/api/news', newsController.getAll);

app.post('/api/news', newsController.createNew);


var server = app.listen(7449, function() {
	console.log('Express server listening on port ' + server.address().port);
});
