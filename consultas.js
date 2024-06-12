import pool from "./config/db.js";

export const listadoParticipantes = async () => {
  try {
    let sql = {
      text: "SELECT * FROM skaters",
    };
    const resp = await pool.query(sql);
    console.log(resp.rows);
    return resp.rows;
  } catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}
};

export const selectParticipante = async(email, password)=>{
  try {
    console.log(email, password);
    const sql = {
      text: `SELECT * FROM skaters WHERE email='${email}' and password='${password}'`,
    };
    const resp = await pool.query(sql);
    return resp.rows[0];
  } catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}
};

export const insertarParticipante = async (data) => {
  try {
    let sql = {
      text: `INSERT INTO skaters(email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6,'false') RETURNING *`,
      values: data
    };
    const resp = await pool.query(sql);
    console.log("Participante agregado con éxito");
    return resp.rows[0];
  } catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}
};

export const modificarParticipante = async(data)=>{
  try{
    let sql={
      text:`UPDATE skaters SET nombre=$1, password=$2, anos_experiencia=$3, especialidad=$4 WHERE email=$5 RETURNING *`,
      values:data
    }
    const resp = await pool.query(sql);
    return resp.rows[0];
  } catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}
};

export const borrarParticipante = async(id)=>{
  try{
    const sql={
      text: "DELETE FROM skaters WHERE id= $1",
      values: [id],
    };
   const resp= await pool.query(sql)
return resp.rows
} catch (error) {
  return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}
};

export const modificarEstadoParticipante = async(id, estado)=>{
  try{
    console.log(typeof(id))
    console.log(typeof(estado))
    let sql={
      text:`UPDATE skaters SET estado=${estado} WHERE id=${id} RETURNING *`,
    }
    console.log(estado)
    const resp = await pool.query(sql);
    return resp.rows[0];
  } catch (error) {
    return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
}

};