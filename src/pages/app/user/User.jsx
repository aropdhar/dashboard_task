import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoStatsChartSharp } from 'react-icons/io5'

const User = () => {
  return (
    <div className='flex items-center gap-x-[10px]'>
      <div className='border-2 w-[402px] flex items-center justify-between border-gray-300 p-2 rounded-[20px]'>
         <div className='flex flex-col gap-y-[8px]'>
           <h1 className='text-[18px] font-bold'>Total Active Users</h1>
           <div className='flex items-center gap-x-[10px]'>
            <span className='text-[18px] inline-block text-[rgba(147,145,145,0.49)]'><FaHome /></span>
             <span className='text-[18px] inline-block'>+2.6%</span>
           </div>
           <span className='text-[25px] font-bold'>18,765</span>
         </div>
         <span className='text-[32px] text-green-400'><IoStatsChartSharp /></span>
      </div>
      <div className='border-2 w-[402px] flex items-center justify-between border-gray-300 p-2 rounded-[20px]'>
         <div className='flex flex-col gap-y-[8px]'>
           <h1 className='text-[18px] font-bold'>Total Installed</h1>
           <div className='flex items-center gap-x-[10px]'>
            <span className='text-[18px] inline-block text-[rgba(147,145,145,0.49)]'><FaHome /></span>
             <span className='text-[18px] inline-block'>+2.6%</span>
           </div>
           <span className='text-[25px] font-bold'>18,765</span>
         </div>
         <span className='text-[32px] text-blue-400'><IoStatsChartSharp /></span>
      </div>
      <div className='border-2 w-[402px] flex items-center justify-between border-gray-300 p-2 rounded-[20px]'>
         <div className='flex flex-col gap-y-[8px]'>
           <h1 className='text-[18px] font-bold'>Total Download</h1>
           <div className='flex items-center gap-x-[10px]'>
            <span className='text-[18px] inline-block text-[rgba(147,145,145,0.49)]'><FaHome /></span>
             <span className='text-[18px] inline-block'>+2.6%</span>
           </div>
           <span className='text-[25px] font-bold'>18,765</span>
         </div>
         <span className='text-[32px] text-yellow-400'><IoStatsChartSharp /></span>
      </div>
    </div>
  )
}

export default User
