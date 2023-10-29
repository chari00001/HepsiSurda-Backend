const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./config/database");
const usersRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", usersRoute);
app.use("/products", productsRoute);

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log("server has started on port 8080");
});
