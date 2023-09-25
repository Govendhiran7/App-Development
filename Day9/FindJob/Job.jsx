import React, { useState } from "react";
import ButtonAppBar from '../HomePage/navbar';

import './Job.css';

function Job() {
  const [searchQuery, setSearchQuery] = useState(""); 

  const jobs = [
    {
      title: "Network Administrator",
      description: "salary: ₹4,73,876 per year",
      location: "Location: Hydrabad City",
    },
    {
      title: "Front-End Developer",
      description: "salary: ₹5,65,848 per year",
      location: "Location: Delhi City",
    },
    {
      title: "Back-End Developer",
      description: "salary: ₹8,65,848 per year",
      location: "Location: Chennai City",
    },
    {
      title: "Database administrator",
      description: "salary: ₹3,50,848 per year",
      location: "Location: Chennai City",
    },
    {
      title: "Full-stack developer",
      description: "salary: ₹7,65,848 per year",
      location: "Location: Bangalore City",
    },

  ];

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter jobs based on the search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="job title, salary, location..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Display filtered jobs */}
      <div className="job-container">
        {filteredJobs.map((job, index) => (
          <div key={index} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;