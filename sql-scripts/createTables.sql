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