import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import './styling/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js'
import Nav from './components/nav.js'
import Cups from './components/cups'
import Pens from './components/pens'
import Contact from './components/contact'

function App() {
    return (
      <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cups" element={<Cups />} />
            <Route path="/pens" element={<Pens />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
    
    ); 
}

export default App;