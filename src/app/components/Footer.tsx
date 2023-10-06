import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {AiFillPhone} from 'react-icons/ai';
import {SiGooglemaps} from 'react-icons/si'


const Footer = () => {
    const links = [
    {
      id:1, 
      child: (
        // put the resume in the public folder
            <>
            <span className='mx-1 md:text-md sm:text-sm text-xs group-hover:before:content-["Download"] lg:before:content-["Download"]  md:p-0'> CV</span>
            </>
      ),
      href: "CV George Beyrouti Deutsch.pdf",
      download: true,
    },
    {
      id:2, 
      child: (
            <>
              <FaLinkedin size={16}/>
            </>
      ),
      href: "https://de.linkedin.com/in/george-beyrouti",
    },
      {
      id:3, 
      child: (
            <>
              <FaGithub size={16}/>
            </>
      ),
      href: "https://github.com/George-Beyrouti",
    },
      {
      id:4, 
      child: (
            <>
              <HiOutlineMail size={16}/>
            </>
      ),
      href: "mailto:georges.beyrouti@gmail.com",
    },
      {
      id:5, 
      child: (
            <>
              <AiFillPhone size={16}/>
            </>
      ),
      href: "tel:+4915752144116",
    },
      {
      id:6, 
      child: (
            <>
              <SiGooglemaps size={16}/>
            </>
      ),
      href: "https://www.google.com/maps/place/58452+Witten/@51.4171084,7.2950111,13z/data=!4m5!3m4!1s0x47b9218634150e0d:0x1c27f284915b8340!8m2!3d51.4177772!4d7.3264627",
    },
  ];

  return (   
      <div className='  max-w-screen-full w-full bg-gray-800 text-white lg:static  px-2 sticky bottom-0  pt-2 '>
        <div className='max-w-screen flex flex-row py-1 mx-auto justify-around items-center'>
            <div>
              <div className=" lg:text-lg md:text-md sm:text-sm text-xs">Designed by:</div>
              <div className=" lg:text-lg md:text-md sm:text-sm text-xs">George Beyrouti.</div>
              <div className=" lg:text-lg md:text-md sm:text-sm text-xs my-1">Using React & Tailwind</div> 
            </div>

            <div className='text-center text-xl text-white mb-2 max-w-2xl flex justify-center items-center flex-wrap max-h-sm '>
              {links.map( ({id, child, href, download})=>(
                        <div key={id} className=" inline-flex
                        rounded-full bg-gray-500 text-sm
                        p-1 md:p-1.5 xl:p-2 
                        mx-1 my-1 md:mx-2
                        max-hover:first::mx-1 
                        max-lg:hover:scale-125  lg:mx-3 max-md:hover:scale-110 
                        max-sm:hover:scale-105  

                        hover:scale-105 
                        max-xl-:hover:first:scale-100 max-lg:hover:first:scale-100
                        max-md:hover:first:scale-75
                        max-sm:hover:first:scale-75 max-hover:first:scale-75 
                        group "  >
                          <a  href={href}
                            className='group flex justify-center 
                            items-center text-white '
                            download={download} 
                            target= '_blank' 
                            rel='noreferrer'> 
                          {child} 
                          </a>
                        </div>
                      ))}
            </div>
          </div>
      </div>
    )}

export default Footer







