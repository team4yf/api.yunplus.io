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

CREATE TABLE `fpm`.`_sys_table` ( `id` INT NOT NULL AUTO_INCREMENT , `delflag` TINYINT NOT NULL DEFAULT '0' , `createAt` BIGINT NOT NULL , `updateAt` BIGINT NOT NULL , `t_visible` TINYINT NOT NULL DEFAULT '1' , `t_enable` TINYINT NOT NULL DEFAULT '1' , `t_id` VARCHAR(500) NULL , `t_class` VARCHAR(500) NULL , `t_attr` VARCHAR(500) NULL , `t_index` INT NOT NULL DEFAULT '0' , `t_view` VARCHAR(100) NOT NULL , `t_component` VARCHAR(100) NULL , `t_group` INT(11) NULL DEFAULT NULL , `t_user_col` VARCHAR(100) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB COMMENT = '_sys_table';

CREATE TABLE `fpm`.`_sys_table_component` ( `id` INT NOT NULL AUTO_INCREMENT , `delflag` TINYINT NOT NULL DEFAULT '0' , `createAt` BIGINT NOT NULL , `updateAt` BIGINT NOT NULL , `c_name` VARCHAR(200) NOT NULL , `c_title` VARCHAR(200) NOT NULL , `c_attr_class` VARCHAR(200) NULL , `c_attr_other` VARCHAR(200) NULL , `c_enable` TINYINT NOT NULL DEFAULT '1' , `c_tag` VARCHAR(200) NOT NULL , `c_remark` VARCHAR(500) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB COMMENT = '_sys_table_component';

CREATE TABLE `fpm`.`_sys_datasource` ( `id` INT NOT NULL AUTO_INCREMENT , `delflag` TINYINT NOT NULL DEFAULT '0' , `createAt` BIGINT NOT NULL , `updateAt` BIGINT NOT NULL , `ds_name` VARCHAR(100) NOT NULL , `ds_type` VARCHAR(100) NOT NULL , `ds_content` VARCHAR(4000) NOT NULL , `ds_require_arguments` VARCHAR(500) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB COMMENT = '_sys_datasource';

CREATE TABLE `fpm`.`_sys_table_column` ( `id` INT NOT NULL AUTO_INCREMENT , `delflag` TINYINT NOT NULL DEFAULT '0' , `createAt` BIGINT NOT NULL , `updateAt` BIGINT NOT NULL , `tc_t_id` INT NOT NULL , `tc_c_id` INT NOT NULL , `tc_attr_name` VARCHAR(200) NULL , `tc_attr_class` VARCHAR(200) NULL , `tc_dft_val` VARCHAR(200) NULL , `tc_label` VARCHAR(200) NOT NULL , `tc_placeholder` VARCHAR(200) NULL , `tc_validate` VARCHAR(200) NULL , `tc_is_null` TINYINT NOT NULL DEFAULT '1' , `tc_is_show` TINYINT NOT NULL DEFAULT '1' , `tc_is_edit` TINYINT NOT NULL DEFAULT '1' , `tc_is_pri` TINYINT NOT NULL DEFAULT '0' , `tc_is_auto` TINYINT NOT NULL DEFAULT '0' , `tc_index` INT NOT NULL DEFAULT '0' , `tc_ds` INT NULL , `tc_group` INT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB COMMENT = '_sys_table_column';