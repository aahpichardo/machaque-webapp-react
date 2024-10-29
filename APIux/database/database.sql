DROP DATABASE IF EXISTS machaquedb;
CREATE DATABASE machaquedb;

USE machaquedb;

-- Roles
CREATE TABLE roles (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50),
    description VARCHAR(250)
);

INSERT INTO roles (role_id, role_name, description)
VALUES 
    (1, 'Comensal', 'Usuario que no pertenece a ningún restaurante.'),
    (2, 'Vendedor', 'Usuario o empresa que vende.');

-- Aviso de privacidad
CREATE TABLE endorsement_privacy_notice (
    endorsement_id INT PRIMARY KEY,
    options VARCHAR(3)
);

INSERT INTO endorsement_privacy_notice (endorsement_id, options)
VALUES
    (0, 'NO'),
    (1, 'YES');

-- Tabla de usuarios (usuarios normales)
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_last_name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    salt VARCHAR(255), -- Agregar columna para almacenar el salt
    phone_number VARCHAR(510), -- Agregar columna para el número de celular
    created_at DATETIME,
    last_login DATETIME,
    fk_user_role INT, -- Aquí se hace referencia a roles.role_id
    fk_endorsement_id INT,
    user_status TINYINT, -- 1 para activo, 0 para inactivo
    FOREIGN KEY (fk_user_role) REFERENCES roles(role_id),
    FOREIGN KEY (fk_endorsement_id) REFERENCES endorsement_privacy_notice(endorsement_id)
);

-- Token de recuperación para cuando se les olvide la contraseña a los usuarios
CREATE TABLE recovery_code (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_user_id INT,
    code_number VARCHAR(255),
    salt VARCHAR(255), -- Agregar columna para almacenar el salt del código de recuperación
    expire_date DATETIME,
    FOREIGN KEY (fk_user_id) REFERENCES users(user_id)
);

-- Tabla de mensajes
CREATE TABLE messages (
    message_id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT,
    receiver_id INT,
    message LONGTEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);