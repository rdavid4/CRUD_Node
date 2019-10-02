'use strict'

function pruebas (req, res) {
    res.status(200).send({mensaje: 'Todo correcto desde Controller'});
};

module.exports = {
    pruebas
}