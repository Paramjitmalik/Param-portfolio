import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.jpg';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";
import {CiCoffeeCup} from "react-icons/ci";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  function PauseOnHover() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
  }
  
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Paramjit</b></h1>
          <Typed/>
          <div className='links'>
              <div className='HeaderLinks'>
              {/* <h4>Connect with me</h4> */}
                <a href="https://github.com/Paramjitmalik" target='_blank'><FaGithub/></a>
                <a href="http://www.linkedin.com/in/paramjit-malik-a97b2b249" target='_blank'><FaLinkedin/></a>
                <a href="mailto:paramjitmalik1@gmail.com">
                  <GrMail />
                </a>
                <a href="https://leetcode.com/u/paramjitmalik1/" target="_blank"><SiLeetcode/></a>
              </div>
          </div>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>INTRO</b></h1>
          <ul>
            <li>I specialize in crafting dynamic and responsive websites using modern technologies like <b>React</b> and <b>Javascript</b>.</li>
            <li>With a strong foundation in <b>DSA</b></li>
            <li>I also have solid programming skills in <b>C++</b>, <b>OOPS</b>and <b>DBMS</b> and some experience with <b>Python</b> and trained some <b>Machine learning </b> using <b>Tensor flow</b> </li>
            <li><span className=''>Explore my portfolio to see the projects I've brought to life!</span></li>
          
          <br></br>
          <br></br>
          
          
          <br></br>
          </ul>
        </div>
        <Tilt>
          <img className='Avatar w-48 h-96 object-cover rounded-full' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home