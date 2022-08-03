import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext({
   mobile: null,
   active: null,
   navOpen: null,
   toggleNav: () => {},
   toggleActive: (activeId) => {},
   contents: [],
});

export default function AppContextProvider(props) {
   const mobileCheck = matchMedia('(max-width: 950px)');

   const [mobile, setMobile] = useState(mobileCheck.matches);
   const [navOpen, setNavOpen] = useState(false);
   const [active, setActive] = useState('');
   const [contents] = useState([
      {
         id: 0,
         title: 'HOME',
         path: '/',
      },
      {
         id: 1,
         title: 'WORK',
         path: '/work',
      },
      {
         id: 2,
         title: 'RESUME',
         path: '/resume',
      },
      {
         id: 3,
         title: 'CONTACT',
         path: '/contact',
      },
   ]);

   // Update state on window resize
   useEffect(() => {
      function handleScreenChange() {
         setMobile(mobileCheck.matches);
      }
      mobileCheck.addEventListener('change', handleScreenChange);
      return () => {
         mobileCheck.removeEventListener('change', handleScreenChange);
      };
   });

   const toggleNav = () => {
      if (mobile) {
         setNavOpen((state) => !state);
      }
   };

   const toggleActive = (activeId) => {
      setActive(activeId);
   };

   return (
      <AppContext.Provider
         value={{ mobile, navOpen, active, toggleActive, toggleNav, contents }}
      >
         {props.children}
      </AppContext.Provider>
   );
}
