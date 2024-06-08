import React from 'react';
import logo from '../images/logo.png';
import leathertool from '../images/leathertool.jpg';


const Home = () => {
    return (
        <div id="home" className="section">
        <h1>ARTENI STUDIO</h1>
        <div className="text-container">
          <img src={logo} alt="Logo" className="logo" />
          <p>leathercraft from Bavaria</p>
        </div>
        <img src={leathertool} alt="Leather Tool" className="leather-tool" />
      </div>
      
    );
  };

export default Home;