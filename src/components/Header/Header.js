import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../ambition-logo.svg';
import './Header.css'

const Header = () => {
    const style ={
        textDecoration:'none',
        color:'#2D1D54'
    }
  
    return (
        <div>

            <div className="header-container">
                <div className="log">
                    <img src={logo} alt="" />
                </div>
                <div className="link">
                   <span >
                   <NavLink style={style} to='/home'>
                        HOME
                    </NavLink>
                   </span>
                   <span>
                   <NavLink style={style} to='/about'>
                      ABOUT
                    </NavLink>
                   </span>
                    <span>
                    <NavLink style={style} to='/services'>
                        SERVICES
                    </NavLink>
                    </span>
                   <span>
                   <NavLink style={style} to='/contact'>
                      CONTACT
                    </NavLink>
                   </span>
                  
                </div>
            </div>
            
        </div>
    );
};

export default Header;