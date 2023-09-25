import React from 'react';
import './Popular.css';

export default function Popular() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cards-container">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 1</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Create Your Profile</b><br/><br/>Create a complete profile with personal information, education, work experience, and skills.
                Craft a professional summary and include notable achievements.
                Upload a suitable profile picture and customize your profile URL.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 2</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Search and Set Preferences</b><br/><br/>Use filters and keywords to search for jobs matching your skills and interests.
                Specify location, industry, salary range, job type, and company size preferences.
                Indicate if you're open to remote work and configure networking settings. <br/>             
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">STEP 3</h4>
                <div className="card-image"></div>
                <p className="card-text">
                <b>Apply and Network </b> <br/><br/>Apply for relevant jobs by submitting tailored resumes and cover letters.
                Follow companies of interest and connect with professionals in your field.
                Engage in industry groups, send personalized messages, and attend networking events for career growth. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
