CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	gooey BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	status BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
