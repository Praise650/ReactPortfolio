import './Header.css';
import avatar from '../assets/user.svg';
import Nav from './Nav';
import { useContext } from 'react';
import { AppContext } from '../store';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export default function Header() {
   const navigate = useNavigate();
   const { contents, mobile } = useContext(AppContext);
   const navContent = contents.filter((content) => content.title !== 'HOME');

   return (
      <div className="header">
         <div className="details">
            <div className="avatar">
               <img src={avatar} alt="avatar" />
            </div>
            <div>
               <h2 className="fs-md fw-b">Fabiyi Johnson</h2>
               <h3 className="fs-sm">Frontend, web developer</h3>
            </div>
         </div>
         <p>
            Hello There! I help bring to life aesthetic and intuitive
            <span> interfaces that connect users</span> to amazing products and
            experiences. <br></br>Check out my work.
         </p>
         {!mobile && (
            <div className="nav">
               <Nav content={navContent} />
            </div>
         )}
         <div className="explore">
            {mobile && (
               <button onClick={() => navigate('/work')}>Explore</button>
            )}
         </div>
         <div className="footer">
            <Footer />
         </div>
      </div>
   );
}
