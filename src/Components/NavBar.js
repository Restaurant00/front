// Navbar.js 
import React from 'react';
import userIcon from '../assests/majesticons_user-line.png';
import trolleyIcon from '../assests/Vector.png';
import rectangle from '../assests/Rectangle 10.png';

export default function NavBar ({ menuItems }) {
    return (
        <nav className='navbar'>
            <img src={userIcon} alt='user' className='user--icon'/>
            <img src={trolleyIcon} alt='trolley' className='trolley--icon' />
            <img src={rectangle} alt='rectangle' className='rectangle--icon'/>
            <ul className='nav--buttons'>
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    )
}
