import React from 'react'

export default function ConsoleBanner({ title, caption, discount, img }) {
   return (
      <div className='relative'>
         <img src={img} className='rounded-xl' />
         <h2 className='absolute right-10 top-7 lg:top-10 text-[17px] md:text-[20px] lg:text-[27px] text-white'>{title}</h2>

         <p className='hidden lg:block  absolute right-10 top-20 text-[#FFFFFF4D]'>{caption}</p>

         <span className='absolute right-10 top-20 lg:top-32 xl:top-36 text-[#FFFFFF4D] text-xs'>{discount} تخفیف</span>
         <a href="#" className='absolute top-26 lg:top-36 xl:top-42 text-white right-10 flex items-end gap-1'>
            <span>خرید</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M8 8v8h8"></path>
            </svg>
         </a>
      </div>
   )
}
// 