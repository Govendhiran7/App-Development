import React from 'react'
import { Link } from 'react-router-dom';

import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';
import Footer from '../Footer';

export default function Homepage () {
  const user=useSelector(selectUser);
  console.log("User:",user);
  const username = user.user && user.user.username ? user.user.username : "Guest";
  return (
    <div>
      <div className='full22'>
           
           <div class="navbar">
           
              <div class="menu">
               <ul>
               
                  <li><Link to='/'>Hi👋{username}</Link></li>
                  <li><Link to='/'> HOME</Link></li>
                  <li><a href="#">ABOUT</a></li>
                  <li><Link to='/contactus'>CONTACT US</Link></li>
                  <li><Link to='/login'>LOGIN</Link></li>
                  <li><Link to='/signup'>REGISTER</Link></li>         
                </ul>
             </div>
          </div>
        
          
     
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'></div>
          <div id='close'></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><a href="#"><span className='icon'></span>Category</a></li>
              <li><Link to="#"><span className='icon'></span>Location</Link></li>
              <li><Link to="#"><span className='icon'></span>Jobs</Link></li>
              <li><Link to="#"><span className='icon'></span>Internships</Link></li>
              <li><Link to="#"><span className='icon'></span>Reviews</Link></li>
            </ul>
          </div>

      </div>

    
    <Footer/>
    </div>
   
    
  )
}