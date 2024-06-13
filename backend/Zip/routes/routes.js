const express = require('express');
const axios = require('axios');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;

// OBTENER ZIP ACTUAL
router.get('/getZip', (req, res) => {
    const zip = req.query.zip;

    // OBTENER DATOS DE API
    axios.get(`https://www.zipwise.com/webservices/zipinfo.php?key=ack8rxxvtmbdkkwe&zip=${zip}&format=json`) 
    .then(async response => { 

        // GUARDAR DATOS EN MONGODB
        const datos_zip = new Model({
            codigo_zip: response.data.results.zip,
            condado: response.data.results.county,
            poblacion: response.data.results.population,
        });

        console.log(datos_zip);
        try {
            const datosAGuardar = await datos_zip.save();
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
