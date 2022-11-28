const mysql = require("../databases/mysql");

module.exports = {
  async select(_, res) {    
    try {
      const connection = await mysql;
      const [rows] = await connection.execute(`SELECT * FROM products WHERE units > 0`, []);
      return res.json({ products: rows });
    } catch (e) {
      console.error(e);
    }
  },
};
