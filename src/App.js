import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Shop from './components/Shop';
import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about-me"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="shop"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Info
            </Link>
          </li>
        </ul>
      </nav>
      <Home />
      <AboutMe />
      <Shop />
      <Info />
    </div>
  );
}

export default App;