import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import peoplecoding from './peoplecoding.gif';
import Navbar from './navbar';
import './App.css';
import Members from './members';

function Home(){
  return(
  <div className="Home">
      <h1>Welcome to the Society For Professional Computing</h1>
      <img src={peoplecoding} alt="people coding" style ={ {width : "500px"}}/>
      <h3>We are a group of professionals dedicated to advancing the field of computing.</h3>
      <h4>Join us in our mission to promote excellence in computer science.</h4>
      <p>The Computing Professional Society at the University of Delaware aims to bring together a community of students who are enthusiastic about expanding their knowledge of computer sciece. Our goal is to advance professional growth, encourage collaboration, and support the sharing of knowledge in the domain of computer science. Our goal is to offer members avenues for networking, skill development, and insight into industry practices, equipping them to thrive as professionals in the constantly changing computing environment.</p>
      <h5>Contact us for more information @999-999-9999.</h5>
    </div>
  );

}

function App() {
  return(
    
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/members" element={<Members />} />
          </Routes>
        </Router>
      );
    }
  





export default App;