import {listadoParticipantes} from "../consultas.js";

export const home = async (req, res) => {
  const skaters = await listadoParticipantes();
  res.render("home", {
    layout: "main",
    skaters: skaters,
  });
};

export const registro = async(req, res)=>{  
res.render("registro");
};

export const login = async(req, res)=>{
  res.render("login");
};

export const admin = async(req, res)=>{
  const skaters = await listadoParticipantes();
  res.render("admin", {skaters} );
};
