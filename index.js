'use strict'
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var morgan = require('morgan');

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/frutas'));

mongoose.Promise = global.Promise;
//Conexion mongoose
mongoose.connect('mongodb://localhost:27017/curso_mongo', {useNewUrlParser: true}).then(()=>{
    console.log('* MongoDb: OK');
    app.listen(3800, res=>{
        console.log('* Express: OK')
    })
}).catch(err =>{
    console.log('Problema en la conexión', err);
})