const mongoose = require('mongoose');

// CREAR ESQUEMA
const zipSchema = new mongoose.Schema({
    codigo_zip: {
        required: true,
        type: Number
    },
    condado: {
        required: true,
        type: String
    },
    poblacion: {
        required: true,
        type: Number,
    }
})

// COMPILAR Y EXPORTAR ESQUEMA
module.exports = mongoose.model('Zip_registro', zipSchema)