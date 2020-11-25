const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


router.get('/getdenuncia', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Denuncia ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });

router.post('/nueva',(req,res)=>{

const {descripcion_denuncia,correoElectronico,telefono,id_Usuario} = req.body;

let denuncia = [descripcion_denuncia,correoElectronico,telefono,id_Usuario];

let nuevaDenuncia = `INSERT INTO Denuncia(descripcion_denuncia,correoElectronico,telefono,id_Usuario)
                  VALUES(?,?,?,?)`;
mysqlConnection.query(nuevaDenuncia, denuncia, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Denuncia registrada`, })
  });
}); 

module.exports = router;
