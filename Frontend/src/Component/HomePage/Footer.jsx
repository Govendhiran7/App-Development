import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Footer() {
  const navigate=useNavigate();
  const faqnavigate = () => {
    navigate('/faq');
  };
  return (
    <div className='bodyl'>  <footer>
    <div className="row">
      
    <div className="label">
    <p className="WE-d-LIKE-LOVE-TO">
      <span className="text-wrapper">JOB</span>
      <span className="span"> SEARCH</span>
      <span className="text-wrapper">
        {" "}
        
        <br />
      </span>
      <span className="text-wrapper-2"></span>
      <span className="text-wrapper"> </span>
    </p>
  </div>

      <div className="column"><br/><br/>
        <h4 className='col'>
          Quick Links</h4>
        <ul>
          <li>
            <a href="/job">
          </a>
          </li>
          <li>
          <a href="/policy">
          Privacy and Policy</a>
          </li>
          <li>
          <a href="/terms">
          Terms and Conditions</a>
          </li>
          <li>  
            <a href="#">
              </a>
          </li>
        </ul>
      </div>

      <div className="column"><br/><br/>
        <h4 className='col'>Social Media</h4>
        <ul className="social-icons">
          <li>
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
           </li>
        </ul>
      </div>
      
      </div><br></br>
      <h2 className="below-links">"Access our frequently asked questions for <br/> expert  advice on improving your job search." </h2><br/>
      <button className="buttonf" onClick={faqnavigate}><b>FAQ</b></button>
    <p className="copyright">© Job Search  {new Date().getFullYear()} All Rights Reserved</p>
  </footer></div>
  )
}
