create database sap_2025_1;

use sap_2025_1;

create table usuarios(
    id int primary key auto_increment,
    nome varchar(100),
    email varchar(100)
)

create table livros(
    id int primary key auto_increment,
    titulo varchar(100),
    autor varchar(100),
    genero varchar(100),
    `status` varchar(100),
    usuario varchar(100)
)