"use client"

import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef<HTMLFormElement | null>(null); // Specify the type explicitly as HTMLFormElement | null

  const [confirmation, setConfirmation] = useState<string>("")

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const serviceID: string | undefined = process.env.NEXT_PUBLIC_serviceID;
    const templateID: string | undefined = process.env.NEXT_PUBLIC_templateID;
    const publicKey: string | undefined = process.env.NEXT_PUBLIC_publicKey;
    
    if (!serviceID || !templateID || !publicKey) {
      console.error("Environment variables are missing.");
      return;
    }
    
    if (form.current) {
      try {
        console.log(serviceID, templateID, publicKey);
        const result = await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
        console.log(result.text);
        setConfirmation("Your Message was sent. Thank you!");
        form.current!.reset();
      } catch (error) {
        console.error((error as { text: string }).text); // Explicitly cast error to the expected type
        setConfirmation("Something went wrong with the Messaging Service. Please send me an email instead.");
      }
    }
    
  };
  

    

  return (
    <div id="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'> 
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8' 
        >         
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          
          <p className='py-4'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form className='flex flex-col w-full md:w-1/2' ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder='Please Enter your Name here' required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <input type="email" name="email" placeholder='Please Enter your E-mail here' required className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />

            <textarea name="message"  rows={8} placeholder="Please enter your message here" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'"></textarea>

            <button type='submit' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets talk</button>

            <h4 className='p-3 my-4 bg-transparent border-2 rounded-md text-white' placeholder='message confirmation' >message confirmation status: {confirmation}</h4>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Contact;