CREATE DATABASE  IF NOT EXISTS `arduino` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `arduino`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: arduino
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bpm`
--

DROP TABLE IF EXISTS `bpm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bpm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hora` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `batimento` int NOT NULL,
  `device` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bpm`
--

LOCK TABLES `bpm` WRITE;
/*!40000 ALTER TABLE `bpm` DISABLE KEYS */;
INSERT INTO `bpm` VALUES (6,'2024-10-29 11:01:19',150,1),(7,'2024-10-29 11:06:32',150,1),(8,'2024-10-29 11:06:36',150,1),(9,'2024-10-29 11:06:52',150,1),(10,'2024-10-29 11:07:12',150,1),(11,'2024-10-29 11:07:39',150,1),(12,'2024-10-29 11:07:42',0,1),(13,'2024-10-29 11:08:21',150,1),(14,'2024-10-29 11:08:25',58,1),(15,'2024-10-29 11:08:26',60,1),(16,'2024-10-29 11:08:26',61,1),(17,'2024-10-29 11:08:27',64,1),(18,'2024-10-29 11:08:31',94,1),(19,'2024-10-29 11:08:31',97,1),(20,'2024-10-29 11:08:33',82,1),(21,'2024-10-29 11:08:34',78,1),(22,'2024-10-29 11:08:36',70,1),(23,'2024-10-29 11:08:36',69,1),(24,'2024-10-29 11:08:40',42,1),(25,'2024-10-29 11:08:41',43,1),(26,'2024-10-29 11:08:42',46,1),(27,'2024-10-29 11:08:42',51,1),(28,'2024-10-29 11:08:44',51,1),(29,'2024-10-29 11:08:44',53,1),(30,'2024-10-29 11:08:52',48,1),(31,'2024-10-29 11:08:55',44,1),(32,'2024-10-29 11:09:00',209,1),(33,'2024-10-29 11:09:01',203,1),(34,'2024-10-29 11:09:01',205,1),(35,'2024-10-29 11:09:03',125,1),(36,'2024-10-29 11:09:04',103,1),(37,'2024-10-29 11:09:28',113,1),(38,'2024-10-29 11:09:30',95,1),(39,'2024-10-29 11:09:32',78,1),(40,'2024-10-29 11:09:33',72,1),(41,'2024-10-29 11:09:35',58,1),(42,'2024-10-29 11:09:37',53,1),(43,'2024-10-29 11:09:38',50,1),(44,'2024-10-29 11:09:39',50,1),(45,'2024-10-29 11:09:39',50,1),(46,'2024-10-29 11:09:39',52,1),(47,'2024-10-29 11:09:40',52,1),(48,'2024-10-29 11:09:40',58,1),(49,'2024-10-29 11:09:41',67,1),(50,'2024-10-29 11:09:41',71,1),(51,'2024-10-29 11:09:42',94,1),(52,'2024-10-29 11:09:42',111,1),(53,'2024-10-29 11:09:45',88,1),(54,'2024-10-29 11:09:46',79,1),(55,'2024-10-29 11:09:50',87,1),(56,'2024-10-29 11:09:51',83,1),(57,'2024-10-29 11:09:52',84,1),(58,'2024-10-29 11:09:53',87,1),(59,'2024-10-29 11:09:53',93,1),(60,'2024-10-29 11:09:56',140,1),(61,'2024-10-29 11:09:57',146,1),(62,'2024-10-29 11:09:58',128,1),(63,'2024-10-29 11:09:58',124,1),(64,'2024-10-29 11:10:02',98,1),(65,'2024-10-29 11:11:13',50,1),(66,'2024-10-29 11:11:14',50,1),(67,'2024-10-29 11:11:14',53,1),(68,'2024-10-29 11:11:16',50,1),(69,'2024-10-29 11:11:17',50,1),(70,'2024-10-29 11:11:18',51,1),(71,'2024-10-29 11:11:19',54,1),(72,'2024-10-29 11:11:20',56,1),(73,'2024-10-29 11:11:20',60,1),(74,'2024-10-29 11:11:20',66,1),(75,'2024-10-29 11:11:21',72,1),(76,'2024-10-29 11:11:21',80,1),(77,'2024-10-29 11:11:21',82,1),(78,'2024-10-29 11:11:22',107,1),(79,'2024-10-29 11:11:23',127,1),(80,'2024-10-29 11:11:23',150,1),(81,'2024-10-29 11:11:23',163,1),(82,'2024-10-29 11:11:23',188,1),(83,'2024-10-29 11:11:23',205,1),(84,'2024-10-29 11:11:24',188,1),(85,'2024-10-29 11:11:24',192,1),(86,'2024-10-29 11:11:27',112,1),(87,'2024-10-29 11:11:28',93,1),(88,'2024-10-29 11:11:35',70,1),(89,'2024-10-29 11:11:36',71,1),(90,'2024-10-29 11:11:37',64,1),(91,'2024-10-29 11:11:48',47,1),(92,'2024-10-29 11:11:57',83,1),(93,'2024-10-29 11:11:58',75,1),(94,'2024-10-29 11:11:59',73,1),(95,'2024-10-29 11:12:28',60,1),(96,'2024-10-29 11:12:32',93,1),(97,'2024-10-29 11:12:32',95,1),(98,'2024-10-29 11:12:33',100,1);
/*!40000 ALTER TABLE `bpm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vini`
--

DROP TABLE IF EXISTS `vini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vini` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NOME` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vini`
--

LOCK TABLES `vini` WRITE;
/*!40000 ALTER TABLE `vini` DISABLE KEYS */;
/*!40000 ALTER TABLE `vini` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 22:59:03
CREATE DATABASE  IF NOT EXISTS `bioguardian` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bioguardian`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: bioguardian
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agenda`
--

DROP TABLE IF EXISTS `agenda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agenda` (
  `idAgenda` int NOT NULL AUTO_INCREMENT,
  `agendamento` date NOT NULL,
  `paciente` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('Confirmado','Pendente','Cancelado') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `procedimentos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tipoPlano` enum('Padrão','Premium','Básico') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idAgenda`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agenda`
--

LOCK TABLES `agenda` WRITE;
/*!40000 ALTER TABLE `agenda` DISABLE KEYS */;
INSERT INTO `agenda` VALUES (96,'2027-07-17','pedro','Cancelado','Consulta','Premium'),(97,'2026-06-26','Rodrigo','Pendente','Consulta','Padrão'),(98,'2025-05-15','Vinicius','Confirmado','Consulta','Premium'),(99,'2024-04-04','Gleison','Cancelado','Consulta','Básico');
/*!40000 ALTER TABLE `agenda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamento` (
  `idAgendamento` int NOT NULL AUTO_INCREMENT,
  `nome` text COLLATE utf8mb4_general_ci NOT NULL,
  `aniversario` date NOT NULL,
  `horario` time NOT NULL,
  `data` date NOT NULL,
  PRIMARY KEY (`idAgendamento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` VALUES (1,'Carlos','1999-02-10','18:02:00','2024-11-15');
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastros`
--

DROP TABLE IF EXISTS `cadastros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastros` (
  `idCadastro` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role` enum('admin','medico','comum') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idCadastro`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastros`
--

LOCK TABLES `cadastros` WRITE;
/*!40000 ALTER TABLE `cadastros` DISABLE KEYS */;
INSERT INTO `cadastros` VALUES (1,'Admin','Adm@bioguardian.com','admin123','admin'),(2,'Medico','Medico@bioguardian.com','Medico123','medico'),(3,'Claudio','Claudio@gmail.com','Claudio123','comum'),(4,'Carlos','Carlos@gmai.com','Carlos123','comum'),(5,'Joao','Joao@gmail.com','123456','comum'),(6,'test','test@gmail.com','test123','comum'),(7,'julia','cleitinha@gmail.com','123456','comum');
/*!40000 ALTER TABLE `cadastros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `idContato` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email_ou_telefone` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mensagem` varchar(1000) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idContato`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (9,'Joao','Joao@gmail.com','E o pix? nada ainda?'),(10,'Claudio','Claudio@gmail.com','Eu sinto o shadow');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `idDocumento` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(300) COLLATE utf8mb4_general_ci NOT NULL,
  `tempo` date DEFAULT NULL,
  PRIMARY KEY (`idDocumento`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funcionarios` (
  `idFuncionario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `especialidade` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `numeroRegistro` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `horarioTrabalho` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `em_trabalho` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`idFuncionario`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
INSERT INTO `funcionarios` VALUES (24,'Vinicius','Administrador','12345','07:30-13:00','inativo','não'),(25,'Tinin','Medico','67890','07:30-13:00','ativo','sim'),(26,'Kamilly','Administrador','111213','13:00-19:30','inativo','sim'),(27,'Camila','Medico','141516','13:00-19:30','ativo','não');
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `idLogin` int NOT NULL AUTO_INCREMENT,
  `email` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idLogin`)
) ENGINE=InnoDB AUTO_INCREMENT=214 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'Medico@bioguardian.com','medico123'),(2,'Adm@bioguardian.com','admin123');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-13 22:59:03
