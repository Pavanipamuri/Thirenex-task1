-- ===========================================
-- CREATE DATABASE
-- ===========================================

CREATE DATABASE portfolio_db;

USE portfolio_db;

-- ===========================================
-- PROJECTS TABLE
-- ===========================================

CREATE TABLE projects (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(100) NOT NULL,

    description TEXT NOT NULL,

    technology VARCHAR(200),

    github VARCHAR(255),

    live_demo VARCHAR(255)

);

-- ===========================================
-- CONTACTS TABLE
-- ===========================================

CREATE TABLE contacts (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ===========================================
-- INSERT SAMPLE PROJECTS
-- ===========================================

INSERT INTO projects
(title, description, technology, github, live_demo)

VALUES

(
'Personal Portfolio Website',
'Responsive Full Stack Portfolio Website',
'HTML, CSS, JavaScript, Node.js, Express.js, MySQL',
'https://github.com/Pavanipamuri',
'#'
),

(
'Student Management System',
'CRUD Application using Node.js and MySQL',
'Node.js, Express.js, MySQL',
'https://github.com/Pavanipamuri',
'#'
),

(
'Weather Application',
'Weather Forecast using API',
'HTML, CSS, JavaScript',
'https://github.com/Pavanipamuri',
'#'
),

(
'To Do Application',
'Task Management Web Application',
'HTML, CSS, JavaScript',
'https://github.com/Pavanipamuri',
'#'
);
