const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud_cars'
})

module.exports = db

// SELECT * FROM crud_cars.car_announcements;

// CREATE TABLE IF NOT EXISTS car_announcements (
//   id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//   name varchar(255) NOT NULL,
//   brand varchar(255) NOT NULL,
//   year int(11) NOT NULL,
//   Description text NOT NULL,
//   price varchar(45) NOT NULL,
//   car_id varchar(45) NOT NULL UNIQUE,
//   color varchar(45) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   is_favorite tinyint(1) DEFAULT NULL
// ) ENGINE=INNODB
