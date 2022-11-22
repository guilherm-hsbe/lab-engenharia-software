const mysql = require("../databases/mysql");

module.exports = {
  async create(req, res) {
    try {
      const connection = await mysql;
      const { products } = req.body;
      const data = products.map((product) => [product.id, 1, product.units]);

      await Promise.all(
        data.map((product) => {
          return connection.query(
            `UPDATE products SET units = units - ? WHERE id = ?`,
            [product[2], product[0]]
          );
        })
      );

      const [rows] = await connection.query(
        `INSERT INTO purchases (product_id, user_id, units) VALUES ?`,
        [data]
      );

      return res.json({ products: rows });
    } catch (e) {
      console.error(e);
    }
  },
};
