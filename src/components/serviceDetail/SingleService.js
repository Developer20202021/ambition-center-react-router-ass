import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DataContext } from '../../App';
import './SinggleService.css';










const SingleService = () => {
   
        const info =   useContext(DataContext);
        console.log(info);
        const [course, setCourse] = useState([]);
        const{id} = useParams();
        const parameter = parseInt(id);


        const {text, catagory, image,instractorImageUrl,instructor , lessons, studentNumber, title, email } = info[parameter-1];


    return (
        <div>
         
            <div className="container">


            <div className="image">
                  <img src={image} alt="" width='800px' height='500px'/>
              </div>

              <div className="img-title">
                  <h2>
                     Service Name: {title}
                  </h2>
              </div>

              <div className="rating">
                <h3>Catagory: {catagory}</h3>
              </div>

              <div className="lesson">
                  <p>
                      Lessons: {lessons}
                  </p>
              </div>

              <div className="students">
                  <p>
                   Students: {studentNumber}
                  </p>
              </div>
              <div className="description">

                  <p>
                      {text}
                  </p>
              </div>

              <div className="author">
          
            <div className="author-image">
                  <img src={instractorImageUrl} alt=""  width='100px' height='100px'/>
                 
              </div>
              <div className="author-detail">
              <h2>Author: {instructor}</h2>
              <p>Email: {email}</p>
              </div>
              </div>

              



            </div>
         
           
        </div>
    );
};

export default SingleService;