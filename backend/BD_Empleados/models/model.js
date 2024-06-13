const mongoose = require('mongoose');

// CREAR ESQUEMA
const empleadosSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    apellido: {
        required: true,
        type: String
    },
    edad: {
        required: true,
        type: String,
    },
    departamento: {
        required: true,
        type: String
    },
    correo: {
        required: true,
        type: String
    }
})

// COMPILAR Y EXPORTAR ESQUEMA
module.exports = mongoose.model('Empleados_registro', empleadosSchema)