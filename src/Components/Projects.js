import React from 'react';
import { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import image from '../images/image.png'
import topcourses from '../images/top-courses.png'
import SmartHome2 from '../images/SmartHome2.webp'
import './Project.css';
import weather from '../images/weather.png'
import password from '../images/password.png'
import blog from '../images/blog.png'
import vnote from '../images/vnote.png'
import Food from '../images/FOOD.jpg'
import Tilt from 'react-parallax-tilt';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import slideAnime from '../LottieFiles/Animation - 1725975411559.json'
import Lottie from "lottie-react";

const Projects = () => {
 
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) 
    }
  }, [emblaApi])


  return (
    <div className='projectContainer' >
    <div className='inline-flex items-center justify-center mx-auto w-[100%]'>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <p className='mt-16 ml-6'>swipe to see</p>
      <Lottie className="mt-16 w-16" animationData={slideAnime} loop={true} /> 
    </div>
      <div className='project-head' ref={emblaRef}>
      <div className='project' >
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={SmartHome2} projectName="Smart Home System"/>
          </Tilt>
        </div>       
        <div className='boxes'>
          <Tilt>
            <ProjectBox projectPhoto={Food} projectName="Food Delivery System" />
          </Tilt>
        </div>
      
        </div>
        </div>
      </div>
  )
}



export default Projects