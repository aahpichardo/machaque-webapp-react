import fs from 'fs';
import path from 'path';
import crypto, { publicEncrypt, privateDecrypt } from 'crypto';
import { RSA_PRIVATE_KEY, RSA_PUBLIC_KEY, SECRET_KEY } from '../config.js';
import { fileURLToPath } from 'url';
import CryptoJS from 'crypto-js';

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
  const key = CryptoJS.enc.Hex.parse(SECRET_KEY);
  const iv = CryptoJS.lib.WordArray.random(8); // Blowfish uses an 8-byte IV
  const encrypted = CryptoJS.Blowfish.encrypt(message, key, { iv: iv });
  return iv.toString() + ':' + encrypted.toString();
};

export const decryptMessage = (encryptedMessage) => {
  const textParts = encryptedMessage.split(':');
  const iv = CryptoJS.enc.Hex.parse(textParts.shift());
  const encryptedText = textParts.join(':');
  const key = CryptoJS.enc.Hex.parse(SECRET_KEY);
  const decrypted = CryptoJS.Blowfish.decrypt(encryptedText, key, { iv: iv });
  return decrypted.toString(CryptoJS.enc.Utf8);
};