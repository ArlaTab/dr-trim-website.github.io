import React from 'react';
import CardItem from './Carditem';
import './Cards.css';




function Cards() {
  return (
    <div className='cards'>
      <h1>Give us a call at (831)840-0906!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem 
                src={require('../images/img-9.jpeg')}
                text='More than 15 years experience'
                label='????'
                path='/services'
               />
               <CardItem 
                src={require('../images/img-4.jpeg')}
                text='Respond with a Quote within 24 hours'
                label='Get a Quote'
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
                text='Areas we travel to: Salinas, Seaside, Monterey, Watsonville'
                label='Mobile'
                path='/services'
               />
               <CardItem 
                src={require('../images/img-home.jpeg')}
                text='???'
                label='???'
                path='/services'
               />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
