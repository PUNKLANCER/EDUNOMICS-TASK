import React from 'react';
import './user.styles.css';
import { Link } from 'react-router-dom';



const UserPage = () => {
    return (
        <div>
        <nav className='nav'>
        <Link to='/'>
        <h2 className='h2'>Welcome To Edunomics</h2>
        </Link>
        <div>
        <button className='btuu'>MY ACCOUNT</button>
        </div>
        </nav>
        <div className='grid'>
        </div>
        </div>
    )
}

export default UserPage;