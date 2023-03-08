import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen bg-black z-10 justify-between fixed drop-shadow-lg px-16 py-3'>
      <div className='flex justify-between items-center w-full'>
        <div className='font-extrabold text-xl'><p>BU-ILD</p></div>
        <div className='lg:text-lg'>
          <ul className='hidden md:flex justify-between font-bold md:gap-5'>
            <li className='hover:text-gray-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-gray-500 hover:before:w-full hover:before:opacity-100'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='hover:text-gray-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-gray-500 hover:before:w-full hover:before:opacity-100'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='hover:text-gray-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-gray-500 hover:before:w-full hover:before:opacity-100'><Link to="support" smooth={true} offset={-50} duration={500}>News</Link></li>
            <li className='hover:text-gray-500 relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-gray-500 hover:before:w-full hover:before:opacity-100'><Link to="event" smooth={true} offset={-100} duration={500}>Event</Link></li>
            </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-green-500 px-7 py-2 h-11 bg-transparent text-white mr-4'>
            Sign In
          </button>
          <button className='px-7 py-2 h-11 bg-white text-black border-green-500'>Sign Up</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <HiBars3 className='w-5' /> : <HiBars3 className='w-5' />}
          
        </div>
      </div>
      <ul className={!nav ? 'hidden' : ' bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full hover:text-green-500'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full hover:text-green-500'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full hover:text-green-500'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>News</Link></li>
          <li className='border-b-2 border-zinc-300 w-full hover:text-green-500'><Link onClick={handleClose} to="event" smooth={true} offset={-100} duration={500}>Event</Link></li>
         

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-green-500 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
