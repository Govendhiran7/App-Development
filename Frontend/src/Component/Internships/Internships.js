import React, { useState } from "react";
import ButtonAppBar from '../HomePage/navbar';
import { useNavigate } from "react-router-dom";
import './Internships.css';

function Internships() {
  const [searchQuery, setSearchQuery] = useState(""); 

  const intern = [
    {
      title: "Network Administrator",
      description: "Salary: ₹10,000 per month",
      location: "Location: Hyderabad City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/premium-photo/man-managing-supercomputer-servers_236854-1309.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Front-End Developer",
      description: "Salary: ₹11,000 per month",
      location: "Location: Delhi City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150287680.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Back-End Developer",
      description: "Salary: ₹12,0000 per month",
      location: "Location: Chennai City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Database Administrator",
      description: "Salary: ₹8,500 per month",
      location: "Location: Chennai City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323502.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Full-stack Developer",
      description: "Salary: ₹10,000 per month",
      location: "Location: Bangalore City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/premium-photo/portrait-male-programmer-office_392895-11888.jpg?size=626&ext=jpg&ga=GA1.2.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Data Analyst",
      description: "Salary: ₹10,000 per month",
      location: "Location: Bangalore City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/person-looking-finance-graphs_52683-116608.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "Web Developer",
      description: "Salary: ₹10,000 per month",
      location: "Location: Hyderabad City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150287652.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
    {
      title: "System Administrator",
      description: "Salary: ₹10,000 per month",
      location: "Location: Delhi City",
      duration: "Duration: 6 months",
      image: "https://img.freepik.com/free-photo/portrait-hacker_23-2148165969.jpg?size=626&ext=jpg&ga=GA1.1.1185309256.1695522677&semt=ais", // Add image file name or URL
    },
  ];

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  
  const filteredJobs = intern.filter(
    (intern) =>
      intern.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      intern.duration.toLowerCase().includes(searchQuery.toLowerCase()) 
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
            placeholder="Intern title, salary, location, duration..."
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
            <img
              src={intern.image}
              alt={`${intern.title} Image`}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3>{intern.title}</h3>
            <p>{intern.description}</p>
            <p>{intern.location}</p>
            <p>{intern.duration}</p>
            <button className='job-item button' onClick={routejobform}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internships;
