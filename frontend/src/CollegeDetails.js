import React from "react";
import { useParams, Link } from "react-router-dom";

function CollegeDetails({ colleges }) {

  const { id } = useParams();

  const college = colleges[id];

  if (!college) {
    return <h2>College not found</h2>;
  }

  const renderStars = (rating) => {
    return "⭐".repeat(Math.floor(rating));
  };

  return (
    <div style={{ padding: "20px" }}>

      <Link to="/" style={{ textDecoration: "none" }}>
        ⬅ Back to College List
      </Link>

      <h1 style={{ marginTop: "20px" }}>
        {college.name}
      </h1>

      <p>
        📍 <b>Location:</b> {college.location}
      </p>

      <p>
        💰 <b>Fees:</b> {college.fees}
      </p>

      <p>
        ⭐ <b>Rating:</b> {renderStars(college.rating)} ({college.rating})
      </p>

      <p>
        📚 <b>Courses:</b> {college.courses}
      </p>

    </div>
  );
}

export default CollegeDetails;