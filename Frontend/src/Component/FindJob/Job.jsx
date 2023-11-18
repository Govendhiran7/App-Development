import React, { useState } from "react";
import ButtonAppBar from '../HomePage/navbar';
import { useNavigate } from 'react-router-dom';
import './Job.css';

function Job() {
  const [searchQuery, setSearchQuery] = useState(""); 
  
  const job = [
    {
      title: "Network Administrator",
      description: "Salary: 7LPA",
      location: "Location: Hyderabad City",
      image: "https://img.freepik.com/premium-photo/man-managing-supercomputer-servers_236854-1309.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Front-End Developer",
      description: "Salary: 9LPA",
      location: "Location: Delhi City",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150287680.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Back-End Developer",
      description: "Salary: 8.5LPA",
      location: "Location: Chennai City",
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Database Administrator",
      description: "Salary: 10LPA",
      location: "Location: Chennai City",
      image: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323502.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Full-stack Developer",
      description: "Salary: 15LPA",
      location: "Location: Bangalore City",
      image: "https://img.freepik.com/premium-photo/portrait-male-programmer-office_392895-11888.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Data Analyst",
      description: "Salary: 12LPA",
      location: "Location: Bangalore City",
      image: "https://img.freepik.com/free-photo/person-looking-finance-graphs_52683-116608.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Web Developer",
      description: "Salary: 9LPA",
      location: "Location: Delhi City",
      image: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150287652.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Computer System Manager",
      description: "Salary: 10LPA",
      location: "Location: Hyderabad City",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-computer_23-2150287666.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
  ];

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
  const filteredJobs = job.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) 
       
  );

  
  const navigate = useNavigate(); 
  const routejobform = () => {
    navigate('/jobform');
  };

  return (
    <div>
      {/* Search bar */}
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSearchChange}>
          <input
            type="text"
            placeholder="Job title, salary, location..."
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
            <img
              src={job.image}
              alt={`${job.title} Image`}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.location}</p>
           
            <button className='job-item button' onClick={routejobform}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
