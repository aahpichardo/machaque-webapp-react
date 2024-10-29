// testencrypt.js
import { encryptPhoneNumber, decryptPhoneNumber } from './src/middlewares/encryption.js';

const phoneNumber = '1234567890';

// Encrypt the phone number
const encryptedPhoneNumber = encryptPhoneNumber(phoneNumber);
console.log('Encrypted Phone Number:', encryptedPhoneNumber);

// Decrypt the phone number
const decryptedPhoneNumber = decryptPhoneNumber(encryptedPhoneNumber);
console.log('Decrypted Phone Number:', decryptedPhoneNumber);

