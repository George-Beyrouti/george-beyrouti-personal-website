import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiFillPhone} from 'react-icons/ai';
import {SiGooglemaps} from 'react-icons/si'


const SocialLinks = () => {

  const links = [
    {
      id:1, 
      child: (
            <>
            LinkedIn <FaLinkedin size={30}/>
            </>
      ),
      href: "https://de.linkedin.com/in/george-beyrouti",
      style: "rounded-tr-md"
    },
      {
      id:2, 
      child: (
            <>
            GitHub <FaGithub size={30}/>
            </>
      ),
      href: "https://github.com/George-Beyrouti",
    },
      {
      id:3, 
      child: (
            <>
            E-Mail <HiOutlineMail size={30}/>
            </>
      ),
      href: "mailto:georges.beyrouti@gmail.com",
    },
      {
      id:4, 
      child: (
            <>
            Phone <AiFillPhone size={30}/>
            </>
      ),
      href: "tel:+4915752144116",
    },
      {
      id:5, 
      child: (
            <>
            Location <SiGooglemaps size={30}/>
            </>
      ),
      href: "https://www.google.com/maps/place/58452+Witten/@51.4171084,7.2950111,13z/data=!4m5!3m4!1s0x47b9218634150e0d:0x1c27f284915b8340!8m2!3d51.4177772!4d7.3264627",
    },
          {
      id:6, 
      child: (
        // put the resume in the public folder
            <>
            CV <BsFillPersonLinesFill size={30}/>
            </>
      ),
      href: "CV George Beyrouti Deutsch.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex lg:flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map( ({id, child, href, style, download})=>(
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 "  + style }>
            <a  href={href}
              className='flex justify-between items-center w-full text-white'
              download={download} 
              target= '_blank' 
              rel='noreferrer'>
            {child}
            </a>
          </li>
        ))}

        
      </ul>
    </div>
  )
}

export default SocialLinks