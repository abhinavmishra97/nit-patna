import React from 'react'
import './navbar.css'
import nitpatnalogo from "../../images/nitpatnalogo.webp";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="main-container">
          <div className="container">
            <h3>राष्ट्रीय प्रौद्योगिकी संस्थान पटना</h3>
            <h2>
              National Institute of Technology
              <br />
              Patna, India
            </h2>
          </div>
          <div className="event-name">
            <h2>International Conference on Religious Architecture</h2>
            <h3>December 28-29, 2024 </h3>
            <h3>HYBRID MODE</h3>
          </div>
          <img src={nitpatnalogo} alt="nit-patna"></img>
        </div>
        <ul className="navbar-list">
          <li className="list1">
            <a href="#home-sec">Home</a>
          </li>
          <li className="list1">
            <a href="#about-sec">About</a>
          </li>
          <li className="list1">
            <a href="#theme-sec">Theme</a>
          </li>
          <li className="list1">
            <a href="#venue-sec">Venue</a>
          </li>
          <li className="list1">
            <a href="#dates-sec">Dates</a>
          </li>
          <li className="list1">
            <a href="#committee-sec">Committee</a>
          </li>
          <li className="list1">
            <a href="fees-sec">Registration Fees</a>
          </li>
        </ul>
      </div>
      <div className="mobile-navbar">
        <div className="container-mobile">
          <div className="mob-nav-heading">
            <h3>राष्ट्रीय प्रौद्योगिकी संस्थान पटना</h3>
            <h2>
              National Institute of Technology
              <br />
              Patna, India
            </h2>
          </div>
          <img src={nitpatnalogo} alt="nit-patna"></img>
        </div>
        <div className="event-name-mob">
          <h2>International Conference on Religious Architecture</h2>
          <h3>December 28-29, 2024 </h3>
          <h3>HYBRID MODE</h3>
        </div>
      </div>
    </>
  );
}

export default Navbar