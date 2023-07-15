import React from 'react'
import logo from '../../assets/logo.png'


import "./Landing.css";
import Navbar from '../../components/Navbar/Navbar';

function Landing() {
  return (
    <div className="landing">
     <Navbar />
      <div className="logo">
        <img src={logo} alt="logo"  />
      </div>
      
    </div>
  );
}

export default Landing;