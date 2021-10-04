import React, { useEffect, useState } from 'react';
import './Services.css';
// import '../About/About.css'
import Service from '../Service/Service';




const Services = () => {



const [info, setInfo] =useState([]);

useEffect(()=>{
    fetch('./courses.json')
    .then(res => res.json())
    .then(data =>setInfo(data))
},[])



    return (
        <div>
            {info.length}
            <div className="about-image">
                <div className="image-container">
                    <img src="https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" width='100%' height='400px' alt="" />
                </div>
                <div className="about-text">
                    <p>
                        Our Services
                    </p>
                </div>
            </div>

            {/* <Service> */}

            {/* </Service> */}

             <div className="our-service">
                 <h2>OUR SERVICES</h2>
             </div>
               <div className='card'>
                
                {info.map(service =><Service key={service.id} info ={service}> </Service> )}
                </div>
               









        </div>
    );
};

export default Services;