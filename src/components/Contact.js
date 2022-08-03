import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
   const navigate = useNavigate();
   const form = useRef();

   const sendEmail = (event) => {
      event.preventDefault();
      emailjs
         .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
         )
         .then(
            (result) => {
               toast('Message Sent, will get to you back shortly');
               event.target.reset();
            },
            (error) => {
               toast(error.text);
            }
         );
   };

   return (
      <div className="contact">
         <ToastContainer position="bottom-center" limit={1} />
         <h1 className="fs-vl">Contact Me</h1>
         <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
               <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  required
               />
            </div>
            <div className="form-group">
               <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
               />
            </div>
            <div className="form-group">
               <textarea
                  className="form-control"
                  type="text"
                  name="message"
                  placeholder="Message"
                  rows="11"
                  required
               />
            </div>
            <div className="form-group">
               <input
                  type="submit"
                  value="Send message"
                  className="form-control"
               />
            </div>
         </form>
         <div className="page-nav">
            <button onClick={() => navigate('/resume')}>Resume</button>
            <button onClick={() => navigate('/')}>Home</button>
         </div>
      </div>
   );
}
