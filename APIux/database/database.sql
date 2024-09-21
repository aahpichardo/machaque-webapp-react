create database machaquedb;

use machaquedb;

 drop table users;
 
 -- Roles
CREATE TABLE roles(
id INT PRIMARY KEY,
role_name varchar(50),
description varchar(50)
);

INSERT INTO roles(id, role_name, description)
VALUES (1, "Usuario", "Usuario que no es restaurante.");
 

-- Tabla de usuarios (usuarios normales)
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_last_name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    created_at DATETIME,
    last_login DATETIME,
    user_role INT, -- Aquí se hace referencia a roles.id
    user_status TINYINT, -- 1 para activo, 0 para inactivo
    FOREIGN KEY (user_role) REFERENCES roles(id)
);

INSERT INTO users (id, user_name, user_last_name, email, password_hash, created_at, last_login, user_role, user_status)
VALUES (1,"Brandon", "Cochon", "brandsexxx@gmail.com", "asdf1234!", "2023-03-15 08:30:00", "2024-09-21 17:45:00", "1", "1");

-- Token de recuperación para cuando se les olvide la contraseña a los usuarios pen
CREATE TABLE recovery_token(
id INT PRIMARY KEY AUTO_INCREMENT,
user_id INT,
token VARCHAR(255),
expire_date DATETIME,
FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO recovery_token(id, user_id, token, expire_date)
VALUES(1, 1, "t0k3nd33j3mpl0", "2024-09-21 17:45:00");

select * from recovery_token;