import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';



const Navigation = () => (
    <nav className='nav'>
        <h2>Welcome To Edunomics</h2>
        <div>
        <Link to='#'>
        <button className='btu'>LOGIN</button>
        </Link>
        <Link to='/signup'>
        <button className='but'>SIGNUP</button>
    </Link>
        </div>
    </nav>
)

export default Navigation;