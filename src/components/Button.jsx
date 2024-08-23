import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    ContactForm, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/get-a-quote' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={ContactForm}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};