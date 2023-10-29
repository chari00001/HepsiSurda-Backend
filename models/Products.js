const pool = require("../config/database");

class Product {
  async create({ name, price, description, image }) {
    const query = `INSERT INTO products (name, price, description, image) VALUES ('${name}', '${price}', '${description}', '${image}');`;

    try {
      const { rows } = await pool.query(query);
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
    const query = `SELECT * FROM products WHERE id = ${id};`;
    const { rows } = await pool.query(query);
    return rows[0];
  }

  async update(id, { name, price, description, image }) {
    const query = `UPDATE products SET name = '${name}', price = '${price}', description = '${description}', image = '${image}' WHERE id = ${id};`;
    const { rows } = await pool.query(query);
    return rows[0];
  }

  async delete(id) {
    const query = `DELETE FROM products WHERE id = ${id};`;
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
