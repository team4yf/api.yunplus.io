-- phpMyAdmin SQL Dump
-- version 4.6.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2016 at 05:15 AM
-- Server version: 10.1.14-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `fpm`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_app`
--

CREATE TABLE `api_app` (
  `id` int(12) NOT NULL,
  `appid` int(12) NOT NULL,
  `appname` varchar(120) NOT NULL,
  `apptype` varchar(120) NOT NULL,
  `appkey` varchar(120) NOT NULL,
  `secretkey` varchar(120) NOT NULL,
  `appenvironment` varchar(120) NOT NULL,
  `approot` varchar(120) NOT NULL,
  `createAt` int(32) NOT NULL,
  `updateAt` int(32) NOT NULL,
  `delflag` int(12) NOT NULL,
  `status` int(12) NOT NULL DEFAULT '1',
  `about` varchar(250) NOT NULL,
  `appurl` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cm_version`
--

CREATE TABLE `cm_version` (
  `id` int(20) NOT NULL,
  `app` varchar(100) NOT NULL,
  `version` varchar(100) NOT NULL,
  `device` varchar(100) NOT NULL,
  `download` varchar(500) DEFAULT NULL,
  `createAt` bigint(20) DEFAULT NULL,
  `updateAt` bigint(20) DEFAULT NULL,
  `delflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标示'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cm_version`
--

INSERT INTO `cm_version` (`id`, `app`, `version`, `device`, `download`, `createAt`, `updateAt`, `delflag`) VALUES
(1, 'fpmclient', '1.0', 'android', 'http://www.baidu.com', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fpm_device`
--

CREATE TABLE `fpm_device` (
  `id` int(20) NOT NULL COMMENT 'ID序号',
  `bin` varchar(100) NOT NULL COMMENT '设备号',
  `createAt` bigint(11) DEFAULT NULL COMMENT '创建时间',
  `updateAt` bigint(11) DEFAULT NULL COMMENT '更新时间',
  `delflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标识',
  `domain` varchar(100) NOT NULL COMMENT '设备域名',
  `activeAt` bigint(11) DEFAULT NULL COMMENT '激活时间',
  `activeflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '激活标识;0:未激活,1:激活'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='设备信息';

-- --------------------------------------------------------

--
-- Table structure for table `fpm_user`
--

CREATE TABLE `fpm_user` (
  `id` int(11) NOT NULL COMMENT '序列',
  `name` varchar(100) NOT NULL COMMENT '用户名',
  `phone` varchar(100) NOT NULL COMMENT '手机号',
  `email` varchar(100) NOT NULL COMMENT '邮箱',
  `createAt` bigint(20) NOT NULL COMMENT '创建时间',
  `updateAt` bigint(20) NOT NULL COMMENT '更新时间',
  `delflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '删除标识',
  `bindflag` tinyint(4) NOT NULL DEFAULT '0' COMMENT '绑定标识',
  `deviceId` int(11) NOT NULL COMMENT '绑定的设备ID',
  `pass` varchar(100) NOT NULL COMMENT '密码',
  `bindAt` bigint(20) NOT NULL COMMENT '绑定时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户数据表';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_app`
--
ALTER TABLE `api_app`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cm_version`
--
ALTER TABLE `cm_version`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fpm_device`
--
ALTER TABLE `fpm_device`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fpm_user`
--
ALTER TABLE `fpm_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_app`
--
ALTER TABLE `api_app`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cm_version`
--
ALTER TABLE `cm_version`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `fpm_device`
--
ALTER TABLE `fpm_device`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT COMMENT 'ID序号';
--
-- AUTO_INCREMENT for table `fpm_user`
--
ALTER TABLE `fpm_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '序列';

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
