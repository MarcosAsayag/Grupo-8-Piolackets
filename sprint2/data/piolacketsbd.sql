-- Base de datos: `piolackets`
--

-- --------------------------------------------------------

CREATE SCHEMA piolackets;

USE piolackets;

CREATE TABLE `buyer` (
  `id_buyer` int(11) NOT NULL,
  `name_buyer` varchar(45) NOT NULL,
  `surname_buyer` varchar(45) NOT NULL,
  `id_user_roll_buyer` int(11) NOT NULL,
    PRIMARY KEY (`id_buyer`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enterprise`
--

CREATE TABLE `enterprise` (
  `id_enterprise` int(11) NOT NULL,
  `enterprise_name` varchar(45) NOT NULL,
  `manager_name` varchar(45) NOT NULL,
  `manager_surname` varchar(45) NOT NULL,
  `id_user_roll_enterprise` int(11) NOT NULL,
  PRIMARY KEY (`id_enterprise`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id_sales` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_tickets` int(11) NOT NULL,
  PRIMARY KEY (`id_sales`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id_tickets` int(11) NOT NULL,
  `name_event` varchar(45) NOT NULL,
  `description` varchar(150) NOT NULL,
  `discount` int(11) NOT NULL,
  `date_event` date NOT NULL,
  `hour_event` varchar(45) NOT NULL,
  `productscol` varchar(45) NOT NULL,
  PRIMARY KEY (`id_tickets`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(18) NOT NULL,
  `email` varchar(30) NOT NULL,
  `id_userroll` int(11) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roll`
--

CREATE TABLE `user_roll` (
  `id_user_roll` int(11) NOT NULL,
  `user_roll` varchar(10) NOT NULL,
  PRIMARY KEY (`id_user_roll`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=latin1;

