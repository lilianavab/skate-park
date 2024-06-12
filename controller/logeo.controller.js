import jwt from "jsonwebtoken";

import {listadoParticipantes, selectParticipante} from "../consultas.js";

export const ingresar = async (req, res) => {
  try {
    const { email, password } = req.body;                     
    console.log(email, password)
    const secretKey = process.env.SECRET_KEY;
    const skater = await selectParticipante(email, password);
    const token = jwt.sign(skater, secretKey, { expiresIn: "5m" });
     console.log(token)
    console.log("Se obtiene el Token exitosamente:", token);
    res.status(200).send(token);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      error: `Hubo un problema: ${error}`,
      code: 500,
    });
  }
};

export const verificarToken  = async (req, res) => {
  const { token } = req.query;
  //console.log("Se verifica el Token exitosamente:", token);
  const secretKey = process.env.SECRET_KEY;
  jwt.verify(token, secretKey, (err, skater) => {
    if (err) {
      res.status(500).send({
        error: `Hubo un problema:`,
        message: err.message,
        code: 500,
      });
    } else {
      res.render('perfil',  {skater} );
    }
  });
};