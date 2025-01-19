import React from 'react'
import Banner from './banner/Banner'
import Navbar from './navbar/Navbar'
import User from './user/User'
import AreaChart from '../appchart/AreaChart'
import DountChart from '../appchart/DountChart'


const AppMain = () => {
  return (
      <>
      <div className='flex flex-col gap-y-[10px]'>
        <Navbar/>
        <Banner/>
        <User/>
        <AreaChart/>
      </div>
      </>
  )
}

export default AppMain
