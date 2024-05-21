import React from 'react'
import Logo from "../assets/MotionArtEffect-logo.png"


const Header = () => {
  return (
    <div className='flex mx-2 my-10
    justify-between top-20 '>
        <img className="sm:ml-10 lg:ml-32"src={Logo} alt=""/>
        <button className='mx-5 border-2 bg-white rounded-lg
         text-black border-white px-12  text-lg duration-100
         hover:bg-inherit hover:border-gray-300
         hover:text-white font-normal xl:mr-32 lg:mr-4 hidden lg:block'>
            Purchase Now
        </button>
    </div>
  )
}

export default Header