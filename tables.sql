 `gst_ressources`.CREATE DATABASE `gst_ressources` /*!40100 DEFAULT CHARACTER SET latin1 */;

DROP TABLE IF EXISTS `gst_ressources`.`acteurs`;
CREATE TABLE  `gst_ressources`.`acteurs` (
  `Id` varchar(30) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `Prenom` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `gst_ressources`.`ressources`;
CREATE TABLE  `gst_ressources`.`ressources` (
  `Id` varchar(30) NOT NULL,
  `IdAuteur` varchar(30) NOT NULL,
  `IdContributeur` varchar(30) NOT NULL,
  `Titre` varchar(200) NOT NULL,
  `Resume` varchar(1000) NOT NULL,
  `MotsCles` varchar(500) NOT NULL,
  `Chemin` varchar(100) NOT NULL,
  `Image` varchar(200) NOT NULL,
  `Etat` varchar(30) NOT NULL,
  `DateCreation` varchar(30) NOT NULL,
  `Domaine` varchar(30) NOT NULL,
  `Type` varchar(30) NOT NULL,
  `NbrVue` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `gst_ressources`.`cartable`;
CREATE TABLE  `gst_ressources`.`cartable` (
  `Id` varchar(30) NOT NULL
  `IdContributeur` varchar(30) NOT NULL
  `IdEtudiant` varchar(30) NOT NULL
  `IdsRessources` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `gst_ressources`.`comptes`;
CREATE TABLE  `gst_ressources`.`comptes` (
  `Id` varchar(30) NOT NULL,
  `Login` varchar(30) NOT NULL,
  `Passwd` varchar(30) NOT NULL,
  `DateDeCreation` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `gst_ressources`.`auteurs`;
CREATE TABLE  `gst_ressources`.`auteurs` (
  `Id` varchar(30) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `Prenom` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Biaugraphie` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

