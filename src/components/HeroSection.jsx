import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted />
        <img src={require('../images/logo_final3.png')} alt="logo" />
        <h1>Mobile Automotive Interior Repair</h1>
        <p>Ask for a Quote!</p>
        <div className='hero-btns'>
            <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
                GET A QUOTE!
            </Button>
            <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                CONTACT US!
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;


