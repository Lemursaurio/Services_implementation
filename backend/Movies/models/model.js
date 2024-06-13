const mongoose = require('mongoose');

// CREAR ESQUEMA
const movieSchema = new mongoose.Schema({
    titulo: {
        required: true,
        type: String
    },
    fecha_lanzamiento: {
        required: true,
        type: String
    },
    genero: {
        required: true,
        type: String,
    },
    director: {
        required: true,
        type: String
    },
    actores: {
        required: true,
        type: String
    }
})

// COMPILAR Y EXPORTAR ESQUEMA
module.exports = mongoose.model('Movie_registro', movieSchema)