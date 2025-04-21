import React from 'react'
import heroImg from "../../assets/hero.webp"
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className='relative'>
        <img src={heroImg} alt="Hero image" className='w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover'/>
        <div className='absolute inset-0 bg-opacity-5 bg-black flex items-center justify-center'>
            <div className='text-center text-white p-6'>
                <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation <br/> Ready</h1>
                <p className='tracking-tighter text-sm md:text-lg mb-6'>Explore Our vacation ready outfits with fast world wide shipping</p>
                <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>Shop Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero