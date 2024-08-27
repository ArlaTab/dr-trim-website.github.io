import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Getaquote from './components/pages/Getaquote';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This will handle scrolling to the top on route changes */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/get-a-quote' element={<Getaquote />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
