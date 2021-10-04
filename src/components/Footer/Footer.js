import React from 'react';
import { useHistory } from 'react-router';
import './Footer.css'

const Footer = () => {
    const history = useHistory();

    const getConatct =() =>{
        history.push('/contact');
    }
    return (
        <div className='footer-container'>
        <div className="footer">
        <div className="contentOne">
               <h2>
               Do you have a contact ?
               </h2>
               <p>
               Get in touch with us to discuss it:
               </p>
               <p>
               Sed ut perspiciatis unde omnis iste natus error sit lorem dol voluptatem accusantium doloremque ludantium. Sed ut perspiciatis unde 
               </p>
               </div>
             
          


            <div className="contentTwo">
            <p>Phone: +123456789</p>
               <p>Email: ambition@center.com</p>
            </div>
            <div className="contentThree">
                <h2>
                    Education
                </h2>
                <p>
                    Great road NewYourk, USA
                </p>
            </div>

            <div className="btnPart">
                <button onClick={getConatct} className='contactUs'>
                CONTACT US
                </button>
            </div>
        </div>

            <hr />
        <div className="copyright">
            <p>Copyright © 2020 Ambition Designed and Developed by Ambition.</p>
        </div>


        </div>
    );
};

export default Footer;