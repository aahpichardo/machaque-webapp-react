import bcrypt from 'bcrypt';
import { getConnection } from "../../database/connection.js";

// CONSULTA DE USUARIOS PARA GENERAR EL TOKEN DE ACCESO
export const checkUserInDatabase = async (email, password) => {
  try {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      'SELECT * FROM USERS WHERE EMAIL = ?',
      [email]
    );

    if (rows.length > 0) {
      const user = rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password_hash);

      if (passwordMatch) {
        return {
          status: 200,
          message: 'Usuario autenticado exitosamente',
          user: user
        };
      } else {
        return {
          status: 401,
          message: 'Contraseña incorrecta'
        };
      }
    } else {
      return {
        status: 404,
        message: 'Usuario no encontrado'
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: 'Error en la base de datos'
    };
  }
};

// POST REGISTRO DE UN NUEVO USUARIO
export const postNewUser = async (req, res) => {
  const { user_name, user_last_name, email, password, created_at, last_login, fk_user_role, fk_endorsement_id, user_status } = req.body;

  if (!user_name || !email || !password) {
    return res.status(400).json({ message: "Nombre de usuario, correo electrónico y contraseña son requeridos" });
  }

  try {
    // Hashear la contraseña
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const connection = await getConnection();

    const [rows] = await connection.execute(
      'INSERT INTO USERS (user_name, user_last_name, email, password_hash, created_at, last_login, fk_user_role, fk_endorsement_id, user_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user_name, user_last_name, email, password_hash, created_at, last_login, fk_user_role, fk_endorsement_id, user_status]
    );

    return res.status(200).json({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// POST CERRAR SESION
export const postLogout = async (req, res) => {
  try {
    const { user_id} = req.body;

    const connection = await getConnection();

    const [rows] = await connection.execute(
      'UPDATE USERS SET user_status = 0 WHERE ID_USER = ?',
      [user_id]
    );

    return res.status(200).json({ message: 'Sesión cerrada exitosamente.' });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// POST RECUPEAR CONTRASEÑA
// Y cuando vaya a ser lo de recuperar contraseña, que busque el email sea válido, si es, que genere un código aleatorio con un random como de 6 carácteres, luego que diga que se lo mandaron al correo, lo introduzca, lo vuelva a validar y ya dejé cambiar la contraseña

// GET DATOS DEL USUARIO POR ID DE USUARIO ---- ejemplo
/*export const postDataUser = async (req, res) => {
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
}; */