
import React from 'react'
import Browser from "../assets/motionarteffect-img8.png"

const CardImage = () => {
  return (
    <div className="flex flex-col 2xl:mr-20 2xl:ml-20 xl:ml-16 xl:mr-16 mr-6">
        
    <div className="mt-16 ml-12 ">
      <div className="bg-[#10101b] rounded-3xl border-gray-600 border-2">
      <div className="mr-5 p-6 flex flex-col items-center">
          <h2 className="text-xl font-Sora text-white font-semibold mb-4">Supported by All Popular Browsers</h2>
          <p className="text-gray-300 font-Sora font-light ">Supported by All Popular Browsers</p>
        </div>
       
        <img
          src={Browser}
          alt="Section 1"
          className="min-h-[100%] h-auto p-5 md:ml-24 lg:ml-52 xl:ml-96
           "
        />
        
      </div>
    </div>
    </div>
  )
}

export default CardImage


