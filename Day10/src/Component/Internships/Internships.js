import React, { useState } from "react";
import ButtonAppBar from '../HomePage/navbar';

import './Internships.css';

function Internships() {
  const [searchQuery, setSearchQuery] = useState(""); 

  const intern = [
    {
      title: "Network Administrator",
      description: "salary: ₹10,000 per month",
      location: "Location: Hydrabad City",
      duration: "Duration: 6 months",
    },
    {
      title: "Front-End Developer",
      description: "salary: ₹11,000 per month",
      location: "Location: Delhi City",
      duration: "Duration: 6 months",
    },
    {
      title: "Back-End Developer",
      description: "salary: ₹12,0000 per month",
      location: "Location: Chennai City",
      duration: "Duration: 6 months",
    },
    {
      title: "Database administrator",
      description: "salary: ₹8,500 per month",
      location: "Location: Chennai City",
      duration: "Duration: 6 months",
    },
    {
      title: "Full-stack developer",
      description: "salary: ₹10,000 per month",
      location: "Location: Bangalore City",
      duration: "Duration: 6 months",
    },

  ];

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter jobs based on the search query
  const filteredJobs = intern.filter(
    (intern) =>
      intern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.duration.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="intern title, salary, location ,duration..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Display filtered jobs */}
      <div className="job-container">
        {filteredJobs.map((intern, index) => (
          <div key={index} className="job-item">
            <h3>{intern.title}</h3>
            <p>{intern.description}</p>
            <p>{intern.location}</p>
            <p>{intern.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;