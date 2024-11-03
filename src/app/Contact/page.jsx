'use client';
import React, { useState } from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const[name,setName] = useState('');
    const[contact, setContact] = useState('');
    const[email, setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const[message, setMessage] = useState('');

    const dialPhonenumber = () => {
        // Create a tel: URL
        const phoneURL = `tel:${"+918886266647"}`;
        // Redirect to the phone dialer
        window.location.href = phoneURL;
      };

    const sendEmail = async (event) => {
        event.preventDefault();
        const formData = {
          action: 'sendemail',
          name,
          contact,
          email,
          subject,
          message
        };
    
        try {
          const res = await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
          }
    
          const data = await res.json();
          console.log('Email response:', data); // Log the successful response
          toast.success('Email sent successfully!',{theme:'dark'});
    
          setName('');
          setContact('');
          setEmail('');
          setSubject('');
          setMessage('');
        } catch (err) {
          console.error('Error sending email:', err);
          toast.error('Failed to send email.',{theme:'dark'});
        }
      };

  return (
    <div className='mt-16 pt-1 px-6 relative border-b border-neutral-900 pb-4 lg:mb-35'>
      <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-white">Wanna get to know me better ?</h2>
      <p className="mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have an Opportunity for me? Wanna Colab? Just be Friends? Let me know... </p>


  <div className='py-2'>
  <div className='w-full flex flex-row space-x-8 justify-center'>
      <a href='https://www.linkedin.com/in/aditya-challa-0aa98b1b1/'><FaLinkedin className='w-16 h-16 text-gray-200 font-light'/></a>
      <a href='https://github.com/Challa-Aditya'><FaGithubSquare className='w-16 h-16 text-gray-200 '/></a>
      <a href='https://www.instagram.com/aditya_challa02/'><FaInstagramSquare className='w-16 h-16 text-gray-200'/></a>
      <button onClick={dialPhonenumber}><FaSquarePhone className='w-16 h-16 text-gray-200'/></button>
  </div>
  <div className="w-full py-2 px-4 mx-auto max-w-screen-md">
      <form action="#" className="space-y-6" onSubmit={sendEmail}>
          <div>
              <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-300">Name</label>
              <input type="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-gray-950 border border-gray-300 text-white text-md rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-600 " placeholder="Stevie" required/>
          </div>
          <div>
              <label htmlFor="contact" className="block mb-2 text-md font-medium text-gray-300">Contact</label>
              <input type="contact" 
              value={contact}
              onChange={(e) => setContact(e.target.value)} 
              className="shadow-sm bg-gray-950 border border-gray-300 text-white text-md rounded-lg focus:ring-primary-500 
              focus:border-primary-500 block w-full p-2.5 placeholder-gray-600" placeholder="9876543210"/>
          </div>
          <div>
              <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-300">Your email</label>
              <input type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-950 border border-gray-300 text-white text-md 
              rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-600" placeholder="abc@johndoe.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-md font-medium text-gray-300">Subject</label>
              <input type="text" 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-md text-white bg-gray-950 rounded-lg border
               border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-600" 
               placeholder="Colab" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-300">Your message</label>
              <textarea id="message" rows="3" 
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
              className="block p-2.5 w-full text-md text-white bg-gray-950 rounded-lg shadow-sm border
               border-gray-300 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-600 " 
               placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit
           hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send email</button>

      </form>
  </div>
  </div>
  <ToastContainer className='mt-6'/>
    </div>
  )
}

export default Contact;
