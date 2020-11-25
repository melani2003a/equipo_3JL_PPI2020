const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bff64jyu87nvq5b78klw-mysql.services.clever-cloud.com',
  user: 'ushlwsxlgfk90j8a',
  password: 'ICKnW4ecqLB6gTiGvEkx',
  database:'bff64jyu87nvq5b78klw',
  multipleStatements: true
});



mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});



module.exports = mysqlConnection;