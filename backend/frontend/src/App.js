import React, { useEffect, useState } from "react";

function App() {
  const [colleges, setColleges] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    fees: "",
    rating: "",
    placement_percentage: "",
  });

  // Fetch colleges
  const fetchColleges = () => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add college
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/colleges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      fetchColleges();
      setFormData({
        name: "",
        location: "",
        fees: "",
        rating: "",
        placement_percentage: "",
      });
    });
  };
  const deleteCollege = (id) => {
  fetch(`http://localhost:5000/colleges/${id}`, {
    method: "DELETE",
  }).then(() => {
    fetchColleges();
  });
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>College List</h1>

      {/* Form */}
      <h2>Add College</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="College Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />

        <input
          name="fees"
          placeholder="Fees"
          value={formData.fees}
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input
          name="placement_percentage"
          placeholder="Placement %"
          value={formData.placement_percentage}
          onChange={handleChange}
        />

        <button type="submit">Add College</button>
      </form>

      <br />

      {/* Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Fees</th>
            <th>Rating</th>
            <th>Placement %</th>
            <th>Action</th>
          </tr>
        </thead>
<tbody>
  {colleges.map((college) => (
    <tr key={college.id}>
      <td>{college.id}</td>
      <td>{college.name}</td>
      <td>{college.location}</td>
      <td>{college.fees}</td>
      <td>{college.rating}</td>
      <td>{college.placement_percentage}</td>

      <td>
        <button
          onClick={() => deleteCollege(college.id)}
        >
          Delete
        </button>
      </td>

    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default App;