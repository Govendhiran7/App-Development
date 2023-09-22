import React from 'react';
import '../Components/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          
          
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: jobsearch@gmail.com<br />Phone: +91 6385919879</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank">
          <WhatsAppIcon />
        </a>
        <a href="https://twitter.com/i/flow/single_sign_on" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;