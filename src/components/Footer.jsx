import React from 'react'
import { Button } from './Button'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Contact us to get a Quote within 24 hours!
        </p>
        <p className="footer-subscription-text">
          You can call us at (831)840-0906
        </p>
        <div className="input-areas">
          <form>
            <input type="email" 
            name="email" placeholder="Your Email"
            className="footer-input" />
            <Button buttonStyle='btn--outline'>
              Email us!
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Footer
