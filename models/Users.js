const pool = require("../config/database");

class User {
  async findAll() {
    const query = "SELECT * FROM users;";
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = new User();
