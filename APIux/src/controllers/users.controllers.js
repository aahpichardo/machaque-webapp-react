import { generateToken } from '../middlewares/generateToken.js';
import { getConnection } from "../../database/connection.js";
import crypto from 'crypto';
import { encryptPhoneNumber, decryptPhoneNumber, hashPassword, verifyPassword, encryptMessage, decryptMessage } from '../middlewares/encryption.js';

// CONSULTA DE USUARIOS PARA GENERAR EL TOKEN DE ACCESO
export const checkUserInDatabase = async (email, password) => {
  try {
    const connection = await getConnection();

    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (rows.length > 0) {
      const user = rows[0];
      const passwordMatch = await verifyPassword(password, user.password_hash, user.salt);

      if (passwordMatch) {
        // Decrypt the phone number
        let decryptedPhoneNumber;
        try {
          decryptedPhoneNumber = decryptPhoneNumber(user.phone_number);
        } catch (error) {
          return {
            status: 500,
            message: 'Error decrypting phone number'
          };
        }

        return {
          status: 200,
          message: 'Usuario autenticado exitosamente',
          user: {
            ...user,
            email: email, // Include the original email
            phone_number: decryptedPhoneNumber // Include the decrypted phone number
          }
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
// Helper functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);
const validatePassword = (password) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/.test(password);

export const postNewUser = async (req, res) => {
  const { user_name, user_last_name, email, password, phone_number, created_at, last_login, fk_user_role, fk_endorsement_id, user_status } = req.body;

  if (!user_name || !email || !password || !phone_number) {
    return res.status(400).json({ message: "Nombre de usuario, correo electrónico, contraseña y número de celular son requeridos" });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Correo electrónico no válido" });
  }

  if (!validatePhoneNumber(phone_number)) {
    return res.status(400).json({ message: "Número de celular no válido" });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ message: "La contraseña debe tener mínimo 10 caracteres, contener al menos un número, caracteres especial y letras" });
  }

  try {
    const connection = await getConnection();

    // Verificar si el correo electrónico ya existe
    const [existingUser] = await connection.execute(
      'SELECT user_id FROM users WHERE email = ?',
      [email]
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso.' });
    }

    // Generar salt y hashear la contraseña
    const salt = crypto.randomBytes(16).toString('hex');
    const password_hash = await hashPassword(password, salt);

    // Encrypt sensitive data using RSA
    const encryptedPhoneNumber = encryptPhoneNumber(phone_number);

    await connection.execute(
      'INSERT INTO users (user_name, user_last_name, email, password_hash, salt, phone_number, created_at, last_login, fk_user_role, fk_endorsement_id, user_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [user_name, user_last_name, email, password_hash, salt, encryptedPhoneNumber, created_at, last_login, fk_user_role, fk_endorsement_id, user_status]
    );

    return res.status(200).json({ message: 'Usuario creado exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

// POST RECUPERAR CONTRASEÑA
export const postRecoverPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'El correo electrónico es requerido.' });
    }

    const connection = await getConnection();

    const [userRows] = await connection.execute(
      'SELECT user_id FROM users WHERE email = ?',
      [email]
    );

    if (userRows.length > 0) {
      const user = userRows[0];

      // Generar código aleatorio
      const randomCode = Math.floor(100000 + Math.random() * 900000);

      // Hashear el código de recuperación
      const salt = crypto.randomBytes(16).toString('hex');
      const hashedCode = await hashPassword(randomCode.toString(), salt);

      // Tiempo de expiración del código de recuperación 5 minutos
      const expireDate = new Date();
      expireDate.setMinutes(expireDate.getMinutes() + 5);

      // Verificar si ya existe un código de recuperación para el usuario
      const [recoveryRows] = await connection.execute(
        'SELECT * FROM recovery_code WHERE fk_user_id = ?',
        [user.user_id]
      );

      if (recoveryRows.length > 0) {
        // Actualizar el código de recuperación existente
        await connection.execute(
          'UPDATE recovery_code SET code_number = ?, salt = ?, expire_date = ? WHERE fk_user_id = ?',
          [hashedCode, salt, expireDate, user.user_id]
        );
      } else {
        // Insertar un nuevo código de recuperación
        await connection.execute(
          'INSERT INTO recovery_code (code_number, salt, fk_user_id, expire_date) VALUES (?, ?, ?, ?)',
          [hashedCode, salt, user.user_id, expireDate]
        );
      }

      return res.status(200).json({ message: 'Código enviado al correo ' + email + '. Expira en: ' + expireDate, code: randomCode });
    } else {
      return res.status(404).json({ message: 'No existe una cuenta con el correo que ingresaste.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};

// POST VALIDAR CÓDIGO DE RECUPERACIÓN
export const postValidateCode = async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ message: 'El correo electrónico y el código son requeridos.' });
    }

    const connection = await getConnection();

    const [recoveryRows] = await connection.execute(
      'SELECT code_number, salt, expire_date, users.user_id FROM recovery_code INNER JOIN users ON recovery_code.fk_user_id = users.user_id WHERE email = ?',
      [email]
    );

    if (recoveryRows.length > 0) {
      const recoveryCode = recoveryRows[0];

      const codeMatch = await verifyPassword(code, recoveryCode.code_number, recoveryCode.salt);

      if (codeMatch) {
        const currentDate = new Date();

        if (currentDate < recoveryCode.expire_date) {
          const token = generateToken({ user_id: recoveryCode.user_id });
          return res.status(200).json({ message: 'Código de recuperación válido.', code: true, token });
        } else {
          return res.status(401).json({ message: 'El código de recuperación ha expirado.', code: false });
        }
      } else {
        return res.status(401).json({ message: 'Código de recuperación incorrecto.', code: false });
      }
    } else {
      return res.status(404).json({ message: 'No existe un código de recuperación para el correo que ingresaste.', code: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};

// PUT CAMBIAR CONTRASEÑA
export const putChangePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Correo electrónico y contraseña son requeridos.' });
    }

    const connection = await getConnection();

    // Verificar si el correo electrónico existe
    const [rows] = await connection.execute(
      'SELECT user_id FROM users WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No existe una cuenta con el correo que ingresaste.' });
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const password_hash = await hashPassword(password, salt);

    await connection.execute(
      'UPDATE users SET password_hash = ?, salt = ? WHERE email = ?',
      [password_hash, salt, email]
    );

    return res.status(200).json({ message: 'Contraseña actualizada exitosamente.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};

// POST ENVIAR MENSAJE
export const postSendMessage = async (req, res) => {
  try {
    const { sender_id, receiver_id, message } = req.body;

    if (!sender_id || !receiver_id || !message) {
      return res.status(400).json({ message: 'El remitente, el destinatario y el mensaje son requeridos.' });
    }

    const connection = await getConnection();

    // Encrypt message using Blowfish
    const encryptedMessage = encryptMessage(message);

    await connection.execute(
      'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)',
      [sender_id, receiver_id, encryptedMessage]
    );

    return res.status(200).json({ message: 'Mensaje enviado exitosamente.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};

// GET RECIBIR MENSAJES
export const getMessages = async (req, res) => {
  try {
    const { user_id } = req.params;

    if (!user_id) {
      return res.status(400).json({ message: 'El ID del usuario es requerido.' });
    }

    const connection = await getConnection();

    const [messages] = await connection.execute(
      'SELECT * FROM messages WHERE receiver_id = ?',
      [user_id]
    );

    // Decrypt messages using Blowfish
    const decryptedMessages = messages.map(msg => {
      const decryptedMessage = decryptMessage(msg.message);
      return { ...msg, message: decryptedMessage };
    });

    return res.status(200).json(decryptedMessages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
};