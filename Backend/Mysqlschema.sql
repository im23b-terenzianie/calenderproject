create database kalenderproject;
use kalenderproject;
create table user(
	userid int primary key auto_increment,
    email varchar(255) unique not null,
	pw varchar(255) not null
);