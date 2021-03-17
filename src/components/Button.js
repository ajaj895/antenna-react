import React from 'react'
import './Button.css'


//Constants for the website, this auto colors 
//and auto sizes the buttons.
const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // Used for checking button style (? - if it doesn't exist : - then do this)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    // Used for checking the button size.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
    // The return is a button that checks if style/size has been set, if not it goes with the default.
    // Any children would be objects inside the button.
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
            {children}
        </button>
    )
}