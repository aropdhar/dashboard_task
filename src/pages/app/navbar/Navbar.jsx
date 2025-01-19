import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { IoIosNotifications, IoIosSettings } from 'react-icons/io'
import { LiaFlagUsaSolid } from 'react-icons/lia'

const Navbar = () => {
  return (
    <div className='p-[15px] absolute top-0 left-[16%] mr-[10px] w-[80%] h-0'>
       <div className='flex items-center justify-between'>
         <div className='flex items-center gap-x-[10px]'>
           <span className='inline-block text-[20px] text-[rgba(46,45,45,0.49)] cursor-pointer'><CiSearch /></span>
           <span className='inline-block text-[16px] bg-[rgba(147,145,145,0.49)] cursor-pointer px-[8px] rounded-[4px]'>36k</span>
         </div>
         <div className='flex items-center gap-x-[15px]'>
            <span className='inline-block text-[30px] '><LiaFlagUsaSolid /></span>
            <span className='inline-block text-[30px] text-[rgba(46,45,45,0.49)] cursor-pointer'><IoIosNotifications /></span>
            <span className='inline-block text-[25px] text-[rgba(46,45,45,0.49)] cursor-pointer'><FaUser />
            </span>
            <span className='inline-block text-[30px] text-[rgba(46,45,45,0.49)] cursor-pointer'><IoIosSettings /></span>
            <span className='inline-block text-[30px] text-[rgba(46,45,45,0.49)] cursor-pointer'><CgProfile /></span>
         </div>
       </div>
    </div>
  )
}

export default Navbar
