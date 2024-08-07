import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component=
        {Home} />
      </Routes>
      <HeroSection />
      < Cards />
    </Router>
  );
}

export default App;
