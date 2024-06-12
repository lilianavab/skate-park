import express from "express";

import { home, login, registro, admin} from "../controller/ventanas.controller.js";
import { agregarParticipante, editarParticipante, eliminarParticipante, editarEstadoParticipante } from "../controller/usuarios.controller.js";
import { ingresar, verificarToken } from "../controller/logeo.controller.js";

const router = express.Router();

router.get('/', home);

//CRUD
router.get('/registro', registro);
router.post('/skaters', agregarParticipante);
router.put('/skaters', editarParticipante);
router.put('/skaters/status/:id', editarEstadoParticipante);
router.delete('/skaters/:id', eliminarParticipante);

//AUTENTIFICACION Y VALIDACION
router.get('/login', login);
router.post('/login', ingresar);
router.get('/perfil', verificarToken);
router.get('/admin', admin);

export default router