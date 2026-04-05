import React from 'react'

export default function ConsoleBanner() {
   return (
      <div className='container flex flex-col md:flex-row gap-y-4 md:gap-x-2 lg:gap-x-4 mb-10 '>
         <div className='relative'>
            <img src="public/Photo/category-banner/XBOX-Banner.avif" className='rounded-xl' />
            <h2 className='absolute right-10 top-7 lg:top-10 text-[17px] md:text-[20px] lg:text-[27px] text-white'>
               Microsoft
               <br></br>
               XBOX
            </h2>

            <p className='hidden xl:block  absolute right-10 top-30 text-[#FFFFFF4D]'>سری ایکس</p>

            <span className='absolute right-10 top-22 lg:top-32 xl:top-44 text-[#FFFFFF4D] text-xs'> 5% تخفیف</span>
            <a href="#" className='absolute top-26 lg:top-36 xl:top-48 text-white right-10 flex items-end gap-1'>
               <span>خرید</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 8v8h8"></path>
               </svg>
            </a>
         </div>
         <div className='relative'>
            <img src="/public/Photo/category-banner/PlayStion-Banner.avif" className='rounded-xl' />
            <h2 className='absolute right-10 top-7 lg:top-10 text-[17px] md:text-[20px] lg:text-[27px] text-white'>
               Sony
               <br></br>
               Playstation
            </h2>

            <p className='hidden xl:block  absolute right-10 top-30 text-[#FFFFFF4D]'>پلی استیشن 5</p>

            <span className='absolute right-10 top-22 lg:top-32 xl:top-44 text-[#FFFFFF4D] text-xs'> 5% تخفیف</span>
            <a href="#" className='absolute top-26 lg:top-36 xl:top-48 text-white right-10 flex items-end gap-1'>
               <span>خرید</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 8v8h8"></path>
               </svg>
            </a>
         </div>
      </div>
   )
}
// 