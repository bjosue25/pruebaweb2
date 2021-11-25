

const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require("../config");
const { Gasolinera } = require("../models/gasolinera.model");
const cron = require("node-cron");
const axios = require("axios").default;
const cors = require("cors");



const app = express();

PUERTO = 6050

app.use(express.json());



mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true } );


function  InsertarGasolinera(){

      cron.schedule("* * * * *",
      
async () =>{

      const html = await  axios.get("https://santiagomoreira3c.github.io/pagina")

      
    const $ = cheerio.load(html.data);

    const titulos=  $(".tr");

    let arregloGasolinera=[];
      
    titulos.each((index, element)=>{
      
      
      const Gasolinera = {
            
            Placa:  $(element).children('.td1').text().toString(),
            Tipo: $(element).children('.td2').text().toString(),
            Galones: $(element).children('.td3').text().toString(),
            Costo: $(element).children('.td4').text().toString(),
            Total: $(element).children('.td5').text().toString(),
            Hora: $(element).children('.td6').text().toString()
    }
    arregloGasolinera= [...arregloGasolinera, Gasolinera];
}) 
console.log(arregloGasolinera)

Votaciones.create(arregloGasolinera);

});
}
module.exports = {
      InsertarGasolinera,
}      

