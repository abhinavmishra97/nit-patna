import React from 'react'
import './theme.css'
import location from "../../images/location.png";

const Theme = () => {
  return (
    <div className="theme-container" id="theme-sec">
      <h1>Call for paper: Religious architecture</h1>
      <br />

      <div className="theme-inner">
        <div className="themes">
          <h1>Theme of the conference</h1>
          <ul className="theme-list">
            <li>Historical Evolution of Religious Architecture</li>
            <li>Urbanism & Religious Architecture </li>
            <li>Public Architecture</li>
            <li>Sacred places & cultural practices</li>
            <li>Contemporary Religious Architecture</li>
            <li>Modern Religious Buildings</li>
            <li>Architecture of multi-faith spaces</li>
            <li>Sustainable Architectural Applications</li>
            <li>Religious architecture in building envelope maintenance</li>
            <li>The philosophy and mathematics of religious architecture</li>
            <li>Anthropology and Ergonomics in Religious Architecture</li>
            <li>Sustainability in Religious Architecture</li>
            <li>Characteristics of religious architecture</li>
            <li>Design construction requirements and options</li>
            <li>Water in Religious Architecture</li>
            <li>Religious Architecture Style</li>
            <li>Building Material in Religious Architecture</li>
            <li>Construction Technology in Religious Architecture</li>
            <li>Planning of Religious complexes</li>
            <li>Heritage Conservation</li>
            <li>Religion and Architectural Style</li>
            <li>Construction Management in Religious Architecture</li>
            <li>Religious Tourism</li>
            <li>Religious Symbology</li>
            <li>Traditional Knowledge System </li>
            <li>Thermal Comfort in Religious Structure</li>
            <li>Climate Change Impact on Religious Architecture </li>
            <li>Erotic Architecture</li>
            <li>Landscape in Religious Architecture</li>
            <li>Pilgrimage Corridors</li>
            <li>Heritage Corridor</li>
            <li>Conservation of Religious Structures</li>
            <li>Lighting & Ventilation in Religious Architecture</li>
            <li>Vernacular Religious Architecture</li>
          </ul>
        </div>
        <div className="venue" id="venue-sec">
          <h1>Venue</h1>
          <p className="location">
            <img src={location} alt="location" style={{ height: "45px" }}></img>
            <p>
              National Institute of Technology Patna, <br /> Ashok Rajpath,
              <br /> Patna-800005,
              <br />
              Bihar, India
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Theme