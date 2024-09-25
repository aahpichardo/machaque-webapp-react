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

// POST REGISTRO DE USUARIO
export const postNewUser = async (req, res) => {
  try {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      'INSERT INTO USERS (user_name, user_last_name, email, password_hash, created_at, last_login, user_role, user_status, privacy_notice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user_name, user_last_name, email, password_hash, created_at, last_login, user_role, user_status, privacy_notice]
    );
    return res.status(200).json({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// POST CERRAR SESION

// POST RECUPEAR CONTRASEÑA
// Y cuando vaya a ser lo de recuperar contraseña, que busque el email sea válido, si es, que genere un código aleatorio con un random como de 6 carácteres, luego que diga que se lo mandaron al correo, lo introduzca, lo vuelva a validar y ya dejé cambiar la contraseña

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