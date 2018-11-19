CREATE DATABASE IF NOT EXISTS roman2;

USE roman2;


--
-- Database: `task`
--

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE IF NOT EXISTS `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=37 ;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`id`, `item`, `status`, `created_at`) VALUES
(8, 'Vodka', 0, '2018-11-19'),
(13, 'Bread', 0, '2018-11-19'),
(15, 'Cheese', 0, '2018-11-19'),
(16, 'Potatos', 0, '2018-11-19'),
(17, 'Herring', 0, '2018-11-19');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
