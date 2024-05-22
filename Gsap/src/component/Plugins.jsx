import React from 'react'
import Plugin1 from "../assets/motionarteffect-img9.png"
import Plugin2 from "../assets/motionarteffect-img6.png"
import Plugin3 from "../assets/motionarteffect-img7.png"



const Plugins = () => {
  return (
    <div>
    <h1 className="text-center font-Sora font-bold text-4xl text-white mt-40 -mb-24 tracking-tight">An All-Round Plugin With Powerful Features</h1>
    <p className="text-center font-Sora font-bold text-lg text-white mt-40 -mb-12 tracking-wide leading-8 pl-8 pr-8 xl:pr-32 xl:pl-32 ">Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        <div className="flex flex-col md:flex-row mr-5 mt-0 ">
            
          <div className="md:max-1/2 ml-3 mt-40">
            <div className="bg-[#10101b] md:mt-12 md:mr-0 md:ml-8 lg:ml-16 lg:mr-0 rounded-3xl border-gray-600 border-2">
              <img
                src={Plugin1}
                alt="Section 1"
                className="sm:m-9 min-[200px]:p-1
                 md:-pl-12 
                 "
              />
            <div className="mr-5 p-6 ">
                <h2 className="text-xl font-Sora text-white font-semibold ">Light Weight</h2>
                <p className="text-gray-300 font-Sora font-light ">
Motion Art for Elementor is designed to be lightweight.</p>
              </div>
             
              
            </div>
          </div>
          
          <div className=" md:w-1/2   mt-24 ml-3">
            <div className="bg-[rgb(16,16,27)] rounded-3xl border-2 md:ml-2 md:mt-28 md:mr-6 lg:mr-12 lg:ml-8 border-gray-500">
              
              <img
                src={Plugin2}
                alt="Section 2"
                className="sm:m-9 min-[200px]:p-1 
                md:pr-12 md:-pl-12 md:mb-18
                "
              />
            <div className="p-4 mr-5">
                <h2 className="text-xl font-Sora text-white font-semibold mb-4">100% Responsive</h2>
                <p className="text-gray-300 font-Sora font-light ">Create a consistent visual experience across all devices.</p>
              </div>
              
            </div>
          </div>
          <div className=" md:w-1/2 mt-24 ml-3">
            <div className="bg-[rgb(16,16,27)] rounded-3xl border-2 md:ml-2 md:mt-28 md:mr-6 lg:mr-12 lg:ml-8 border-gray-500">
              <img
                src={Plugin3}
                alt="Section 2"
                className="sm:m-9 min-[200px]:p-1 
                md:pr-12 md:-pl-12 md:mb-18
                "
              />
            <div className="p-4 mr-5">
                <h2 className="text-xl font-Sora text-white font-semibold mb-4">User Friendly Interface</h2>
                <p className="text-gray-300 font-Sora font-light ">Ensure a smooth experience for both applicants and administrators.</p>
              </div>
              
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Plugins