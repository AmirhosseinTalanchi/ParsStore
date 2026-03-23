import React from 'react'


export default function SliderBanner({img,toptitle,title,caption}) {
  return (
    <div className='rounded-xl mb-10 relative'>
      <img className='rounded-xl' src={img} />
      <p className='absolute right-20 top-20 text-xs text-[#FFFFFF7D]'>{toptitle}</p>
      <h2 className='absolute right-20 top-26 text-[42px] text-white'>{title}</h2>
      <p className='absolute right-20 top-44 text-[16px] text-[#FFFFFF9C]'>{caption}</p>
      <button className='absolute right-20 top-56 text-[#1462CF] bg-[#FFFEFE] font-bold text-sm w-32 px-1 h-10 rounded-lg'>همین الان خرید کن</button>
    </div>
  )
}
