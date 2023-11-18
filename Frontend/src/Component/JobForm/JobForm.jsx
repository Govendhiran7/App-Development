// JobForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobForm.css';

export default function JobForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    experience: '',
    mobile: '',
    skills: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data
    navigate('/success');
  };

  return (
    <div className="job-form-page-container">
      <h2 className="job-form-page-app">Apply for a Job</h2>
      <form className="job-form-page-form" onSubmit={handleSubmit}>
        <div className="job-form-page-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={handleInputChange} />

          <label htmlFor="qualification">Qualification:</label>
          <input type="text" id="qualification" name="qualification" required onChange={handleInputChange} />

          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" name="experience" required onChange={handleInputChange} />

          <label htmlFor="mobile">Mobile No:</label>
          <input type="text" id="mobile" name="mobile" required onChange={handleInputChange} />

          <label htmlFor="skills">Skills:</label>
          <input type="text" id="skills" name="skills" required onChange={handleInputChange} />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required onChange={handleInputChange} />
        </div>

        <div className="job-form-page-group">
          <label htmlFor="resume">Upload Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx"
            onChange={handleResumeChange}
          />
        </div>

        <div className="job-form-page-group">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
}
