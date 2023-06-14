//const bodyParser = require("body-parser");
const express = require("express");
const morgan =require("morgan");

// Datos de ejemplo (base de datos en memoria)
let contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];


const puerto = 3000;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//pp.use(express.static("public_html"));
app.use(morgan('dev'));
app.set('json spaces', 2);


 //rutas
 app.use(require('./routes/web'));

//Inicializacion del servidor
app.listen(puerto, () => {
    console.log(`Servidor iniciado en el puerto ${puerto}`);
});