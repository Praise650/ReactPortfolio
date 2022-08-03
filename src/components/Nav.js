import React, { useContext, useEffect } from 'react';
import './Nav.css';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../store';

export default function Nav(props) {
   const { mobile, active, toggleActive, toggleNav, contents } =
      useContext(AppContext);
   const path = useLocation();

   //  Update 'active' state on window.location change
   useEffect(() => {
      let activeID = contents.find((content) => {
         return content.path === path.pathname;
      }).id;
      if (activeID === 0) {
         mobile ? toggleActive(activeID) : toggleActive(1);
      } else {
         toggleActive(activeID);
      }
   }, [path.pathname, contents, mobile, toggleActive]);

   return (
      <nav>
         <ul>
            {props.content.map((content, index) => (
               <li
                  key={content.id}
                  className={active === content.id ? 'active' : ''}
               >
                  <Link onClick={() => toggleNav()} to={content.path}>
                     {content.title}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}
