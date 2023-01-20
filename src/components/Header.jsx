import React from 'react'
import Rellax from 'rellax';

let rellax = new Rellax('.rellax');

const Header = () => {
  return (
    <section>
      <div className='relative grid place-items-center'>
        <img className='w-full h-screen object-cover rellax' data-rellax-speed="3" src="/slider-img-1.jpg" alt="" />
        <h1 className='absolute font-poppins font-medium uppercase text-7xl rellax' data-rellax-speed="6">Cozy Bespoke Furniture</h1>
      </div>
    </section>
  )
}

export default Header