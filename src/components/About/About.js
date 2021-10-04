import React from 'react';
import './About.css';
import '../Contact/Contact.css'

const About = () => {
    return (
        <div>
            <div className="about-image">
                <div className="image-container">
                    <img src="https://images.pexels.com/photos/5427996/pexels-photo-5427996.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5427996.jpg&fm=jpg" width='100%' height='400px' alt="" />
                </div>
                <div className="about-text">
                    <p>
                        ABOUT US
                    </p>
                </div>
            </div>


            <div className="school-details">

    <div className="school-img">
        <img src="https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='500px'
        alt="" height='550px' />
    </div>
    <div className="address">
        <h2>Welcome to our School</h2>
        <p> Student Body</p>
        <ul>
            <li>Lower School: 242</li>
            <li>Middle School (Grades 6-8): 153</li>
            <li>
Upper School (Grades 8-11): 153</li>
        </ul>
        <p>Academics</p>
        <ul>
        <li>92 full time and 8 part-time</li>
            <li>
92 full time and 8 part-time</li>
            <li>Upper School (Grades 9-12): 311</li>
        </ul>

        <p>Memberships</p>
        <ul>
        <li> Upper School (Grades 9-12): 311</li>
            <li>

            92 full time and 8 part-time</li>
            <li>
92 full time and 8 part-time</li>
        </ul>
    </div>

    <div className="message">
        <div className="principal-msg">
            <img src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='200px' height='200px' alt="" />
        </div>
        <h2>Principal Message</h2>
        <p>
        I want to warmly welcome you to the 2020-2021 school year. As your principal, it is my sincere pleasure to work with our dedicated staff and community to help provide an excellent educational experience for our students. We are committed to ensuring that your children receive the best support to learn and grow.

Families, teachers, support staff, community members, and administration all play a part in helping our students develop academically, socially, and emotionally. Together, we can make a positive difference. A strong partnership between home and school fosters greater success for our children. Parents are invited to become 
        </p>

    </div>





</div>

            
        </div>
    );
};

export default About;