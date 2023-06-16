const mysql = require("mysql");

//conexion a la base de datos
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "app_contactos",
  });


  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a MySQL:', error);
      return;
    }
    console.log('Conexión exitosa a MySQL');
  });

  module.exports = connection;