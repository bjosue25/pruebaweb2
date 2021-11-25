const { model, Schema } = require('mongoose');

const gasolinera = new Schema({
    Placa: {type: String},
    Tipo: {type: String},
    Galones: {type: Number},
    Costo: {type: Number},
    Total: {type: String},
    Hora: {type: Number},
    tipodenovedad: {type: String},
});
  
const Gasolinera = model('Gasolinera', gasolinera);

module.exports = Gasolinera;
