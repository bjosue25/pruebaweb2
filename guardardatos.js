const mongoose  = require("mongoose")
const { Gasolinera } = require("./models")

const { MONGO_URI } = require("./config")

mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
    

let Datosnew= [{
    Placa: "MBA-3040",
    Tipo: "Extras",
    Galones: "2",
    Costo: "7",
    Total: "8",
    Hora: 12,
    tipodenovedad:"sin novedad",
  
                },
              
            ];
            
            console.log(Datosnew)

            async function creargasolina(data){
                Gasolinera.create(data);
            }
            async function main(){
                try{
                    await creargasolina(Datosnew);
                }catch(err){console.log(err)

                }
            }
            main();