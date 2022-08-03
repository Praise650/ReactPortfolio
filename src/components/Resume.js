import React from 'react';
import './Resume.css';
import resume from '../assets/Resume-Fabiyi-Johnson.pdf';
import { useNavigate } from 'react-router-dom';

export default function Resume() {
   const navigate = useNavigate();

   return (
      <div className="resume">
         <div className="resume-container">
            <div className="info">
               <div>
                  <div>
                     <h1 className="fs-vl fw-b">Fabiyi Johnson</h1>
                     <h2 className="fs-lg fw-b">Frontend Developer</h2>
                     <a className="mail" href="mailto:fabiyijay@gmail.com">
                        <i className="fa-solid fa-paper-plane"></i>
                        <span>send an email</span>
                     </a>
                  </div>
                  <div className="link">
                     <a
                        href="https://www.linkedin.com/in/fabiyi-johnson-720648143/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <i className="fa-brands fa-linkedin"></i>
                        <span>LinkedIn</span>
                     </a>
                     <a href={resume} download="Resume-Fabiyi-Johnson">
                        <i className="fa-solid fa-download"></i>
                        <span>Download</span>
                     </a>
                  </div>
               </div>
               <p>
                  I am an enthusiastic frontend developer with passion for the
                  latest solutions and interactive design.
               </p>
            </div>
            <div>
               <h3>Core Technologies</h3>
               <p>HTML/CSS, SASS, Javascript [ES6], React Js, Redux.</p>
            </div>
            <div>
               <h3>Familiar With</h3>
               <p>Typescript, Node Js, CSS-in-JS,.</p>
            </div>
            <div>
               <h3>On The Job</h3>
               <p>Version control (Git), Agile methodology, Debugging.</p>
            </div>
            <div>
               <h3>Experience</h3>
               <h2 className="fs-md">
                  Upwork - <i>Frontend Developer [Freelance]</i>
               </h2>
               <ul>
                  <li>
                     <p>
                        Conversion Figma designs to real scalable websites with
                        great User Interface design
                     </p>
                  </li>
                  <li>
                     <p>
                        Developing frontend designs using React and Redux,
                        Fixing Website.
                     </p>
                  </li>
                  <li>
                     <p>Indexed DB bugs, and performing web scraping.</p>
                  </li>
               </ul>
            </div>
            <div>
               <h3>Education</h3>
               <h2 className="fs-md">Obafemi Awolowo University Ile-Ife</h2>
               <p>Electronics and Electrical Eng. (2015-2020)</p>
            </div>
         </div>
         <div className="page-nav">
            <button onClick={() => navigate('/work')}>Work</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
         </div>
      </div>
   );
}
