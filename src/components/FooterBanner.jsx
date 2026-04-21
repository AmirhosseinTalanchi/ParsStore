import React from 'react'
import { Link } from 'react-router'

export default function FooterBanner() {
   return (
      <div className="container">
         <div className='flex flex-col md:flex-row gap-5 mb-10'>
            <div className='relative rounded-xl'>
               <img className='rounded-xl' src="/public/Photo/category-banner/footerBanner1.avif" />
               <h2 className='absolute right-10 top-10 md:top-15 lg:top-18 2xl:top-48 text-[20px] lg:text-3xl text-white'>
                  ظرافتی
                  <br />
                  که غرقش می‌شوی
               </h2>
               <span className='absolute right-10 top-26 md:top-32 lg:top-39 2xl:top-68 text-sm lg:text-[16px] text-[#FFFFFF61]'>کیفیت ساخت بالا و راحتی برای استفاده طولانی</span>
               <span className='absolute right-10 top-33 md:top-39 lg:top-50 2xl:top-82 text-[#FFFFFF52] text-xs lg:text-[16px]'>پردازنده و کارت گرافیک قوی</span>
               <button className='absolute right-10 top-45 md:top-45 lg:top-63 2xl:top-90 w-full'>
                  <Link to="/Shop/laptop" className='absolute text-white flex items-end gap-1'>
                     <span className='text-[13px] lg:text-[15px]'>مشاهده محصولات</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 8v8h8"></path>
                     </svg>
                  </Link>
               </button>
            </div>

            <div className='relative rounded-xl'>
               <img className='rounded-xl' src="/public/Photo/category-banner/footerBanner2.avif" />
               <h2 className='absolute right-10 top-10 md:top-15 lg:top-18 2xl:top-48 text-[20px] lg:text-3xl'>
                  هوشمندتر
                  <br />
                  از همیشه
               </h2>
               <span className='absolute right-10 top-26 md:top-32 lg:top-39 2xl:top-68 text-sm lg:text-[16px] text-[#00000061]'>سرعت بالا، طراحی مدرن و دوربین بینظی</span>
               <span className='absolute right-10 top-33 md:top-39 lg:top-50 2xl:top-82 text-[#00000052] text-xs lg:text-[16px]'>عملکرد روان با باتری ماندگار</span>
               <button className='absolute right-10 top-45 md:top-45 lg:top-63 2xl:top-90 w-full'>
                  <Link to="/Shop/mobile" className='absolute flex items-end gap-1'>
                     <span className='text-[13px] lg:text-[15px]'>مشاهده محصولات</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 8v8h8"></path>
                     </svg>
                  </Link>
               </button>
            </div>

         </div>
      </div>
   )
}
