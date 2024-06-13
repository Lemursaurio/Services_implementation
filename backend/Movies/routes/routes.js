const express = require('express');
const axios = require('axios');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;

// OBTENER PELÍCULA ACTUAL
router.get('/getMovie', (req, res) => {
    const title = req.query.title;
    // OBTENER DATOS DE API
    axios.get(`http://www.omdbapi.com/?apikey=662c5157&t=${title}`) 
    .then(async response => { 

        // GUARDAR DATOS EN MONGODB
        const datos_movie = new Model({
            titulo: response.data.Title,
            fecha_lanzamiento: response.data.Released,
            genero: response.data.Genre,
            director: response.data.Director,
            actores: response.data.Actors,
        });

        console.log(datos_movie);
        try {
            const datosAGuardar = await datos_movie.save();
            res.status(200).json(datosAGuardar);
        }
        catch (error) {
            res.status(400).json({mensaje: error.message});
        }

    }) 
    .catch(error => { 
        console.error(error); 
    });  
});

