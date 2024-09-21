create database machaque;

create table usuarios (
    ID_USUARIO int not null auto_increment,
    CORREO varchar(255) not null,
    primary key (ID_USUARIO)
);