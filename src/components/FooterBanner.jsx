import React from 'react'

export default function FooterBanner() {
   return (
      <div className='flex gap-5 mb-10'>
         <div className='relative rounded-xl'>
            <img className='rounded-xl' src="/public/Photo/category-banner/footerBanner1.avif" />
            <h2 className='absolute right-10 top-48 text-3xl text-white'>
               ظرافتی
               <br />
               که غرقش می‌شوی
            </h2>
            <span className='absolute right-10 top-68 text-[16px] text-[#FFFFFF61]'>کیفیت ساخت بالا و راحتی برای استفاده طولانی</span>
            <span className='absolute right-10 top-82 text-[#FFFFFF52] text-[16px]'>پردازنده و کارت گرافیک قوی</span>
            <button className='absolute right-10 top-90 w-full'>
               <a className='absolute text-white flex items-end gap-1'>
                  <span>مشاهده محصولات</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M8 8v8h8"></path>
                  </svg>
               </a>
            </button>
         </div>
         <div className='flex gap-5'>
            <div className='relative rounded-xl'>
               <img className='rounded-xl' src="/public/Photo/category-banner/footerBanner2.avif" />
               <h2 className='absolute right-10 top-48 text-3xl'>
                  هوشمندتر
                  <br />
                  از همیشه
               </h2>
               <span className='absolute right-10 top-68 text-[16px] text-[#00000061]'>سرعت بالا، طراحی مدرن و دوربین بینظی</span>
               <span className='absolute right-10 top-82 text-[#00000052] text-[16px]'>عملکرد روان با باتری ماندگار</span>
               <button className='absolute right-10 top-90 w-full'>
                  <a className='absolute flex items-end gap-1'>
                     <span>مشاهده محصولات</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 8v8h8"></path>
                     </svg>
                  </a>
               </button>
            </div>



         </div>
      </div>
   )
}
