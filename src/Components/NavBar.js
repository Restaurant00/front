// Navbar.js
import React from 'react';
import userIcon from '../Assets/majesticons_user-line.png';
import trolleyIcon from '../Assets/Vector.png';
import rectangle from '../Assets/Rectangle 10.png';

export default function Navbar ({ menuItems }) {
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
