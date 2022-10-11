CREATE DATABASE test_db;

USE test_db;

CREATE TABLE todo_list_table(
id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100),
description TEXT,
date_created DATETIME DEFAULT NOW()
);

