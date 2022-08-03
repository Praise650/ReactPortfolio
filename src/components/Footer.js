import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
   display: flex;
   gap: 13px;
   justify-content: center;

   @media (max-width: 950px) {
      gap: 35px;
   }
`;

const Div = styled.div``;

const A = styled.a`
   display: flex;
   gap: 5px;
   align-items: center;
   text-decoration: none;
   color: hsl(var(--text-clr) / 0.6);
   font-size: 20px;

   &:hover {
      color: hsl(var(--text-clr));
   }

   @media (max-width: 950px) {
      color: hsl(var(--text-clr));
      font-size: var(--fs-lg);
   }
`;

const P = styled.p`
   font-size: var(--fs-sm);

   @media (max-width: 950px) {
      display: none;
   }
`;

export default function Footer() {
   return (
      <StyledFooter>
         <Div>
            <A
               href="https://www.linkedin.com/in/fabiyi-johnson-720648143/"
               target="_blank"
               rel="noreferrer"
            >
               <i className="fa-brands fa-linkedin"></i>
               <P>LinkedIn</P>
            </A>
         </Div>
         <Div>
            <A
               href="https://github.com/johnsiner"
               target="_blank"
               rel="noreferrer"
            >
               <i className="fa-brands fa-github"></i>
               <P>Github</P>
            </A>
         </Div>
         <Div>
            <A
               href="https://twitter.com/Iam_johnsin"
               target="_blank"
               rel="noreferrer"
            >
               <i className="fa-brands fa-square-twitter"></i>
               <P>Twitter</P>
            </A>
         </Div>
      </StyledFooter>
   );
}
