var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var load 		 = require('express-load');
var mongoose     = require('mongoose');

//Conexão com mongodb GST
mongoose.connect('mongodb://localhost/acadtec', function(err){
	if(err){
		console.log('Erro ao conectar no mongodb: ' + err);
	}else{
		console.log('Conexão com o mongodb efetuada com sucesso!');
	}
});

//var routes = require('./routes/index');
//var users  = require('./routes/users');

var app = express();

//middleware
var erros = require('./middleware/erros');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({ secret: 'aulanodejsacadtec009933gst26' }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

load('models').then('controllers').then('routes').into(app);

//middleware
//app.use(erros.notfound);
//app.use(erros.serverError);

app.listen(3000, function() {
    console.log('Express server listening on port 3000');
});
