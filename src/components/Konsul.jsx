import React from 'react'
import Konsultant from "../assets/konsultant.jpg"

const Konsul = () => {
  return (
    <div className='py-10 mx-7'>
        <div className='container md:max-w-6xl mx-auto text-black rounded-sm bg-slate-100 md:mt-[-11em] mt-[-16em]'>
            <div className='p-5 md:grid grid-cols-2'>
                <div>
                    <h1 className=' text-xl md:text-4xl font-semibold pb-5 md:pt-16'>Meet Our Proffesional Consultant For Free!</h1>
                    <button className='bg-black text-white px-6 py-3 mb-3 grid'>Contact Now</button>
                </div>
                <div>  
                    <img className='w-96 grid mx-auto' src={Konsultant} />
                </div>
                
            </div>
            
            

        </div>
    </div>
  )
}

export default Konsul