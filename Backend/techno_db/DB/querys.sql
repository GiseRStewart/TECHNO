CREATE DATABASE productos_db;

USE productos_db;

CREATE TABLE notebook (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100),
    precio INT,
    cantidad INT, 
    descripcion VARCHAR(100)
);

SHOW TABLES;
SELECT * FROM productos_db.notebook;

