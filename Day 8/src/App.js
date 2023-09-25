import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Home from './Component/HomePage/Home';
import Job from './Component/FindJob/Job';
import FAQ from './Component/HomePage/FAQ';
import About from './Component/About/About';
import Terms from './Component/Terms/Terms';
import Policy from './Component/Terms/Policy';
import Dashboard from './Component/Dashboard/Dashboard';
import Internships from './Component/Internships/Internships';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/job" element={<Job/>}/>
    <Route path="/faq" element={<FAQ/>}/>
    <Route path="/faq" element={<About/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/internships" element={<Internships/>}/>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
