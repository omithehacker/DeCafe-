// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/menu" element={<Menu />} />   
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
