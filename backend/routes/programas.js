const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');


router.get('/', (req, res) => {
     
  mysqlConnection.query('SELECT * FROM Programas ', (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });


router.post('/nuevo-programa',(req,res)=>{

const {nombre_Programa,descripcion_Programa,link_Programa, id_Usuario} = req.body;

let programa = [nombre_Programa,descripcion_Programa,link_Programa, id_Usuario];

let nuevoPrograma = `INSERT INTO Programas(nombre_Programa,descripcion_Programa,link_Programa,id_Usuario)
                  VALUES(?,?,?,?)`;
mysqlConnection.query(nuevoPrograma, programa, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  res.json({ message:`Programa registrado`, })
  });
}); 


router.put('/prog/:id', (req, res) => {
  const {nombre_Programa,descripcion_Programa,link_Programa, id_Usuario} = req.body;
  const { id } = req.params;
  mysqlConnection.query(`UPDATE Programas SET  nombre_Programa = ?,descripcion_Programa = ?,
  link_Programa = ?,id_Usuario = ? WHERE id_Programa = ?`, 
  [nombre_Programa,descripcion_Programa,link_Programa, id_Usuario,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Programa actualizado'});
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
