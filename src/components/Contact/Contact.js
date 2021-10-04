import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="image-conatiner">
            <div className="image">
            <img src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width='100%' height='400px' alt="" />
            </div>
            <div className="contact">
                <p>Contact us</p>
            </div>
            </div>


<div className="school-details">

    <div className="school-img">
        <img src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" height='100%' />
    </div>
    <div className="address">
        <h2>Welcome to our School</h2>
        <p> Ambitiobn Center Campus Main Office</p>
        <ul>
            <li>Email: ambition@ center.com</li>
            <li>Phone: +1234566778</li>
            <li>Contact Person: J. J. Thomson</li>
        </ul>
        <p>Admissions</p>
        <ul>
        <li>Email: ambition.admission@ center.com</li>
            <li>Phone: +1234566778</li>
            <li>Contact Person: Ali Hasan</li>
        </ul>
    </div>


<div className="working-time">
    <h2>Working Hours</h2>
 <div>
     <p>Satarday</p>
     <p>8:00 - 12.00</p>
 </div>
 <div>
     <p>Sunday</p>
     <p>8:00 - 12.00</p>
 </div>
 <div>
     <p>
        MONDAY</p>
     <p>8:00 - 12.00</p>
 </div>
 <div>
     <p>Wednesday</p>
     <p>8:00 - 12.00</p>
 </div>
 <div>
     <p>
    THURSDAY</p>
     <p>8:00 - 12.00</p>
 </div>
</div>

</div>



<div className="normal-text">
    <h2>Contact Us​</h2> 
    <p>Today
Learn more about us, complete the online inquiry form.</p>
</div>
<div className="registration">

<>
<div className="info">

<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
    <FormControl  style={{
        width:'200px',
        height:"40px",
        marginBottom:'30px'
    }}
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1" style={{
      color:'gary'
  }}>Phone</InputGroup.Text>
    <FormControl style={{
        width:'200px',
        height:"40px"
    }}
      placeholder="Phone Number"
      aria-label="Phone Number"
      aria-describedby="basic-addon2"
    />
  
   
  </InputGroup>
 
</div>
 


  
<div className="msg">
    
  <InputGroup>
    <InputGroup.Text>Message</InputGroup.Text>
    <br />
    <FormControl style={{
        width:'200px',
        height:"140px"
    }} as="textarea" aria-label="With textarea" />
  </InputGroup>
</div>
</>



</div>
<div className="btn">
<button className='send'>
    SEND
    </button>
</div>



           
        </div>
    );
};

export default Contact;