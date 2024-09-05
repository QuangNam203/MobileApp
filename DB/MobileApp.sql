DROP DATABASE IF EXISTS mobileapp;
CREATE DATABASE mobileapp;
USE mobileapp;

DROP TABLE IF EXISTS 	`User`;
CREATE TABLE IF NOT EXISTS `User`(
	id 				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`username`	 	CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`username`) >= 5 AND LENGTH(`username`) <= 50),
	`email` 		CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`email`) >= 6 AND LENGTH(`email`) <= 50),
	`password` 		VARCHAR(800) NOT NULL,
	`firstName` 	NVARCHAR(50) NOT NULL,
	`lastName` 		NVARCHAR(50) NOT NULL,
	`role` 			ENUM('ADMIN','USER') NOT NULL DEFAULT 'User'
);

DROP TABLE IF EXISTS 	`RefreshToken`;
CREATE TABLE IF NOT EXISTS `RefreshToken`(
	id 				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id			SMALLINT UNSIGNED NOT NULL,
    token			VARCHAR(200) NOT NULL unique,
    expiryDate		DATETIME NOT NULL,
    FOREIGN KEY(`user_id`) REFERENCES `User`(id)
);

DROP TABLE IF EXISTS 	`register_user`;
CREATE TABLE IF NOT EXISTS `register_user`(
	id 				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`user_id`		SMALLINT UNSIGNED UNIQUE,
    `registerDate` 	DATETIME DEFAULT NOW(),
     FOREIGN KEY(`user_id`) REFERENCES `User`(id)
);

DROP TABLE IF EXISTS 	`product`;
CREATE TABLE IF NOT EXISTS `product`(
	`id`			SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name`			VARCHAR(50) NOT NULL,
	`RAM`			int UNSIGNED not null,
    `Memory`		int UNSIGNED not null,
    `color`			VARCHAR(50) NOT NULL,
    `price`			int UNSIGNED not null,
    `publisher`		VARCHAR(50) NOT NULL,
    `goodsDate` 	DATETIME DEFAULT NOW(),
     `status` 		ENUM('F','T') NOT NULL default 'F'
);

DROP TABLE IF EXISTS 	`order`;
CREATE TABLE IF NOT EXISTS `order`(
	id				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id		SMALLINT UNSIGNED not null unique,
    user_id			SMALLINT UNSIGNED not null,
    tradingDay      DATETIME DEFAULT NOW(),
    FOREIGN KEY(`user_id`) REFERENCES `User`(id),
    FOREIGN KEY(`product_id`) REFERENCES `product`(id)
);


DROP TABLE IF EXISTS 	OrderProduct;
DELIMITER $$
	CREATE TRIGGER OrderProduct AFTER INSERT ON `order` FOR EACH ROW
	BEGIN
		Update `product` as p set `status` = 'T'
        where new.`product_id` = p.id;
	END $$

DROP TABLE IF EXISTS 	IN_register_user;
DELIMITER $$
	CREATE TRIGGER IN_register_user AFTER INSERT ON `User` FOR EACH ROW
	BEGIN
		INSERT INTO `register_user`(`user_id`,`registerDate`)
		VALUE  (NEW.`id`,NOW());
	END $$


INSERT INTO `User` (`username`,			`email`,						`password`,												`firstName`	,	`lastName`	, 	`role`)
VALUE			('admin'	,		'admin.vn@gmail.com',		'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',	'Ta'		,	'Quang Nam'	,	'ADMIN'), 
				('employee'	,		'employee@gmail.com',		'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',	'Nguyễn '	,	'Thanh Hưng',	'USER');


INSERT INTO `product` (`name`, `RAM`, `Memory`,`color`,`price` ,`publisher`, `goodsDate`)
VALUE	
	('IPhone 15', 8 , 256 , 'green' , 20000000 , 'Apple' , now()),
	('IPhone 13', 8 , 256 , 'red' , 10000000 , 'Apple' , now()),
	('IPhone 14', 8 , 512 , 'blue' , 40000000 , 'Apple' , now()),
	('IPhone 11', 4 , 256 , 'grey' , 20000000 , 'Apple' , now()),
	('IPhone 12', 4 , 128 , 'grey' , 30000000 , 'Apple' , now()),
	('IPhone 15', 8 , 256 , 'red' , 33000000 , 'Apple' , now()),
	('IPhone 11', 8 , 512 , 'black' , 31000000 , 'Apple' , now()),
	('IPhone 11', 8 , 512 , 'pink' , 32000000 , 'Apple' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'red' , 29900000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'pink' , 32200000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'green' , 390000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'blue' , 31000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'green' , 32200000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'blue' , 39999999 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
	('IPhone 12', 8 , 256 , 'red' , 23000000 , 'Apple' , now()),
	('IPhone 13', 4 , 128 , 'blue' , 302310000 , 'Apple' , now()),
	('IPhone 14', 8 , 128 , 'blue' , 12312130 , 'Apple' , now()),
	('IPhone 14', 8 , 256 , 'blue' , 300213100 , 'Apple' , now()),
	('IPhone 14', 8 , 256 , 'green' , 312310000 , 'Apple' , now()),
	('IPhone 12', 4 , 256 , 'green' , 323100000 , 'Apple' , now()),
	('IPhone 12', 4 , 128 , 'red' , 300110000 , 'Apple' , now()),
	('IPhone 12', 8 , 512 , 'pink' , 30200000 , 'Apple' , now()),
    ('IPhone 15', 8 , 256 , 'green' , 32000000 , 'Apple' , now()),
	('IPhone 13', 8 , 256 , 'red' , 30000000 , 'Apple' , now()),
	('IPhone 14', 8 , 512 , 'blue' , 30000000 , 'Apple' , now()),
	('IPhone 11', 4 , 256 , 'grey' , 312000000 , 'Apple' , now()),
	('IPhone 12', 4 , 128 , 'green' , 32130000 , 'Apple' , now()),
	('IPhone 15', 8 , 256 , 'red' , 30123000 , 'Apple' , now()),
	('IPhone 11', 8 , 512 , 'black' , 30000000 , 'Apple' , now()),
	('IPhone 11', 8 , 512 , 'pink' , 30000000 , 'Apple' , now()),
	('IPhone 12', 8 , 256 , 'red' , 30000000 , 'Apple' , now()),
	('IPhone 13', 4 , 128 , 'green' , 30000000 , 'Apple' , now()),
	('IPhone 14', 4 , 128 , 'green' , 30000000 , 'Apple' , now()),
	('IPhone 14', 4 , 256 , 'blue' , 30000000 , 'Apple' , now()),
	('IPhone 14', 8 , 256 , 'green' , 30000000 , 'Apple' , now()),
	('IPhone 12', 4 , 256 , 'green' , 30000000 , 'Apple' , now()),
	('IPhone 12', 4 , 128 , 'red' , 30000000 , 'Apple' , now()),
	('IPhone 12', 8 , 512 , 'pink' , 30000000 , 'Apple' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy S24', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'pink' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'green' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 256 , 'red' , 30000000 , 'Samsung' , now()),
    ('Samsung Galaxy Z Flip', 8 , 512 , 'blue' , 30000000 , 'Samsung' , now())

			
-- INSERT INTO `order` (`product_id`,`user_id`,tradingDay)
-- value (1,2,now())
				
                