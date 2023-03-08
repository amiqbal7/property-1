import React from 'react'
import gambar1 from "../assets/gambar1.jpg"
import gambar2 from "../assets/gambar2.jpg"
import gambar3 from "../assets/gambar3.jpg"
import gambar4 from "../assets/gambar7.jpg"
import gambar5 from "../assets/gambar6.jpg"

const Get = () => {
  return (
    <div className='container pb-7 bg-white text-black'>
        <div className='mx-7'>
            <p className='font-bold text-3xl text-center md:text-left pt-12 pb-5 mb-5'>Get The Best Tower in The Town</p>
        </div>
        <diV className='grid grid-rows grid-flow-col md:gap-5 gap-2 mx-7 my-'>
            <div className='row-span-3 mb-[-36px]'><img src={gambar5}></img></div>
            <div className='col-span-2'><img src={gambar2}></img></div>
            <div className='col-span-1'><img src={gambar3}></img></div>
            <div className='row-span-2'><img src={gambar1}></img></div>
        </diV>
        <button className='bg-black text-white mx-auto flex px-6 py-4 mt-3 mb-10'>View more</button>
    </div>
  )
}

export default Get