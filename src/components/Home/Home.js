import React, { useState } from 'react';
import { FaBookOpen, FaUserGraduate, FaUserFriends, FaSchool, FaPhoneAlt } from 'react-icons/fa';
import { useSpring, animated, config } from 'react-spring'
import './Home.css'

const Home = () => {
    return (
        <div>
            <section>
                <div className="slide">
                  <div className="image">
                  <img src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="" width='100%' height='500px' />
                  </div>
                  <div className="card-text">
                      <h2>Welcome</h2>
                      <p>When you look at schools, ask about the kinds of studies that they offer.</p>
                      <button className='get-started'>
                            GET STARTED
                      </button>
                  </div>
                </div>
            </section>



            <section>
               
                <div className="curricontainer">
                <h2>Our Services</h2>
                <div className="curriculum">
                    <div className="curri-card">
                        <div className="c-icon">
                            <FaUserGraduate></FaUserGraduate>
                        </div>
                        <h2>
                        Academics
                        </h2>
                        <p>
                        A good education should available.
                        </p>
                    </div>
                    <div className="curri-card">
                        <div className="c-icon">
                            <FaBookOpen></FaBookOpen>
                        </div>
                        <h2>
                        Programming
                        </h2>
                        <p>
                        Support academic program.
                        </p>
                    </div>
                    <div className="curri-card">
                        <div className="c-icon">
                            <FaSchool></FaSchool>
                        </div>
                        <h2>
                        Mobile Application Development
                        </h2>
                        <p>
                        99% of graduates college.
                        </p>
                    </div>
                    <div className="curri-card">
                        <div className="c-icon">
                            <FaUserFriends></FaUserFriends>
                        </div>
                        <h2>
                        Front End Development
                        </h2>
                        <p>
                        Built community
                        to learn.
                        </p>
                    </div>
                </div>
                </div>
            
            </section>




            <section>
            <div className="content">
                <div className="welcome">
                    <h3>Welcome</h3>
                <p>
                When you look at schools, ask about the kinds of studies that they offer. Some high schools are academic, aimed at teaching children plan.International reputation
                Prepares future leaders
                Moral and spiritual compass
                Curriculum and instruction
                </p>

                <button className='find-more'>
                    FIND MORE INFORMATION
                </button>
                </div>
                <div className="image-content">
                   <div className="image-container">
                   <img src="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='400px'
                    height='200px' alt="" />
                   </div>
                 
                </div>

                <div className="school-advice">
                    <h2>School Advice</h2>
                    <p>
                    Are you look at schools, ask about the kinds of studies that they offer. Some high schools are academic, aimed at teaching children who plan to attend college.
                    If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with  us because we are going to introduce you. You are here at the right track with  us because we are going to introduce you.One of the most basic.
                    </p>
                </div>



            </div>

            </section>


            <section>
                <div className='fun'>
                <h1>
                        FUN FACTS ABOUT AC
                        </h1>
                </div>
                
                <div className="animation">
              
                      
                       <div className="student-number">
                       
                        <p>
                            Students
                        </p>
                        <div className="number">
                        <Number></Number>
                        </div>
                        </div>
                      



                       <div className="aid">
                           <p>
                            Aid
                           </p>
                          <div className="ount-aid">
                          <Count></Count>
                          </div>
                       </div>


                        <div className="course-number">
                            
                           <p>
                           Courses
                           </p>
                           <h2>
                                80+
                            </h2>
                        </div>

                 
                  
             
             
                </div>
               
                    
            </section>





            <section>
          <div className="registration-section">


          <div className="registration-form">
              <h2>Online Registration</h2>
                <label htmlFor="">Student Name</label><br />
                  <input type="text" name="" id="" /><br />
                  <label htmlFor="">Your Email</label><br />
                  <input type="text" name="" id="" /><br />

                  <label htmlFor=""> Phone Number</label><br />
                  <input type="text" name="" id="" /><br />

                  <button className='send'>SEND</button>
                </div>



                <div className="events">
                    <h2>
                    Our Events
                    </h2>

                    <p>
                    There are no upcoming events at this time.
                    </p>



                </div>
          </div>




            </section>






            <section>
          <div className="admision">
          <div className="image">
                <img src="https://images.pexels.com/photos/8613324/pexels-photo-8613324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width='700px' alt="" />
            </div>
         

        <div className="details">
            <h1>
            Rolling admissions now open
            </h1>
            <p>
            Get in touch with us to discuss it:  
            </p>

            <p className='call'>
                <span><FaPhoneAlt></FaPhoneAlt></span>

                <span>+123456789</span>
            </p>


        </div>
        </div>


            </section>
        </div>
    );
};


function Number() {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 1000,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.div style={{fontSize :'30px', fontWeight:'500', color:'#0F2A5B'}}>{number.to(n => n.toFixed(0))}</animated.div>
  }

  function Count() {
    const [flip, set] = useState(false)
    const { number } = useSpring({
      reset: true,
      reverse: flip,
      from: { number: 0 },
      number: 100,
      delay: 200,
      config: config.molasses,
      onRest: () => set(!flip),
    })
  
    return <animated.div style={{fontSize :'30px', fontWeight:'500', color:'#0F2A5B'}}>{number.to(n => n.toFixed(0))}</animated.div>
  }

export default Home;