DROP DATABASE IF EXISTS kukkatietokanta;
CREATE DATABASE kukkatietokanta;
USE kukkatietokanta;
CREATE USER IF NOT EXISTS 'miikka@localhost' IDENTIFIED BY 'Tz068rs6';

CREATE TABLE kukka (
kukanTunniste INTEGER NOT NULL PRIMARY KEY,
nimi VARCHAR(11) NOT NULL,
viljelija VARCHAR(27) NOT NULL,
lukumaara INTEGER NOT NULL,
kasvupaikka VARCHAR(19) NOT NULL
);
GRANT ALL PRIVILEGES ON kukkatietokanta.* TO 'miikka@localhost';
INSERT INTO kukka VALUES(1, 'Herkkuorvokki', 'Oittaan orit', 200, 'auringon pinta');
INSERT INTO kukka VALUES(2, 'Seinäruusu', 'Bogard & Co', 15, 'Arcturus');