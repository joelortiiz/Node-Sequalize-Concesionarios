
const express = require('express')
const sequelize = require("./bd/bd");


require('./bd/associations')

const app =  express();

const bodyParse = require('body-parser')

app.use(express.json())
app.use(bodyParse.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("conectados")
})

const router = require("./routes/v1/appRoutes.js")

app.use("/", router)
app.use("/", (req,res) => {
  res.send("conn")
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
  console.log(`Servidor escuchando en puerto  ${PORT}`)

  sequelize.sync({force: true})
  .then(() => console.log("Conexión a la base de datos concesionarios"))
  .then(() => console.log("Tablas sincronizadas"))
  .catch((error)=> console.log("Error: "+error))

})

