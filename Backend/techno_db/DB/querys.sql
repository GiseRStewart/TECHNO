CREATE DATABASE productos_db;

USE productos_db;

CREATE TABLE notebook (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100),
    precio INT,
    cantidad INT, 
    descripcion TEXT
);
DROP TABLE notebook;


SHOW TABLES;
SELECT * FROM productos_db.notebook;

    INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Apple MacBook Air M2',
    2719900,
    10,
    'CPU: Apple M2 Chip RAM: 8GB GPU: Apple M2 8-Core Pantalla: 13.3-pulgadas Retina Almacenamiento: 256GB SSD Dimensiones: 11.97 x 8.36 x 0.63 pulgadas'
    );



