import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Rootlayouts = () => {
  return (
    <div className='flex  gap-x-[5px]'>
      <Sidebar/>
       <Outlet/>
    </div>
  )
}

export default Rootlayouts
