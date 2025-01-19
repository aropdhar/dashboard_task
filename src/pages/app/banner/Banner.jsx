import React from 'react'
import banner from '../../../assets/picture.png'

const Banner = () => {
  return (
    <>
    <div className='flex gap-x-[8px]'>
      <div className='bg-red-300 flex items-center rounded-[20px]  p-[12px]  mt-[60px]'>
        <div>
          <h1 className='text-[25px] font-bold'>Welcome back <br /> Jaydon Frankle</h1>
          <p className='text-[18px] mt-[10px] w-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, assumenda!</p>
          <button className='bg-green-600 mt-[10px] px-[20px] py-[10px] text-white text-[16px] rounded-[10px]'>Go Now</button>
        </div>
        <div className='w-[250px] h-[250px]'>
          <img className='w-full h-full rounded-[50%] object-cover' src={banner} alt={banner} />  
        </div>
      </div>
      <div className='bg-black px-[250px] rounded-[13px] py-[140px] mt-[60px]'>
        
      </div>
    </div>
    </>
  )
}

export default Banner
