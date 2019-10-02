'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//Creacion de esquema para frutas
var FrutaSchema = {
    nombre: String,
    color: String,
    temporada: Boolean
}

//Definimos el nombre de la entidad Fruta, que lo convierte a plural en la DB
module.exports = mongoose.model('Fruta', FrutaSchema)