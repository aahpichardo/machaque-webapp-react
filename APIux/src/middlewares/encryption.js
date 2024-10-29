import fs from 'fs';
import path from 'path';
import crypto, { publicEncrypt, privateDecrypt } from 'crypto';
import { RSA_PRIVATE_KEY, RSA_PUBLIC_KEY, SECRET_KEY } from '../config.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicKey = fs.readFileSync(path.resolve(__dirname, RSA_PUBLIC_KEY), 'utf8');
const privateKey = fs.readFileSync(path.resolve(__dirname, RSA_PRIVATE_KEY), 'utf8');

export const encryptPhoneNumber = (phoneNumber) => {
  try {
    const buffer = Buffer.from(phoneNumber, 'utf8');
    const encrypted = publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      buffer
    );
    return encrypted.toString('base64');
  } catch (error) {
    console.error('Error encrypting phone number:', error);
    throw error;
  }
};

export const decryptPhoneNumber = (encryptedPhoneNumber) => {
  try {
    const buffer = Buffer.from(encryptedPhoneNumber, 'base64');
    const decrypted = privateDecrypt(
      {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      buffer
    );
    return decrypted.toString('utf8');
  } catch (error) {
    console.error('Error decrypting phone number:', error);
    throw error;
  }
};

export const hashPassword = (password, salt) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('hex'));
    });
  });
};

export const verifyPassword = (password, hash, salt) => {
  return hashPassword(password, salt).then((hashedPassword) => hashedPassword === hash);
};

export const encryptMessage = (message) => {
  const cipher = crypto.createCipher('bf', SECRET_KEY);
  let encryptedMessage = cipher.update(message, 'utf8', 'hex');
  encryptedMessage += cipher.final('hex');
  return encryptedMessage;
};

export const decryptMessage = (encryptedMessage) => {
  const decipher = crypto.createDecipher('bf', SECRET_KEY);
  let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8');
  decryptedMessage += decipher.final('utf8');
  return decryptedMessage;
};