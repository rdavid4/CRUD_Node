const { Router } = require('express');
const router = Router();

//Modelos
var Fruta = require('../models/fruta');

//Index
router.get('/frutas', (req, res)=>{
    Fruta.find({}).exec((err, frutas)=>{
        if(frutas){
            res.status(200).send({frutas});
        }
    })
})
//Find
router.get('/frutas/:id', (req, res)=>{
    var frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err, frutas)=>{
        if(frutas){
            res.status(200).send({frutas});
        }
    })
})

//Update
router.put('/frutas/:id', (req, res)=>{
    var frutaId = req.params.id;
    var data = req.body;

    Fruta.findByIdAndUpdate(frutaId,data ,{new: true},(err, frutaUpdate)=>{
      
            res.status(200).send(frutaUpdate);
      
    });
});
//Delete
router.delete('/frutas/:id', (req, res)=>{
    var frutaId = req.params.id;
 

    Fruta.findByIdAndRemove(frutaId,(err, frutaUpdate)=>{
           
            res.status(200).send(frutaUpdate);
      
    });
});
//Store
router.post('/frutas', (req, res)=>{
    var fruta = new Fruta();

    var data = req.body;
    if(data.nombre){
        fruta.nombre = data.nombre;
        fruta.color = data.color;
        fruta.temporada = data.temporada;

        fruta.save((err, frutaStored) =>{
            if(err){
                req.status(500).send({mensaje: 'Error'})
            }else{
                if(frutaStored){
                    res.status(200).send({
                        fruta: frutaStored
                    })
                }
                //mas condiciones...
            }
        })
    }
})
module.exports = router;