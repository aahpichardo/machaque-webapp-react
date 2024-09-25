drop database machaquedb;
create database machaquedb;

use machaquedb;
 
 -- Roles
CREATE TABLE roles(
role_id INT PRIMARY KEY,
role_name varchar(50),
description varchar(250)
);

INSERT INTO roles (role_id, role_name, description)
VALUES 
    (1, 'Comensal', 'Usuario que no pertenece a ningún restaurante.'),
    (2, 'Vendedor', 'Usuario o empresa que vende.'),
    (3, 'Administrador', 'Usuario que administra la página');
    
-- Aviso de privacidad
CREATE TABLE endorsement_privacy_notice(
	endorsement_id INT PRIMARY KEY,
    options VARCHAR(3)
);

INSERT INTO endorsement_privacy_notice(endorsement_id, options)
VALUES
	(0, 'NO'),
    (1, 'YES');
    
-- Tabla de usuarios (usuarios normales)
CREATE TABLE users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_last_name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    created_at DATETIME,
    last_login DATETIME,
    fk_user_role INT, -- Aquí se hace referencia a roles.role_id
    fk_endorsement_id INT,
    user_status TINYINT, -- 1 para activo, 0 para inactivo
    FOREIGN KEY (fk_user_role) REFERENCES roles(role_id),
    FOREIGN KEY (fk_endorsement_id) REFERENCES endorsement_privacy_notice(endorsement_id)
);

INSERT INTO users (user_id, user_name, user_last_name, email, password_hash, created_at, last_login, user_role, fk_endorsement_id, user_status)
VALUES 
    (1, 'Brandon', 'Chacón', 'brandon.chacon@gmail.com', '09pcicsd%Eq3duhigeie$0ad3', '2023-03-15 08:30:00', '2024-09-21 17:45:00', 3, 1, 1),
    (2, 'María', 'González', 'maria.gonzalez@gmail.com', '7936gdf$&/d', '2023-04-10 09:00:00', '2024-09-22 18:00:00', 2, 1, 0),
    (3, 'Carlos', 'López', 'carlos.lopez@gmail.com', 'asdf1234!', '2023-05-20 10:15:00', '2024-09-23 19:30:00', 1, 1, 1);

-- Token de recuperación para cuando se les olvide la contraseña a los usuarios
CREATE TABLE recovery_token(
id INT PRIMARY KEY AUTO_INCREMENT,
fk_user_id INT,
token VARCHAR(255),
expire_date DATETIME,
FOREIGN KEY (fk_user_id) REFERENCES users(user_id)
);

INSERT INTO recovery_token(id, fk_user_id, token, expire_date)
VALUES(1, 1, "t0k3nd33j3mpl0", "2024-09-21 17:45:00");