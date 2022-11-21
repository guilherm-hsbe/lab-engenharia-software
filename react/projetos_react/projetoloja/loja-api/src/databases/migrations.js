require("dotenv/config");
const mysql = require("./mysql");

(async () => {
  const connection = await mysql;

  await connection.query(`
    CREATE TABLE IF NOT EXISTS products (
      id int PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      units int NOT NULL default 0,
      price decimal(10, 2) NOT NULL,
      image varchar(255) NOT NULL
    );
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS users (
      id int PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) NOT NULL
    );
  `);

  await connection.query(`
    CREATE TABLE IF NOT EXISTS purchases (
      id int PRIMARY KEY AUTO_INCREMENT,
      user_id int NOT NULL,
      product_id int NOT NULL,
      units int NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    );
  `);

  process.exit();
})();
