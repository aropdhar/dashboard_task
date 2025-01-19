import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward, IoMdMailOpen } from 'react-icons/io'
import { TbBrandApplePodcast, TbLogs } from 'react-icons/tb'
import { FaFileAlt, FaShoppingBag } from 'react-icons/fa'
import { BsBank2, BsFillHandbagFill } from 'react-icons/bs'
import { PiAirplaneTakeoffLight } from 'react-icons/pi'
import { SiGoogleanalytics } from 'react-icons/si'
import logo from '../../assets/logo.png'
import { CiFileOn, CiUser } from 'react-icons/ci'
import { FaBasketShopping } from 'react-icons/fa6'
import { FiShoppingCart } from 'react-icons/fi'
import { HiDocumentCurrencyDollar } from 'react-icons/hi2'
import { IoBagHandle } from 'react-icons/io5'
import { MdOutlineChat, MdTour } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'

const OverView = [
    {
        id:1,
        item:"App",
        img: <TbBrandApplePodcast />
    },
    {
        id:2,
        item:"E-Commerce",
        img: <FaShoppingBag />
    },
    {
        id:3,
        item:"Analaysics",
        img: <SiGoogleanalytics />
    },
    {
        id:4,
        item:"Banking",
        img: <BsBank2 />

    },
    {
        id:5,
        item:"Booking",
        img: <PiAirplaneTakeoffLight />
    },
    {
        id:6,
        item:"File",
        img: <FaFileAlt />
    },
]

const Management = [
    {
        id:1,
        item:"User",
        img: <CiUser />,
        arrow: true
    },
    {
        id:2,
        item:"Product",
        img: <FaBasketShopping />,
        arrow: true
    },
    {
        id:3,
        item:"Order",
        img: <FiShoppingCart />,
        arrow: true
    },
    {
        id:4,
        item:"Invoice",
        img: <HiDocumentCurrencyDollar />

    },
    {
        id:5,
        item:"Blog",
        img: <TbLogs />

    },
    {
        id:6,
        item:"Job",
        img: <BsFillHandbagFill />

    },
    {
        id:7,
        item:"Tour",
        img: <MdTour />

    },
    {
        id:8,
        item:"File Manager",
        img: <FaFileAlt />

    },
    {
        id:9,
        item:"Mail",
        img: <IoMdMailOpen />

    },
    {
        id:10,
        item:"chat",
        img: <MdOutlineChat />

    },
    {
        id:11,
        item:"Calender",
        img: <SlCalender />

    },
]

const Sidebar = () => {
  return (
    <>
      <div className='p-[15px]'>
        <div className='w-[220px] p-2 border-r-2 border-gray-300 h-[120vh]'>
           <div className='flex flex-col gap-y-[20px]'>
              <div className='flex items-center justify-between'>
                <div className='w-[50px] h-[50px]'>
                  <img  className='w-full h-full object-cover' src={logo} alt={logo} />
                </div>
                <span className='inline-block text-[26px]'> 
                  <IoIosArrowBack />
                </span>
              </div>
              <div className='flex flex-col gap-y-[13px]'>
                 <h1>OverView</h1>
                 <div className='flex flex-col gap-y-[10px]'>
                    {OverView.map((item , index)=>(
                        <div key={index} className='flex items-center gap-x-[10px] cursor-pointer'>
                            <span className='text-[rgba(46,45,45,0.49)] text-[22px]'>{item.img}</span>
                            <li className='text-[rgba(46,45,45,0.49)] text-[20px]'><Link>{item.item}</Link></li>
                        </div>
                    ))

                    }
                 </div>
              </div>
              <div className='flex flex-col gap-y-[10px]'>
                <h1>Management</h1>
                 <div className='flex flex-col gap-y-[12px]'>
                    {Management.map((item , index)=>(
                            <div key={index} className='flex items-center justify-between cursor-pointer'>
                                <div className='flex items-center gap-x-[10px]'>
                                    <span className='text-[rgba(46,45,45,0.49)] text-[22px]'>{item.img}</span>
                                    <span className='text-[rgba(46,45,45,0.49)] text-[20px]'><Link>{item.item}</Link></span>
                                </div>
                                <div>
                                    {item.arrow &&
                                     <span className='text-[rgba(46,45,45,0.49)]'><IoIosArrowForward /></span>
                                    }
                                </div>
                            </div>
                       
                    ))

                    }
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
