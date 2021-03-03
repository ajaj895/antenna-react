import React from 'react';
import { MenuItems } from './MenuItems'; // For importing locally.
import './Navbar.css';
import logo from '../../images/AntLogo.png';
import { TiThMenuOutline } from 'react-icons/ti';
import { TiTimes } from 'react-icons/ti';
import { icons } from 'react-icons/lib';

class Navbar extends React.Component {
    // Components for click menu
    state = { clicked: false } // Stores the current state

    handleClick = () => {
        // Sets the state of this current navbar to the opposite.
        this.setState({ clicked: !this.state.clicked })
    }

    render() { // This is needed for any UI react element
        return(
            <nav className='NavbarItems'>
                <h1 classname='navbar-logo'>
                    <img classname="navbar-logo" src={logo} alt='Antenna' title='Antenna' width='80px' height='80px'/>
                    <TiThMenuOutline className='navbar-logo' />
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    {this.state.clicked}
                     

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        // Key in the li is needed with react
                        // This links to the array of menu items
                        // in the MenuItems.js
                        // This is mapping the object to an index
                        return (
                            <li key={index}>
                                <a classname={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        ) 
                    })}
                </ul>
            </nav>
        )
    }
}

// This is needed to declare a default constructor (using the method above)
export default Navbar