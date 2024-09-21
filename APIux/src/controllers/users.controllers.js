import { getConnection } from "../../database/connection.js";

// CONSULTA DE USUARIOS PARA GENERAR EL TOKEN DE ACCESO
export const checkUserInDatabase = async (id_usuario, correo) => {
  try {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      'SELECT * FROM USUARIOS WHERE ID_USUARIO = ? AND CORREO = ?',
      [id_usuario, correo]
    );

    if (rows.length > 0) {
      return rows[0]; // Devuelve el primer usuario que coincida
    } else {
      return null; // No se encontró ningún usuario que coincida
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

// GET DATOS DEL USUARIO POR ID DE USUARIO
export const postDataUser = async (req, res) => {
  try {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      'SELECT * FROM USUARIOS WHERE ID_USUARIO = ?',
      [1]
    );

    return res.json(rows);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};