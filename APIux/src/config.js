import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_SERVER = process.env.DB_SERVER;
export const DB_DATABASE = process.env.DB_DATABASE;
export const RSA_PRIVATE_KEY = process.env.RSA_PRIVATE_KEY;
export const RSA_PUBLIC_KEY = process.env.RSA_PUBLIC_KEY;
export const SECRET_KEY = process.env.SECRET_KEY;