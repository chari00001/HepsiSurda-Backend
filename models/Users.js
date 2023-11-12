const pool = require("../config/database");

class User {
  async findAll() {
    const query = "SELECT * FROM users;";
    const { rows } = await pool.query(query);
    return rows;
  }
  async findOne({ email }) {
    const query = `SELECT * FROM users WHERE email = '${email}';`;
    const { rows } = await pool.query(query);
    return rows[0];
  }
  async create({ name, surname, email, telno, password }) {
    const query = `INSERT INTO users (name, surname, email, telno, password) VALUES ('${name}', '${surname}', '${email}', '${telno}', '${password}');`;

    try {
      const { rows } = await pool.query(query);
      return rows[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

module.exports = new User();
