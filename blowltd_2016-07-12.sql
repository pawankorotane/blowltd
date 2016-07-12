# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.42)
# Database: blowltd
# Generation Time: 2016-07-12 14:56:57 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table beauticians
# ------------------------------------------------------------

DROP TABLE IF EXISTS `beauticians`;

CREATE TABLE `beauticians` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `beauticians` WRITE;
/*!40000 ALTER TABLE `beauticians` DISABLE KEYS */;

INSERT INTO `beauticians` (`id`, `name`, `address`)
VALUES
	(1,'Beautician A','South Quay'),
	(2,'Beautician B','Canary Wharf'),
	(3,'Beautician C','Camden');

/*!40000 ALTER TABLE `beauticians` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table bookings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bookings`;

CREATE TABLE `bookings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `beautician_id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `day` date DEFAULT NULL,
  `startTime` varchar(10) DEFAULT NULL,
  `endTime` varchar(10) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;

INSERT INTO `bookings` (`id`, `beautician_id`, `username`, `day`, `startTime`, `endTime`, `description`)
VALUES
	(1,2,'dsaasddd','2016-07-12','1.00 AM','1.00 AM','sdsdsadsa'),
	(2,1,'dsaasddd','2016-07-12','1.00 AM','1.00 AM','sdsdsadsa'),
	(3,2,'How are you','2016-07-27','3.00 AM','3.00 AM','sadad'),
	(4,2,'How are you','2016-07-27','3.00 AM','3.00 AM','sadad'),
	(5,1,'sdsadsada','2016-07-12','2.00 AM','3.00 AM','sdsads');

/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
