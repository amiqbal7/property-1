import React from 'react'
import hero1 from "../assets/hero1.jpg"

const hero = () => {
  return (
    <div className='md:mx-10  mx-5'>
        <div clas>
            <h1 className='md:text-7xl text-3xl font-bold text-center md:text-left pt-16 md:pt-28 text-white'>BUILD YOUR FUCKING HOUSE FOR </h1>
            <div className='flex z-10 '>
              <div className='md:mr-5 mr-2 my-4 text-left text-[7px] xs:hidden'>
                <p className=''>src\components\hero.js Line 9:13:img
                    'Navbar' is defined but never used</p>
                <p>img elements must have an alt prop, either with meaningful text</p>
                <p>or an empty string for decorative images meaningful text meaningful</p>
              </div>
              <h1 className='md:text-7xl text-3xl font-bold my-3 text-white '>BETTER LIFE'S WITH FAMILY AND CHILL.</h1>
            </div>
            <div className='z-0'>
              <img className='py-5' src={hero1}></img>
            </div>
              
        </div>
        <div className=''>
          <hr className='text-black'></hr>
          <div className='md:grid grid-cols-2 pt-16'>
            <h1 className='font-bold text-xl pb-1 text-white'>COMFORT IS PRIORITY</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur .</p>
          </div>
          <div className='drop-shadow-xl[rgba(0, 0, 0, 0.2)] bg-white text-black flex justify-between container py-7 max-w-7xl mx-auto px-6 my-16'>
            <div>
            <p className='xl text-3xl font-bold md:text-4xl'>+20K</p>
            <p className='text-center'>Customer</p>
            </div>
            <div>
            <p className='xl text-3xl font-bold md:text-4xl'>+20K</p>
            <p className='text-center'>Customer</p>
            </div>
            <div>
            <p className='xl text-3xl font-bold md:text-4xl'>+20K</p>
            <p className='text-center'>Customer</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default hero
