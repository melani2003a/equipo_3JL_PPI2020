const express = require('express');
const router = express.Router();

const mysqlConnection = require('../db/db');

router.get('/usuario', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Usuario ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nuevo-registro',(req,res)=>{

const {rol_Usuario,nombre,apellidos,correoElectronico,contraseña} = req.body;

let usuario = [rol_Usuario,nombre,apellidos,correoElectronico,contraseña];

let nuevoRegistro = `INSERT INTO Usuario(rol_Usuario,nombre,apellidos,correoElectronico,contraseña)
                  VALUES(?,?,?,?,?)`;
mysqlConnection.query(nuevoRegistro, usuario, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Usuario registrado`, })
  });
}); 




module.exports = router;