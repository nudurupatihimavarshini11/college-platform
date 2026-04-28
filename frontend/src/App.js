import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CollegeDetails from "./CollegeDetails";

function App() {

  const colleges = [
    {
      name: "IIT Delhi",
      location: "Delhi",
      fees: "₹2,00,000/year",
      rating: 4.8,
      courses: "Engineering, Technology"
    },
    {
      name: "NIT Trichy",
      location: "Tamil Nadu",
      fees: "₹1,80,000/year",
      rating: 4.7,
      courses: "Engineering"
    },
    {
      name: "BITS Pilani",
      location: "Rajasthan",
      fees: "₹2,20,000/year",
      rating: 4.6,
      courses: "Engineering, Science"
    },
    {
      name: "VIT Vellore",
      location: "Tamil Nadu",
      fees: "₹1,95,000/year",
      rating: 4.5,
      courses: "Engineering, Management"
    },
    {
      name: "SRM University",
      location: "Chennai",
      fees: "₹2,10,000/year",
      rating: 4.4,
      courses: "Engineering, Medical"
    },
    {
      name: "SRKR",
      location: "Bhimavaram",
      fees: "₹1,20,000/year",
      rating: 4.3,
      courses: "Engineering"
    }
  ];

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  return (
    <Router>
      <Routes>

        {/* College List Page */}
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>

              <h1 style={{ textAlign: "center" }}>
                🎓 College List
              </h1>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginTop: "20px"
                }}
              >

                {colleges.map((college, index) => (

                  <Link
                    key={index}
                    to={`/college/${index}`}
                    style={{
                      textDecoration: "none",
                      color: "black"
                    }}
                  >

                    <div
                      style={{
                        border: "1px solid #ccc",
                        padding: "15px",
                        borderRadius: "10px",
                        backgroundColor: "#f9f9f9",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                      }}
                    >

                      <h3>{college.name}</h3>

                      <p>
                        📍 Location: {college.location}
                      </p>

                      <p>
                        💰 Fees: {college.fees}
                      </p>

                      <p>
                        {renderStars(college.rating)} ({college.rating})
                      </p>

                      <p>
                        📚 Courses: {college.courses}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>
          }
        />

        {/* College Details Page */}
        <Route
          path="/college/:id"
          element={<CollegeDetails colleges={colleges} />}
        />

      </Routes>
    </Router>
  );
}

export default App;