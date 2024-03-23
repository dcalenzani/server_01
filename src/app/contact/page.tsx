'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Hamburguer from '@/components/HamburguerMenu';
import DarkModeToggle from '@/components/DarkToggle';

export default function ContactForm() {
  const [fromName, setFromName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('Thanks for reaching me, please fill the form below and I will get back to you as soon as possible.');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send('default_service', 'template_l219ahi', {
      from_name: fromName,
      email: email,
      message: message
    }, process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setFromName('');
       setEmail('');
       setMessage('');
       setFeedback('Your message has been sent successfully!');
    }, (err) => {
       console.log('FAILED...', err);
       setFeedback('Failed to send your message. Please try again later.');
    });
  };

  return (
    <main className="flex flex-col bg-zinc-300 dark:bg-zinc-950 h-screen w-screen text-inherit place-items-center justify-center text-center dark:text-slate-50 p-0">
      <Hamburguer/>
      <DarkModeToggle></DarkModeToggle>
      <h1 className='text-4xl dark:text-slate-50'>Contact Me</h1>
      <div id="form and prompt" className='flex flex-col justify-center items-center py-32 md:py-8 dark:bg-zinc-950 shadow-zinc-200'>
        <div className='border border-transparent rounded-lg p-10 w-2/3 mx-5 shadow-fours'>
          {feedback}<br/>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
              Name:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="from_name" 
                  type="text" 
                  placeholder="Your Name" 
                  value={fromName} 
                  onChange={(e) => setFromName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  type="text" 
                  placeholder="Your Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                      id="message" 
                      placeholder="Your Message" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-zinc-600 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
              Send Email
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}