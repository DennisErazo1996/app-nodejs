const { Router } = require("express");
const router = Router();

const connection = require("../conection-data-base");

// routes

router.get("/api/contactos", function (req, res) {
  connection.query(
    'SELECT id, ROW_NUMBER() OVER(ORDER BY primer_nombre ASC) AS row, concat(primer_nombre, " ", segundo_nombre, " ", primer_apellido, " ", segundo_apellido) as nombre, celular, correo, direccion FROM contactos where deleted_at = 0',
    (error, results) => {
      if (error) {
        console.error("Error al ejecutar la consulta:", error);
        res.status(500).json({ error: "Error al ejecutar la consulta" });
        return;
      }
      res.json(results);
    }
  );
});

router.post("/guardar-contacto", (req, res) => {
  const primerNombre = req.body["primer-nombre"];
  const segundoNombre = req.body["segundo-nombre"];
  const primerApellido = req.body["primer-apellido"];
  const segundoApellido = req.body["segundo-apellido"];
  const correo = req.body["correo"];
  const direccion = req.body["direccion"];
  const celular = req.body["celular"];
  // Obtén los demás valores del formulario de la misma manera

  // Realiza las operaciones necesarias para guardar los datos en la base de datos utilizando la conexión establecida anteriormente

  // Ejemplo de inserción en la base de datos utilizando mysql
  connection.query(
    "INSERT INTO contactos (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, correo, direccion) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      celular,
      correo,
      direccion,
    ],
    (error, results) => {
      if (error) {
        console.error("Error al guardar los datos en la base de datos:", error);
        return;
      }
      console.log("Datos guardados correctamente en la base de datos");
    }
  );

  res.redirect("back");
});

router.post("/eliminar-contacto/:id", (req, res) => {
  const contactoId = req.params.id;

  connection.query(
    "UPDATE contactos set deleted_at = 1 where id = ?",
    [
      contactoId
    ],
    (error, results) => {
      if (error) {
        console.error("Error al eliminar los datos en la base de datos:", error);
        return;
      }
      console.log("Datos eliminados correctamente en la base de datos");
    }
  );

  res.redirect("back");
});

module.exports = router;
