const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "college_db",
  password: "postgres123",
  port: 5432,
});

// GET colleges
app.get("/colleges", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM colleges ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching colleges");
  }
});

// POST add college
app.post("/colleges", async (req, res) => {
  try {
    const {
      name,
      location,
      fees,
      rating,
      placement_percentage,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO colleges 
       (name, location, fees, rating, placement_percentage)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, location, fees, rating, placement_percentage]
    );

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding college");
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// DELETE college
app.delete("/colleges/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM colleges WHERE id = $1",
      [id]
    );

    res.send("College deleted");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting college");
  }
});