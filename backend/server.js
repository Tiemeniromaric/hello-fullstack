const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

// 1. Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cis233", // put your MySQL password if you have one
  database: "hello_db",
  port:3306,
});

// 2. Connect to DB
db.connect((err) => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// 3. API endpoint (send data to frontend)
app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages", (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
});

// 4. Start server
app.listen(port, () => {
  console.log("Backend running on http://localhost:${port}");
});