// importo o express
const express = require('express');
const gameRouter=require("./router/gameRouter")
//  importar a continuacao das rotas de pets
//const petRoutes = require(

// executar o express
const app = express()

// usar o body parser
app.use(express.json())

// criar uma rota raiz
//app.use("/pets", petRoutes)
app.use("/games",gameRouter)
// exportar para usar o server.js
module.exports = app

