var express = require('express'); //require express as the Javascript framework for Node
var bodyParser = require('body-parser');
var routes = require('./routes/mainroutes.js')
var app = express(); // pass express now known as app

app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
})

var server = app.listen(4000, function(){
  console.log('Listening on port', server.address().port)
})

module.exports = app;
