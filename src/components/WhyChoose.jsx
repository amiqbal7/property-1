import React from 'react'
import { CiAlarmOn } from "react-icons/ci";

const WhyChoose = () => {
  return (
    <div className='mx-7'>
      <div>
        <h1 className='font-bold text-3xl text-white text-center mb-10'>Why Choose us ?</h1>

      </div>
      <div className='grid mx-auto justify-items-center max-w-5xl pb-10'>
        <div className='flex gap-6 justify-between mr-3 text-center'>
          <div className='md:mx-20'>
            <p className='flex justify-center'><CiAlarmOn size='3em' color='white'/></p>
            <p className='font-bold text-xl pb-1 text-white'>Best Price</p>
            <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='md:mx-20'>
            <p className='flex justify-center'><CiAlarmOn size='3em' color='white'/></p>
            <p className='font-bold text-xl text-white'>Best Price</p>
            <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>    
        </div>
        <div className='flex gap-6 justify-between mr-3 text-center py-7'>
          <div className='md:mx-20'>
            <p className='flex justify-center'><CiAlarmOn size='3em' color='white'/></p>
            <p className='font-bold text-xl text-white'>Best Price</p>
            <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div  className='md:mx-20'>
            <p className='flex justify-center'><CiAlarmOn size='3em' color='white'/></p>
            <p className='font-bold text-xl text-white'>Best Price</p>
            <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default WhyChoose