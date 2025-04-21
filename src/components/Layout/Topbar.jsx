import React from 'react'
import {TbBrandMeta} from "react-icons/tb"
import {IoLogoInstagram} from "react-icons/io"
import {RiTwitterXLine} from "react-icons/ri"
function Topbar() {
  return (
    <div className='bg-vivek-red text-white'>
        <div className='container mx-auto flex items-center justify-between py-3 px-4'>
            <div className='hidden md:flex items-center gap-2'>
                <a href="#" className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>
            <div className='text-small text-center flex-grow'>
                <span>
                    We ship world-wide Fast and realible shipping
                </span>
            </div>
            <div className='text-sm hidden md:block text-center'>
                <a href="#" className='hover:text-gray-300'>+91-8877665544</a>
            </div>
        </div>
    </div>
  )
}

export default Topbar