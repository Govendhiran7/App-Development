// SuccessPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

export default function SuccessPage() {
  const location = useLocation();
  const formData = location.state && location.state.formData;

  return (
    <div className="success-page-container">
      <div className="success-icon">&#10004;</div>
      <h2 className="success-heading">Application Submitted Successfully!</h2>
      {formData && (
        <div className="success-details">
          <h3>Details:</h3>
          <ul>
            <li>
              <strong>Name:</strong> {formData.name}
            </li>
            <li>
              <strong>Email:</strong> {formData.email}
            </li>
            {/* Include other form fields as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}
