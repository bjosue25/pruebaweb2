
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const cron = require("node-cron");
const axios = require("axios").default;
const express = require("express")
const cors = require("cors");

const { MONGO_URI } = require("./config/index");
const { Gasolinera } = require("./models/gasolinera.model");

let { InsertarGasolinera } = require("./controllers/index");


const app = express();

PUERTO = 5050

app.use(express.json());



mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true }, 
      (err, res) => {
        if (err) return console.log("Hubo un error en la base de datos ", err);
        console.log("Conexión con la base de datos en mongooDB establecida");
      }
      );



async function cargarVariables() {
        InsertarGasolinera = await require('./controllers/gasolina.controller').InsertarGasolinera() ;            
      return InsertarGasolinera;
  }

cargarVariables();


app.post('/', (req,res)=>{    
      cargarVariables();
      res.status(200).send({
          mensaje:"se guardo ",
          respuesta: body
      });
  })

  app.get('/consulta', (req, res)=>{
      Gasolinera.find({},(error,docs)=>{
          res.send({
            
        
          })
      })     
  });
 
  
    app.listen(PUERTO, ()=>{
        console.log(`El servidor esta ejecutandose en el puerto ${PUERTO}`)
    })