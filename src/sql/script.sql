CREATE OR REPLACE DATABASE mydb;
USE mydb;

CREATE OR REPLACE USER if not exists `user`@`localhost` IDENTIFIED BY 'GuranecSQL';
GRANT ALL PRIVILEGES ON mydb.* TO `user`@`localhost`;

CREATE TABLE account (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(64),
    password CHAR(128)
);

CREATE TABLE survey (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    isPaused BOOLEAN,
    isNamed BOOLEAN,
    name VARCHAR(256),
    duration VARCHAR(256),
    account_id INT NOT NULL REFERENCES account(id)
);

CREATE TABLE question (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    text VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE link (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    uses INT,
    responces INT,
    usageLimit INT,
    responceLimit INT,
    path VARCHAR(256),
    survey_id INT NOT NULL REFERENCES survey(id)
);

CREATE TABLE response (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    value TEXT(16384),
    question_id INT NOT NULL REFERENCES question(id),
    account_id INT REFERENCES account(id)
);

INSERT INTO mydb.account (username, password) VALUES ('placeholder', 'placeholder_password');
INSERT INTO mydb.survey (isPaused, isNamed, name, duration, account_id) VALUES (TRUE, TRUE, 'placeholder survey', 1, 1);
INSERT INTO mydb.question (text, survey_id) VALUES ('placeholder question', 1);

INSERT INTO mydb.response (value, question_id)
VALUES
    ('Yes', 1),
    ('No', 1),
    ('Квантова фізика', 1),
    ('Плутон', 1),
    ('De revolutionibus orbium coelestium', 1),
    ('Геродот', 1),
    ('Римська імперія', 1);
