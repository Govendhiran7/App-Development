import React from 'react'
import './Home.css';
import ButtonAppBar from './navbar';
import FeedBack from './Testimonial';
//import Popular from './Popular';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Home() {
  
  const navigate = useNavigate(); 
  const routejob = () => {
    navigate('/job');
    
  };
  return (
    <div>
    <ButtonAppBar/>
    <div className="body0">
      <p className="find-the-job-that">
      Ready to take the
        <br />
      next step in your career? 
      </p>
    <div className="label2">
      <p className="text-wrapper">The best time for new beginnings is now...</p>
    </div>
    <button className='find' onClick={routejob}>Search Jobs</button>
    </div>
    <section className="popular" >
    <div className="bottom" id="scroll">
    <div className="quote1"> 
    <h2></h2>
    
    </div></div></section>
    
    <FeedBack/>
    
     <section className="footer" id="footer">
     <Footer/>
            
            </section>
    </div>
  )
}

export default Home