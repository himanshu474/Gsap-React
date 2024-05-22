import React from 'react'
import Envato from "../assets/motionarteffect-img2.png"
import G2 from "../assets/motionarteffect-img1.png"
import Wordpress from "../assets/motionarteffect-img3.png"
import Star from "../assets/motionarteffect-img4.png"

const Rating = () => {
  return (
    <div className="container mx-auto text-center">
    <p className="my-20 font-Sora text-gray-300 text-lg">Trusted by thousands of users around the world</p>
    <div className="flex flex-wrap justify-center">
      <div className="w-full sm:1/4 lg:w-1/3 p-4">
        <div className="flex items-center justify-center mb-4">
          <img src={Envato} alt="Image 1" className="mr-4" />
          <div>
            <img src={Star} alt="Star Rating 1" className=" mb-1" />
            <p className='text-gray-300 font-Sora font-bold'>4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center mb-4">
          <img src={G2} alt="Image 2" className="mr-4" />
          <div>
            <img src={Star} alt="Star Rating 2" className="mb-1" />
            <p  className='text-gray-300 font-Sora font-bold'>4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center mb-4">
          <img src={Wordpress} alt="Image 3" className="mr-4" />
          <div>
            <img src={Star} alt="Star Rating 3" className=" mb-1" />
            <p  className='text-gray-300 font-Sora font-bold'>4.5 Score, 9 Reviews</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default Rating