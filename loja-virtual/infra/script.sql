CREATE TABLE products (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
  image TEXT NOT NULL,
	price REAL NOT NULL,
	stars INTEGER DEFAULT 1
);

INSERT INTO products (name, image, price, stars) VALUES('Camera Fotografica Canon', 'images/p1.png', 1850.00, 3);
INSERT INTO products (name, image, price, stars) VALUES('Drone Star Plus', 'images/p1.png', 2350.00, 4);
INSERT INTO products (name, image, price, stars) VALUES('Webcam Microsoft', 'images/p9.png', 850.00, 5);
INSERT INTO products (name, image, price, stars) VALUES('Controle Play 3', 'images/p6.png', 300.00, 2);

UPDATE products SET image = 'images/p3.png' WHERE id = 2;

DROP TABLE IF EXISTS testemonial;

CREATE TABLE testemonial (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL UNIQUE,
	role TEXT NOT NULL,
  image TEXT NOT NULL,
	message TEXT NOT NULL	
);

INSERT INTO testemonial (name, role, image, message) VALUES ('Simão', 'Publicitario', 'images/client.jpg', 'Essa loja vitual é muito boa');
INSERT INTO testemonial (name, role, image, message) VALUES ('Arlindo', 'Bancario', 'images/client.jpg', 'Encontro tudo o que preciso');
INSERT INTO testemonial (name, role, image, message) VALUES ('Sandoval', 'Eletricista', 'images/client.jpg', 'Melhor e-commerce!');
