const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

// College Data (No Images)
const colleges = [
  {
    name: "IIT Delhi",
    fees: "₹2,00,000/year",
    rating: 4.8,
    location: "Delhi",
    courses: "Engineering, Technology"
  },
  {
    name: "NIT Trichy",
    fees: "₹1,80,000/year",
    rating: 4.7,
    location: "Tamil Nadu",
    courses: "Engineering"
  },
  {
    name: "BITS Pilani",
    fees: "₹2,20,000/year",
    rating: 4.6,
    location: "Rajasthan",
    courses: "Engineering, Science"
  },
  {
    name: "VIT Vellore",
    fees: "₹1,95,000/year",
    rating: 4.5,
    location: "Tamil Nadu",
    courses: "Engineering, Management"
  },
  {
    name: "SRM University",
    fees: "₹2,10,000/year",
    rating: 4.4,
    location: "Chennai",
    courses: "Engineering, Medical"
  },
  {
    name: "SRKR",
    fees: "₹1,20,000/year",
    rating: 4.3,
    location: "Bhimavaram",
    courses: "Engineering"
  }
];

// API Route
app.get("/colleges", (req, res) => {
  res.json(colleges);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});