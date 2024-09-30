import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4 className='inline-flex items-center gap-2'>Build with <span> <FaHeart/></span> by Paramjit Malik</h4>
      {/* <h4>Copyright &copy; 2023 DS</h4> */}
      <div className='footerLinks'>
        <a href="https://github.com/Paramjitmalik" target='_blank'><FaGithub/></a>
        <a href="http://www.linkedin.com/in/paramjit-malik-a97b2b249" target='_blank'><FaLinkedin/></a>
        <a href="mailto:paramjitmalik1@gmail.com">
      <GrMail />
    </a>
        <a href="https://leetcode.com/u/paramjitmalik1/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer