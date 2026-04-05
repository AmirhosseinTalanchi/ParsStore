import React, { useState } from 'react'

export default function Category({title,img}) {


  return (

    <div className='flex relative'>
      <img src={img} className='rounded-xl' />
      <div className='absolute top-5 left-7'>
        <h3 className='text-[20px] w-14'>{title}</h3>
        <a className='flex items-end' href="#">
          <span className='text-[14px] mt-4'>خرید</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 8v8h8"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
