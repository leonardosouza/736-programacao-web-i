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
