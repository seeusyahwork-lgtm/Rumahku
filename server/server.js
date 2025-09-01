const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/db");

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 

// root path "/"
app.get("/", (req, res) => {
  res.send("Server sudah jalan 🚀");
});

// ambil semua user
app.get("/C_nama", (req, res) => {
  db.query("SELECT * FROM db_rumahku.tb_user", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});
