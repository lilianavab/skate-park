import {
    insertarParticipante, 
    modificarParticipante, 
    borrarParticipante, 
    modificarEstadoParticipante 
} from "../consultas.js";

export const agregarParticipante = async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body;
  const { foto } = req.files;
  const { name } = foto;
  const titulo = `${name}`;
  const uploadPath = `/uploads/${titulo}`;
  const data = [email, nombre, password, anos_experiencia, especialidad, uploadPath];
  console.log(data);
  foto.mv(`public${uploadPath}`, async (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    try {
      await  insertarParticipante(data);
      res.status(201).redirect("/login");
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
};

export const editarParticipante = async (req, res) => {
  try {
    const { email, nombre, password, anos_experiencia, especialidad } = req.body;
    const data = [nombre, password, anos_experiencia, especialidad, email];
    await modificarParticipante(data);
    res.send("Cambios ejecutado exitosamente");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const eliminarParticipante = async (req, res) => {
  try {
    const { id } = req.params;
    await borrarParticipante(id);
    res.send("Participante eliminado exitosamente");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const editarEstadoParticipante = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;
    await modificarEstadoParticipante (id, estado);
    res.send("Cambios ejecutado exitosamente");
  } catch (error) {
    res.status(500).send(error.message);
  }
};