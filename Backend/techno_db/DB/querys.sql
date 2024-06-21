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

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Dell XPS 13 9315',
    3263617,
    10,
    'CPU: Intel Core i5-1230U RAM: 8GB GPU: Intel Xe Graphics Pantalla: 13.4-pulgadas 1920 x 1200 IPS Almacenamiento: 256GB SSD Dimensiones: 11.63 x 7.85 x 0.55 pulgadas'
    );

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Razer Blade 14',
    1255992,
    10,
    'CPU: AMD Ryzen 9 5900HX RAM: 16GB GPU: Nvidia GeForce RTX 3080 Pantalla: 14-pulgadas QHD 165Hz refresh rate Almacenamiento: 1TB SSD Dimensiones: 12.59 x 8.66 x 0.66 pulgadas'
    );

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Asus ZenBook 14 Oled',
    1462999,
    10,
    'CPU: AMD Ryzen 5 7530U RAM: 8GB GPU: AMD Radeon graphics Pantalla: 14.0 pulgadas OLED Almacenamiento: 256GB SSD Dimensiones: 12.34 x 8.68 x 0.67 pulgadas'
    );

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Lenovo ThinkPad Z13',
    1689890,
    10,
    'CPU: AMD Ryzen 5 Pro 6650U RAM: 16GB GPU: Integrated AMD Radeon 660M Pantalla: 13.3-pulgadas IPS Almacenamiento: 512GB SSD Dimensiones: 11.59 x 7.85 x 0.55 pulgadas'
    );  

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Microsoft Surface Pro9',
    865495,
    10,
    'CPU: Intel Core i5 RAM: 8GB GPU: Built-in Pantalla: 13-pulgadas PixelSense Flow Almacenamiento: 128GB SSD Dimensiones: 11.3 x 8.2 x 0.37 pulgadas'
    ); 

INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'HP Spectre x360 13.5',
    2601000,
    10,
    'CPU: Intel Core i5 RAM: 8GB GPU: Built-in Pantalla: 13-pulgadas PixelSense Flow Almacenamiento: 128GB SSD Dimensiones: 11.3 x 8.2 x 0.37 pulgadas'
    ); 

DELETE FROM productos_db.notebook WHERE id =14;



INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Dell XPS 15 9520',
    303189649,
    10,
    'CPU: Intel Core i5-12500H RAM: 16GB GPU: Intel Iris Xe Pantalla: 15.6-pulgadas full HD Almacenamiento: 512GB SSD Dimensiones: 13.56 x 9.06 x 0.73 pulgadas'
    );

    INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Lenovo Yoga 9i Gen 8',
    234799900,
    10,
    'CPU: Intel Core i7-1360P RAM: 16GB GPU: Intel Iris Xe Pantalla: 14.0 pulgadas OLED Almacenamiento: 512GB SSD Dimensiones: 12.52 x 9.06 x 0.60 pulgadas'
    );

    INSERT INTO notebook (
    modelo,
    precio,
    cantidad,
    descripcion) 
    VALUES (
    'Lenovo - IdeaPad Duet 3 Chromebook',
    299000,
    10,
    'CPU: Snapdragon 7cG2 RAM: 4GB GPU: N/A Pantalla: 11-pulgadas 2000 x 1200 Almacenamiento: 128GB eMMC Dimensiones: 10.16 x 6.57 x 0.3 pulgadas'
    );