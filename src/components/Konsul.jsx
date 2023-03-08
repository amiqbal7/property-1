import React from 'react'
import gambar1 from "../assets/gambar1.jpg"
import gambar2 from "../assets/gambar9.jpg"
import gambar3 from "../assets/gambar3.jpg"
import gambar4 from "../assets/gambar8.jpg"
import gambar5 from "../assets/gambar6.jpg"

const Konsul = () => {
  return (
    <div className='mt-16'>
        <div>
        <diV className='grid grid-rows grid-flow-col md:gap-7 gap-2 mx-7 my-'>
            <div className='row-span-2 '><img src={gambar4}></img></div>
            <div className='col-span-2'><h1 className='text-3xl font-bold mb-3'>What you get ?</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod quasi inventore voluptates aliquam, ex in! Fugit, nam aut. 
                Fuga iure doloremque illum possimus, debitis doloribus et exercitationem quis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio recusandae quas delectus illum dolorum enim provident 
                cupiditate accusamus minima, quam perspiciatis quos beatae aliquam laborum magni expedita fuga sed incidunt?</p></div>
            <div className='col-span-2'><img src={gambar2}></img></div>
            
        </diV>
        </div>
    </div>
  )
}

export default Konsul