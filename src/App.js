import { Fragment, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import { AppContext } from './store';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Squash as Hamburger } from 'hamburger-react';
import Nav from './components/Nav';

function App() {
   const { mobile, navOpen, toggleNav, contents } = useContext(AppContext);

   return (
      <div className="App">
         <div className="left">
            {!mobile && <Header />}
            {mobile && (
               <Fragment>
                  <div className="menu-icon">
                     <Hamburger
                        size={25}
                        toggled={navOpen}
                        toggle={() => toggleNav()}
                     />
                  </div>
                  {navOpen && (
                     <div className="mobile-nav">
                        <Nav content={contents} />
                     </div>
                  )}
               </Fragment>
            )}
         </div>
         <main className="right">
            {!navOpen && (
               <Routes>
                  <Route
                     path="/"
                     element={mobile ? <Header /> : <Projects />}
                  />
                  <Route path="/work" element={<Projects />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            )}
         </main>
      </div>
   );
}

export default App;
