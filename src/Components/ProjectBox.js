import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const projectname = projectName.replace(" ","");
  const projectName1 = projectname.replace(" ","")
  const desc = {
    TopCoursesDesc : "Using API I have built an attractive website which fetch the top courses of a particular educational website I have applied various filter on it using which one can access courses of particular domain Technologies used- React.js, Tailwind",
    TopCoursesGithub : "https://github.com/Sktiwary9122/Top-courses.git",
    TopCoursesWebsite : "https://top-courses-byme.netlify.app",

    RandomGifGeneratorDesc: "This is a Random gif generator website which is built on th e api provided by GIPHY an gif company. This project is built with React, HTML and tailwind. This is a fun to explore webite",
    RandomGifGeneratorGithub : "https://github.com/Sktiwary9122/Random-gif.git",
    RandomGifGeneratorWebsite : "https://gif-generator-byme.netlify.app",

    FoodDeliverySystemDesc:"Developed a PHP/MYSQL based food delivery platform with user freindly navigation and order customization. Implemented real-time order tracking and secure payment intgration. Developed menu management for restaurants and a feedback system for customers.",
    
    
    SmartHomeSystemDesc:"Iot Smart Home System with Cost Effective Solutions. Developed an IOT-based smart home system focusing on cost effective automation and energy efficiency. Implemented control for lighting,HVAC and security using  low cost microcontroller.",

    "v-noteDesc":"V-Note is made using python libraries like Media-pipe and Open cv	It is a hand gesture-controlled note taking app. which help the users to get rid of the traditional pen and paper system or even the digital pen system This was a group project which was made in an 24 hours long hackathon",
    "v-noteGithub":"https://github.com/Sktiwary9122/HacknWin-slytherin-T-55-.git",
    "v-noteWebsite":"",
  }

  let show ='';
  let hide ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
  if(desc[projectName + 'Website']===""){
    hide="none";
  }

    
  return (
    <div className='md:w-[22rem] w-[20rem] h-[33rem] border-4 border-[#431f47] pt-8 px-4 rounded-xl hover:shadow-[0_14px_20px_0_#d9f02a] hover:border-4 hover:border-[#d9f02a]' > 
        <img className='border-2 rounded-xl scale-105 bg-black object-contain' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3 className='max-w-[20rem] flex text-center uppercase font-bold text-2xl'>{projectName}</h3>
            <br />
            <div className='text-justify text-white '>
              {desc[projectName1 + 'Desc']}
            </div>
            
            <br />
            <div className='flex justify-evenly w-[100%] items-center absolute bottom-4 right-2'>

            
            <a style={{display:show}} rel="noreferrer" href={desc[projectName1 + 'Github']} target='_blank' >
              <button className='flex gap-2 bg-[#431f47] text-xl items-center justify-center p-2 px-5 rounded-xl font-bold hover:bg-[#d9f02a] hover:text-black '><FaGithub/> Github</button>
            </a>

            <a style={{display:hide}} rel="noreferrer" href={desc[projectName1 + 'Website']} target='_blank'>
              <button className='flex gap-2 bg-[#431f47] text-xl items-center justify-center p-2 rounded-xl hover:bg-[#d9f02a] hover:text-black font-bold'><CgFileDocument/> Live Demo</button>
            </a>
            </div>
        </div>
    </div>
  )
}

export default  ProjectBox