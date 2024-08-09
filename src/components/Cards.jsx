import React from 'react';
import CardItem from './Carditem';
import './Cards.css';



function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Previous Work!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem 
                src={require('../images/img-9.jpeg')}
                text='Mobile Automotive Interior Repair'
                label='Previous Work'
                path='/services'
               />
               <CardItem 
                src={require('../images/img-4.jpeg')}
                text='See our Before and After Work'
                label='Before and After'
                path='/services'
               />
            </ul>
            <ul className='cards__items'>
               <CardItem 
                src={require('../images/img-3.jpeg')}
                text='Contact us to schedule an Appointment'
                label='Appointment'
                path='/services'
               />
               <CardItem 
                src={require('../images/img-5.jpeg')}
                text='We travel to you'
                label='Mobile'
                path='/services'
               />
               <CardItem 
                src={require('../images/img-home.jpeg')}
                text='More than 15 years experience'
                label='Speciality Work'
                path='/services'
               />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
