//const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");


const puerto = 3000;
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public_html"));
app.use(express.static("public"));
app.use(morgan("dev"));
app.set("json spaces", 2);


//rutas
app.use(require("./routes/web"));



//Inicializacion del servidor
app.listen(puerto, () => {
  console.log(`Servidor iniciado en el puerto ${puerto}`);
});
