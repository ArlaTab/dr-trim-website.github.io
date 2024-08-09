import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Getaquote from './components/pages/Getaquote';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/get-a-quote' element={<Getaquote />} />
      </Routes>
      <HeroSection />
      < Cards />
    </Router>
  );
}

export default App;
