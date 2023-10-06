import React from 'react'
import tinderDog from "../assets/portfolio/tinder.png"
import bennys from "../assets/portfolio/bennys.png"
import sweet from "../assets/portfolio/sweet.png"
import portfolio from "../assets/portfolio/old-Portfolio.png"
import Spotify from "../assets/portfolio/spotify.png"
import Cart from "../assets/portfolio/Cart.png"


import weather from "../assets/portfolio/weather.png"
import SemiColons from "../assets/portfolio/Semicolons-Blog.png"


import {BsBoxArrowUpRight} from "react-icons/bs"
import { FaGithub } from 'react-icons/fa';

import Image from 'next/image'




const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      name: "Benny's Burger",
      desc: "Restaurant UI Design using HTML & SCSS.",
      src: bennys,
      git: "https://github.com/George-Beyrouti/uib_framework_bootstrap_benny-s-burgers-George-Beyrouti",
      demo: "https://uib-framework-bootstrap-benny-s-burgers-george-beyrouti.vercel.app/",
    },
        {
      id: 2,
      name: "Dog Tinder",
      desc: " Social Network for Dog enthusiasts UI Design using HTML & Bootstrap.",
      src: tinderDog,
      git: "https://github.com/George-Beyrouti/UI-Project",
      demo: "https://george-beyrouti.github.io/UI-Project/",
    },
        {
      id: 3,
      name: "The Sweet Spot",
      desc: "Sweet Shop UI Design using HTML & CSS.",
      src: sweet,
      git: "https://github.com/George-Beyrouti/uib-ui-ux-the-sweet-spot-v4-George-Beyrouti",
      demo: "https://uib-ui-ux-the-sweet-spot-v4-george-beyrouti.vercel.app/",
    },
        {
      id: 4,
      name: " my old Portfolio Project",
      desc: "Responsive Portfolio using HTML & CSS only.",
      src: portfolio,
      git: "https://github.com/George-Beyrouti/Portfolio",
      demo: "https://george-beyrouti.github.io/Portfolio/",
    },
      {
      id: 5,
      name: "Desktop Spotify clone",
      desc: "search function with Deezer-API and user Authentication with Firebase.",
      src: Spotify,
      git: "https://github.com/George-Beyrouti/Spotify-clone-using-vanilla-JS-with-Deezer-API",
      demo: "https://george-beyrouti.github.io/Spotify-clone-using-vanilla-JS-with-Deezer-API/",
    },
      {
      id: 6,
      name: "React Weather app",
      desc: "using React-icons & custom CSS.",
      src: weather,
      git: "https://github.com/George-Beyrouti/React-WeatherAPP-Project",
      demo: "https://react-weather-app-project-one.vercel.app/",
    },
          {
      id: 7,
      name: "A Generic Shopping Cart",
      desc: "using Typescript ,React & React-Bootstrap.",
      src: Cart,
      git: "https://github.com/George-Beyrouti/React-Type-Script-Shopping-Cart",
      demo: "https://react-type-script-shopping-cart-george-beyrouti.vercel.app/",
    },
          {
      id: 8,
      name: "Semicolons Blog / Learning platform",
      desc: "a Full-Stack Project. using MERN Technologies",
      src: SemiColons,
      git: "https://github.com/StenderKlaus/Semi-II",
      demo: "https://semifrontend.vercel.app/",
      }
        
    
  ]


  return ( // the md:h-full in the main div is originally an md:h-screen
    <div id="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-full py-10' >

      <div className='max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full py-6'>

        <div className='py-5' >

          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className=' grid lg:grid-cols-3 lg:py-4 lg:px-4 md:grid-cols-3 gap-8 px-8 sm:grid-cols-2 sm:px-0'>


      {portfolios.map(({id, name, desc,  src ,git, demo}) =>(
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col justify-center items-center'>
            <p className='text-xl mt-5'>{name}</p>
            <p className='text-l my-5 mx-3'>{desc}</p>

            <Image height={250} width={250} src={src} alt="screenshot of the Project HomePage" className=' justify-center rounded-md duration-200 hover:scale-105
            '
            />
            {/* still needs an on click handler */} 
            <div className='flex  items-center justify-center' >
              <a target="_blank" href={demo} rel="noreferrer"><button className='flex flex-row w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo <i className='  text-white justify-center px-2 py-1'> <BsBoxArrowUpRight/> </i></button></a>
              <a target="_blank" href={git} rel="noreferrer"><button className='flex flex-row w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Code <i className='  text-white justify-center px-2 py-1'> <FaGithub/> </i></button></a>
            </div>
          </div>
      ))}

          
        </div>
      </div>
    </div>
  );
};

export default Portfolio