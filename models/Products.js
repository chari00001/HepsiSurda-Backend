const pool = require("../config/database");

class Product {
  async create({ name, type, price, description, image, features, rating }) {
    const query = `INSERT INTO products (name, type, price, description, image, features, rating) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;

    const values = [name, type, price, description, image, features, rating];

    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  async findAll() {
    const query = "SELECT * FROM products;";
    const { rows } = await pool.query(query);
    return rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM products WHERE product_id = ${id};`;
    const { rows } = await pool.query(query);
    return rows[0];
  }

  async update(
    id,
    { name, type, price, description, image, features, rating }
  ) {
    const query = `UPDATE products SET name = $1, type = $2, price = $3, description = $4, image = $5, features = $6, rating = $7 WHERE product_id = $8 RETURNING *;`;

    const values = [
      name,
      type,
      price,
      description,
      image,
      features,
      rating,
      id,
    ];

    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  }

  async delete(id) {
    const query = `DELETE FROM products WHERE product_id = ${id};`;
    const { rows } = await pool.query(query);
    return rows[0];
  }

  async findByName(name) {
    const query = `SELECT * FROM products WHERE name = '${name}';`;
    const { rows } = await pool.query(query);
    return rows[0];
  }
}

module.exports = new Product();
