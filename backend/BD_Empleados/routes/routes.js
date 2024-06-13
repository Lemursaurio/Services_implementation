const express = require('express');
const Model = require('../models/model');

const router = express.Router()

module.exports = router;

// GUARDAR EMPLEADO
router.get('/addEmpleado', (req, res) => {
    console.log(req.query.nombre);

    const em_nombre = req.query.nombre;
    const em_apellido = req.query.apellido;
    const em_edad = req.query.edad;
    const em_departamento = req.query.departamento;
    const em_correo = req.query.correo;

    // GUARDAR DATOS EN MONGODB
    const datos_empleado = new Model({
        nombre: em_nombre,
        apellido: em_apellido,
        edad: em_edad,
        departamento: em_departamento,
        correo: em_correo,
    });
    try {
        const datosAGuardar = datos_empleado.save();
        res.status(200).json(datosAGuardar);
    }
    catch (error) {
        res.status(400).json({mensaje: error.message});
    }
});

router.get('/getEmpleados', async (req, res) => {
    try {
        const empleados = await Model.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});
