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
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
