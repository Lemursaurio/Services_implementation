const express = require('express');
const axios = require('axios');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;

// OBTENER CLIMA ACTUAL
router.get('/getClima', (req, res) => {

    // OBTENER DATOS DE API
    axios.get('http://api.weatherunlocked.com/api/current/-12.04,-77.02?app_id=8b38a972&app_key=2b3fa3cec30f4f29f69376c1114f95c1') 
    .then(async response => { 
        
        // GUARDAR DATOS EN MONGODB
        const datos_clima = new Model({
            temperatura: response.data.temp_c,
            tipo_clima: response.data.wx_desc,
            hora: Date()
        });

        console.log(datos_clima);
        try {
            const datosAGuardar = await datos_clima.save();
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

