import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import sass from "../assets/sass.png"
import bootstrap from "../assets/bootstrap.png"
import javascript from "../assets/javascript.png"
import typescript from "../assets/typescript.png"
import jquery from "../assets/jquery.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import reactstrap from "../assets/react-bt.png"
import tailwind from "../assets/tailwind.png"
import firebase from "../assets/firebase.png"
import node from "../assets/node.png"
import express from "../assets/express.png"
import mongodb from "../assets/mongoDB.png"
import sql from "../assets/sql.png"
import github from "../assets/github.png"
import seo from "../assets/seo.png"
import google from "../assets/Google.png"
import spss from "../assets/spss.png"


import Image from 'next/image'

const Skills = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500", 
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-400", 
    },
    {
      id: 3,
      src: sass,
      title: "SASS & SCSS",
      style: "shadow-pink-500", 
    },
    {
      id: 4,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400", 
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500", 
    },
    {
      id: 6,
      src: typescript,
      title: "TypeScript",
      style: "shadow-sky-500", 
    },
    {
      id: 7,
      src: jquery,
      title: "jQuery",
      style: "shadow-blue-400", 
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400", 
    },
    {
      id: 9,
      src: nextjs,
      title: "Next-JS",
      style: "shadow-white", 
    },
    {
      id: 10,
      src: reactstrap,
      title: "React-Bootstrap",
      style: "shadow-sky-400", 
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400", 
    },
    {
      id: 12,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-600", 
    },
      {
      id: 13,
      src: node,
      title: "Node-JS",
      style: "shadow-green-700", 
    },
    {
      id: 14,
      src: express,
      title: "Express-JS",
      style: "shadow-white", 
    },
      {
      id: 15,
      src: mongodb,
      title: "Mongo-DB",
      style: "shadow-green-500", 
    },
      {
      id: 16,
      src: sql,
      title: "SQL",
      style: "shadow-sky-500", 
    },
    {
      id: 17,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400", 
    },
    {
      id: 18,
      src: seo,
      title: "SEOs",
      style: "shadow-green-400", 
    },
    {
      id: 19,
      src: google,
      title: "Google Analytics",
      style: "shadow-yellow-500", 
    },
    {
      id: 20,
      src: spss,
      title: "SPSS",
      style: "shadow-red-400", 
    },
  ]

  return (
    <div id="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-full pt-10'>

      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Skills</p>
          <p className='py-6'>These are the technologies I have worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {techs.map(({id, src, title, style})=> (

            <div key={id} className={'shadow-md hover:scale-110 duration-500 py-2 rounded-lg ' + style }>
              <Image src={src} alt="" className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>



          ))}

          
        </div>
      </div>
    </div>
  )
}

export default Skills