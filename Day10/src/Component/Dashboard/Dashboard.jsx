import React from 'react';
import './Dashboard.css'; // Import your Dashboard.css for styling

function Dashboard() {
  return (
    <div>
      <navbar/>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>Full-time Jobs</h2>
            <p>2,500</p>
          </div>
          <div className="stat-card">
            <h2>Part-time Jobs</h2>
            <p>2,000</p>
          </div>
          <div className="stat-card">
            <h2>Internships</h2>
            <p>5000</p>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Dashboard;