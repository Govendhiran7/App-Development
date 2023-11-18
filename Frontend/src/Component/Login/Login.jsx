import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (username.length === 0 || password.length === 0) {
        seterror(true);
      } else {
        dispatch(login(username));
        const response = await axios.post("http://localhost:8080/auth/authenticate", { username, password });
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("auth", token);
        
        
        navigate('/');
      }
    } catch (error) {
      alert("InValid Username and Password.");
     
    }
  };

  const handleFirstButtonClick = () => {
    navigate('/SignUp');
  };

  return (
    <div className='body1'>
      <div className="login-form">
        <form onSubmit={handleSubmit} className='img'>
          <center><h1>LOGIN</h1></center>
          <div className="input_container">
            <input type="text" id="user" value={username} placeholder="USERNAME" onChange={e => setUser(e.target.value)} /><br />
            <div>
              {error && username.length === 0 ? <label style={{ color: 'red' }}>Username is required</label> : ""}
            </div>
            <br />
          </div>
          <div className="input_container">
            <input type={showPassword ? "username" : "password"} id="pwd" value={password} placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
            <div>
              {error && password.length === 0 ? <label style={{ color: 'red' }}>Password is required</label> : ""}
            </div>
          </div>
          <br /><center>
            <div className="button-container">
              <button type="submit" className="Submit" >SUBMIT</button>
            </div>
            <h4>DON'T HAVE AN ACCOUNT?</h4>
            <button type="submit" className="login" onClick={handleFirstButtonClick}>SIGNUP</button>
          </center>
        </form>
      </div>
    </div>
  )
}
