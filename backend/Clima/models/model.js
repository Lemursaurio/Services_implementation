const mongoose = require('mongoose');

// CREAR ESQUEMA
const climaSchema = new mongoose.Schema({
    temperatura: {
        required: true,
        type: Number
    },
    tipo_clima: {
        required: true,
        type: String
    },
    hora: {
        required: true,
        type: String,
    }
})

// COMPILAR Y EXPORTAR ESQUEMA
module.exports = mongoose.model('Clima_registro', climaSchema)