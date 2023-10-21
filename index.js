const express = require("express");
const cors = require("cors");
const pool = require("./config/database");

const app = express();

app.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      console.error('Veritabanı hatası:', error);
      res.status(500).json({ error: 'Veritabanı hatası' });
    }
  });

app.listen(3000, () => {
  console.log("server has started on port 5000");
});
