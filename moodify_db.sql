-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2024 at 06:24 PM
-- Server version: 8.0.34
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moodify_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `account_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`account_id`, `email`, `password`, `name`, `createdAt`, `updatedAt`) VALUES
('EGbsWuKZsqlDlffF', 'mightdelete2@gmail.com', 'mightdelete2@gmail.com', 'mightdelete2', '2024-05-23 16:19:43', '2024-05-23 16:19:43'),
('mightdelete@gmail.com', 'mightdelete@gmail.com', 'mightdelete@gmail.com', 'mightdelete', '2024-05-23 16:15:49', '2024-05-23 16:15:49');

-- --------------------------------------------------------

--
-- Table structure for table `coping_tools`
--

CREATE TABLE `coping_tools` (
  `coping_tool_id` varchar(255) NOT NULL,
  `coping_type_id` varchar(255) NOT NULL,
  `coping_tool_name` varchar(255) NOT NULL,
  `content_url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coping_types`
--

CREATE TABLE `coping_types` (
  `coping_type_id` varchar(255) NOT NULL,
  `coping_type_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `journals`
--

CREATE TABLE `journals` (
  `journal_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `journal_title` varchar(255) NOT NULL,
  `journal_text` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mood_copings`
--

CREATE TABLE `mood_copings` (
  `mood_log_id` varchar(255) NOT NULL,
  `coping_type_id` varchar(255) NOT NULL,
  `coping_tool_id` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mood_logs`
--

CREATE TABLE `mood_logs` (
  `mood_log_id` varchar(255) NOT NULL,
  `journal_id` varchar(255) NOT NULL,
  `mood` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240523142123-create-account.js'),
('20240523151318-create-user-info.js'),
('20240523151856-create-journal.js'),
('20240523152046-create-mood-log.js'),
('20240523152252-create-mood-coping.js'),
('20240523152557-create-coping-type.js'),
('20240523152716-create-coping-tools.js');

-- --------------------------------------------------------

--
-- Table structure for table `user_infos`
--

CREATE TABLE `user_infos` (
  `user_id` varchar(255) NOT NULL,
  `account_id` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `coping_tools`
--
ALTER TABLE `coping_tools`
  ADD PRIMARY KEY (`coping_tool_id`);

--
-- Indexes for table `coping_types`
--
ALTER TABLE `coping_types`
  ADD PRIMARY KEY (`coping_type_id`);

--
-- Indexes for table `journals`
--
ALTER TABLE `journals`
  ADD PRIMARY KEY (`journal_id`);

--
-- Indexes for table `mood_logs`
--
ALTER TABLE `mood_logs`
  ADD PRIMARY KEY (`mood_log_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user_infos`
--
ALTER TABLE `user_infos`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
