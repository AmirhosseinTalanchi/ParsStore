import React from 'react'
import { Link } from 'react-router'


export default function SliderBanner({img,toptitle,title,caption,categoryE}) {
  return (
    <div className='rounded-xl mb-10 relative'>
      <img className='rounded-xl' src={img} />
      <p className='hidden md:block absolute right-20 top-10 lg:top-14 xl:top-20 text-xs text-[#FFFFFF7D]'>{toptitle}</p>
      <h2 className='absolute right-10 md:right-20 top-5 md:top-15 lg:top-20 xl:top-26  text-lg md:text-[30px] xl:text-[42px] text-white'>{title}</h2>
      <p className='hidden lg:block absolute right-20 top-30 lg:top-35 xl:top-44 text-[13px] xl:text-[16px] text-[#FFFFFF9C]'>{caption}</p>
      <Link to={`/shop/${categoryE}`} className='flex justify-center items-center absolute right-10 md:right-20 top-15 md:top-30 lg:top-45 xl:top-56 text-[#1462CF] bg-[#FFFEFE] font-bold text-[10px] md:text-sm w-28 md:w-32 md:px-1 h-6 md:h-10 rounded-lg'>همین الان خرید کن</Link>
    </div>
  )
}
