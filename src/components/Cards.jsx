import React from 'react';
import CardItem1 from './Carditem';
import CardItem2 from './Carditem';
import CardItem3 from './Carditem';
import './Cards.css';




function Cards() {
  return (
    <div className='cards'>
      <h1>Give us a call at (831)840-0906
      !!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
               <CardItem1 
                src={require('../images/Card1.jpg')}
                text='Schedule an appointment'
                label='Contact us'
                path='/services'
               />
               <CardItem2 
                src={require('../images/Card2.jpg')}
                text='Areas of Service'
                label='Mobile'
                path='/services'
               />
            </ul>
            <ul className='cards__items'>
               <CardItem3 
                src={require('../images/Card3.jpg')}
                text='Receive a Quote'
                label='Free Quote'
                path='/services'
               />
          
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
