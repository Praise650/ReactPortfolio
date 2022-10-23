import React from 'react';
import './Project.css';
import { useNavigate } from 'react-router-dom';

const projects = [
   {
      name: 'Entertainment Web App',
      details: 'A shows webpage where user can bookmark shows of their choice',
      link: {
         live: 'https://jay-entertainment-web-app.herokuapp.com/',
         code: 'https://github.com/johnsiner/entertainment-web-app',
      },
      tools: 'HTML/CSS, React JS, Mongo, Node JS, Express, Rest API',
   },
   {
      name: 'Space Tourism Webpage',
      details:
         'Explore space travel while learning about the crew and technology involved',
      link: {
         live: 'https://jay-space-tourism.netlify.app',
         code: 'https://github.com/johnsiner/space-tourism-website',
      },
      tools: 'HTML/CSS, Javascript, React JS',
   },
   {
      name: 'Rest Countries api Webpage',
      details:
         'An implementation of rest countries api, get the details of any country in the world',
      link: {
         live: 'https://jay-countries-rest-api.netlify.app',
         code: 'https://github.com/johnsiner/rest-countries-api',
      },
      tools: 'HTML/CSS, Javascript, React JS',
   },
   {
      name: 'Todo App',
      details: 'Simple todo app with drag and drop feature',
      link: {
         live: 'https://jay-todo.netlify.app',
         code: 'https://github.com/johnsiner/todo-app',
      },
      tools: 'HTML/CSS, Javascript, React JS',
   },
   {
      name: 'This Portfolio',
      details: 'My portfolio website that showcases my skills',
      link: {
         live: 'https://fabiyijay.netlify.app',
         code: 'https://github.com/johnsiner/my-portfolio',
      },
      tools: 'HTML/CSS, Javascript, React JS',
   },
   {
      name: 'Sneakers Product Page',
      details: 'Sample product page for an Ecommmerce website',
      link: {
         live: 'https://jay-sneakers.netlify.app',
         code: 'https://github.com/johnsiner/sneakers',
      },
      tools: 'HTML/CSS, Javascript, React JS',
   },
   {
      name: 'Amazona (Trenches Amazon)',
      details:
         'An Ecommerce site with login, cart fuctionality and integration with paypal',
      link: {
         live: 'https://mern-amazona-jay.herokuapp.com/',
         code: 'https://github.com/johnsiner/amazona',
      },
      tools: 'HTML/CSS, React JS, Mongo, Node JS, Express, Rest API',
   },
];

export default function Projects() {
   const navigate = useNavigate();

   return (
      <div className="works">
         {projects.map((project, index) => (
            <div key={index} className="project">
               <div className="top">
                  <h3>{project.name}</h3>
                  <p>{project.details}</p>
               </div>
               <div className="buttom">
                  <p className="tools">{project.tools}</p>
                  <div className="link">
                     <a
                        href={project.link.live}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Live
                        <span>
                           <i className="fa-solid fa-globe"></i>
                        </span>
                     </a>
                     <a
                        href={project.link.code}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Code
                        <span>
                           <i className="fa-solid fa-code"></i>
                        </span>
                     </a>
                  </div>
               </div>
            </div>
         ))}
         <div className="page-nav">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/resume')}>Resume</button>
         </div>
      </div>
   );
}
