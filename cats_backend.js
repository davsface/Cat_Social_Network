// Course: CS290 - Web Development
// Student Name: Dave Huston
// Assignment: CS290 Project - back end
// Description: Real House Cats of Seattle

//require express, express-handlebars, and body-parser
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

//allow app to be able to accept request bodies formatted as BOTH URL encoded query strings or JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

//set port
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 6947);

//main page carousel route
app.get('/',function(req,res){
    res.render('carousel.handlebars');
});
//photo route
app.get('/photos',function(req,res){
    res.render('photos.handlebars');
});
//profile route
app.get('/profile',function(req,res){
    res.render('profile.handlebars');
});
//contact form route
app.get('/news',function(req,res){
    res.render('news.handlebars');
});
//404 error
app.use(function(req,res){
    res.status(404);
    res.render('404');
});
//500 error
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
