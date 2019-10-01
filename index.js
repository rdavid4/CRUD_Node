'use strict'
var mongoose = require('mongoose');
var app = require('./app')
var port = 3800

mongoose.Promise = global.Promise;
//Conexion mongoose
mongoose.connect('mongodb://localhost:27017/curso_mongo', {useNewUrlParser: true}).then(()=>{
    console.log('* MongoDb: OK');
    app.listen(port, res=>{
        console.log('* Express: OK')
    })
}).catch(err =>{
    console.log('Problema en la conexión', err);
})