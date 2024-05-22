import React from 'react'
import Section from "../assets/motionarteffect-img11.png"
import Page from "../assets/motionarteffect-img10.png"


const SectionPage = () => {
  return (
<div>
<p className="text-center font-Sora font-bold text-2xl text-white mt-40 mb-12">Apply On Any Section Or Enable For Whole Page</p>
    <div className="flex flex-col md:flex-row mr-5  ">
        
      <div className="md:w-1/2 md:order-1 ml-3 mt-16">
        <div className="bg-[#10101b] md:mt-12 md:mr-0 md:ml-8 lg:ml-16 lg:mr-0 rounded-3xl border-gray-600 border-2">
        <div className="mr-5 p-6 ">
            <h2 className="text-xl font-Sora text-white font-semibold mb-4">Apply On Section</h2>
            <p className="text-gray-300 font-Sora font-light ">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
          </div>
         
          <img
            src={Section}
            alt="Section 1"
            className="sm:m-9 min-[200px]:p-1
            md:pr-12 md:-pl-12
             "
          />
          
        </div>
      </div>
      
      <div className=" md:w-1/2 md:order-2  mt-24 ml-3">
        <div className="bg-[rgb(16,16,27)] rounded-3xl border-2 md:ml-2 md:mt-28 md:mr-6 lg:mr-12 lg:ml-8 border-gray-500">
        <div className="p-4 mr-5">
            <h2 className="text-xl font-Sora text-white font-semibold mb-4">Apply On Page</h2>
            <p className="text-gray-300 font-Sora font-light ">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
          </div>
          
          <img
            src={Page}
            alt="Section 2"
            className="sm:m-9 min-[200px]:p-1 
            md:pr-12 md:-pl-12 md:mb-18
            "
          />
          
        </div>
      </div>
    </div>
</div>
  )
}

export default SectionPage