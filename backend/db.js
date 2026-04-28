const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "college_db",
  password: "postgres123", // change if your password is different
  port: 5432,
});

module.exports = pool;