const express = require('express')
const morgan = require('morgan')

const app = express()
var frases = [];
app.use(morgan('tiny'))
app.set("view engine","jade");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  // Send JSON
  // res.send({ status: 'on' })
  res.render("index")
})

app.post("/guardado",function(req, res){
  console.log(req.body.frase)
  res.send("Datos recibidos")
  var f = req.body.frase
  console.log(f)
  frases.push(f)
  console.log()
})

app.get("/listado", function(req, res){
  res.send({
    frases
  })
})

module.exports = app
