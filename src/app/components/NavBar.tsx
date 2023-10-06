"use client"

import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from 'next/link'


const NavBar = () => {

  const[nav, setNav] = useState (false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'skills'
    },
    {
      id: 5,
      link: 'contact'
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-3 text-white  bg-black sticky top-0 z-10'>
      <div>
        <h1 className="font-signature text-4xl md:text-5xl ml-2">George Beyrouti</h1>
      </div>

      <ul className='hidden md:flex'>

      {links.map(({id, link}) =>(
      <li key={id} className='px-4
        cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200'>
          <Link href={`#${link}`}>{link}</Link>
          </li> 
        ))}
        
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        
        {nav ? <FaTimes size ={30} /> : <FaBars size={30}/>}
      </div>

        {nav && ( <ul className ="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500  " >
        {links.map(({id, link}) =>(
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link onClick={()=>setNav(!nav)} href={`#${link}`}>{link}</Link>
          </li>  
            ))}
        
      </ul>)}


     
    
    </div>

  )
}

export default NavBar