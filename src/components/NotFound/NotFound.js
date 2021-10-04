import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';







const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="not-found-container">
           
            <div className="not-text">
                <h2 className="not-found">
             404  - PAGE NOT FOUND
                </h2>
                <p className="notfound-text">
                The page you are looking for might have been removed had it's name changed or is temporarily unavailable.
                </p>
            </div>
            <div className="home-button">
                <button className="home-btn">
                <Link style={{
                    textDecoration:'none',
                    color: 'whitesmoke'
                }} to='/home'>
                    GO TO HOMEPAGE
                </Link>
                </button>
            </div>
            </div>
        </div>
    );
};

export default NotFound;