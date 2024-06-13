const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const cors = require('cors')

const app = express()

// PARA PERMISOS
app.use(cors())
// RECIBIR INFO EN JSON
app.use(express.json());

// CONEXIÓN A MONGODB
app.listen(3002, () => {
    console.log(`Server Started at ${3002}`)

mongoose.connect('mongodb://localhost:27017/Registros');
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// CONFIGURACIÓN DE RUTAS
app.use('/movies', routes);
})