const mongoose = require('mongoose');


const gasolineraSchema = new mongoose.Schema({
    Placa: {type: String},
    Tipo: {type: String},
    Galones: {type: Number},
    Costo: {type: Number},
    Total: {type: String},
    Hora: {type: Number},
    tipodenovedad: {type: String},
});
  
module.exports=mongoose.model("Gasolinera", gasolineraSchema)



