const { Router } = require('express');

const router = Router();

const {Gasolinera} = require('./models/index')

router.get('/consulta',(req, res )=>{ 
    Gasolinera.find({},{},
    (err, datos)=>{
    res.send({
             datos
            })
    })     
});
module.exports= router;