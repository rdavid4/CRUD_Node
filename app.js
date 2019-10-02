'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


  //Body Parser
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json);
  

//CORS


//Exportamos
module.exports = app;