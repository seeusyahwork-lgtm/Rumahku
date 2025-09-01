const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qwerty123",
  database: "db_rumahku",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Pool pakai .getConnection(), BUKAN .connect()
db.getConnection((err, conn) => {
  if (err) throw err;
  console.log("✅ MySQL terkoneksi (pool)");
  conn.release(); // balikin ke pool
});

module.exports = db;
