CREATE DATABASE meli_challenge_test;

use meli_challenge_test;

CREATE TABLE `Server`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(255) NOT NULL,
  `type` enum
('onprem','virtual') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY
(`id`),
  UNIQUE KEY `name`
(`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `Alert`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `server` int
(11) NOT NULL,
  `description` varchar
(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY
(`id`),
  KEY `server`
(`server`),
  CONSTRAINT `alert_ibfk_1` FOREIGN KEY
(`server`) REFERENCES `Server`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;

INSERT INTO Server
  (
  id,
  name
  , type, createdAt, updatedAt)
VALUES
  (1, 'Server1', 'onprem', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (2, 'Server2', 'virtual', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (3, 'Server3', 'onprem', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (4, 'Server4', 'onprem', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (5, 'Server5', 'virtual', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (6, 'Server6', 'onprem', '2020-05-19 21:15:39', '2020-05-19 21:15:39'),
  (7, 'Server7', 'virtual', '2020-05-19 21:15:39', '2020-05-19 21:15:39');

use meli_challenge;