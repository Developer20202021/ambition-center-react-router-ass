import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import StarRating from 'react-star-rating';
import './Service.css';

const Service = (props) => {
  
    const {id, image, lessons,title, rattings, text} = props.info;






    return (
        <div className='singleCard'>
           
                <div className="image">
                    <img src={image} alt="" width='300px' height='200px' />
                </div>

                <div className="title">
                  <h3>{title}</h3>
                </div>
 
   
   
     <div className="cardText">
        {text.slice(0, 80)}
     </div>

     <div className="info-container">
         <p>Rating:  {rattings}</p>
     </div>
    
            <button>
                <NavLink style={{
                    textDecoration:'none',
                    color:'white'
                }} to={`/services/${id}`}>
                    Details
                </NavLink>
            </button>
 
        </div>
    );
};

export default Service;