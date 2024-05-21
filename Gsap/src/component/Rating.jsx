import React from 'react'
import Envato from "../assets/motionarteffect-img2.png"
import G2 from "../assets/motionarteffect-img1.png"
import Wordpress from "../assets/motionarteffect-img3.png"
import Star from "../assets/motionarteffect-img4.png"

const Rating = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <p className='mt-12 mb-20 text-white text-lg text-center'>Trusted by thousands of users around the world</p>
      <div className='flex items-center justify-center'>
      <img src={Envato} alt=''/>
      <img  className="-mt-6 p-2 "src={Star} alt=""/>
      </div>
      <div className='-mt-9 ml-24 mb-12'>
      <h2 className='text-gray-300 font-extrabold font-Sora'>4.5 Score,9 Reviews</h2>
      </div>
      <div className='flex  items-center justify-center'>
      <img src={G2} alt=''/>
      <img  className="-mt-6 p-2 "src={Star} alt=""/>
      </div>
      <div className='-mt-9 ml-24 mb-12'>
      <h2 className='text-gray-300 font-extrabold font-Sora'>4.5 Score,9 Reviews</h2>
      </div>
      <div className='flex  items-center justify-center'>
      <img src={Wordpress} alt=''/>
      <img  className="-mt-6 p-2 "src={Star} alt=""/>
      </div>
      <div className='-mt-9 ml-24 mb-12'>
      <h2 className='text-gray-300 font-extrabold font-Sora'>4.5 Score,9 Reviews</h2>
      </div>
      </div>
  )
}

export default Rating