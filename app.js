'use strict'
var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//RUTAS
app.get('/', function (req, res) {
    res.send('Hello World! Desde Express');
  });
app.get('/test', function (req, res) {
    res.status(200).send({mensaje: 'Todo correcto'});
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  });

  //Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)

//CORS


//Exportamos
module.exports = app