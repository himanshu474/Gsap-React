import React from 'react'
import Stick from "../assets/motionarteffect-img5.png"
import { FaArrowRight } from "react-icons/fa";



const Button = () => {

  return (
    <div  className="container mx-auto text-center mt-32">
    <div className="mt-8 md:flex md:items-start md:justify-between">
      <div className="md:w-1/2 md:text-left 2xl:ml-7 ">
        <p className="text-2xl text-gray-300 font-Sora font-semibold mb-4 tracking-wider">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
        <p className="text-sm md:text-base tracking-wider text-gray-300 font-Sora font-semibold mb-6 leading-loose">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
        <button className="mt-4 bg-gradient-to-r to-[#F87516] from-[#5E11FF] 
           font-Sora text-[18px] rounded-xl text-white
         border-white  font-light py-4 px-3 ">
            Purchase From Envato<FaArrowRight className=" float-end mr-3 ml-5 mt-1 "/></button>
      </div>
      <img src={Stick} alt="Image" className="mb-6 mx-auto mt-8 md:mt-0 h-auto md:w-60 md:h-auto md:order-last" />
    </div>
  </div>
  )
}

export default Button