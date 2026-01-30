import React from 'react'

export default function HeaderBaner() {
  return (
    <div className='flex justify-between mt-12'>
      {/* watch */}
      <div className='relative -z-1'>
        <img src="public/Photo/banner-watch.avif" alt="watch" className='rounded-xl' />
        <div className='absolute top-6 md:top-16 lg:top-10  right-21.25 flex flex-col'>
          <h2 className='text-2xl md:text-3xl lg:text-7xl w-10 lg:w-56  md:mb-6'>ساعت هوشمند</h2>
          <span className=' hidden md:block text-[14px] md:text-[16px] text-[#0000006E] '>سامسونگ Galaxy Watch8</span>
          <span className=' text-[14px] text-[#0000006E] md:mt-8 mb-1 '>30% تخفیف ویژه</span>
          <a href="#" className='text-[14px] flex items-center gap-2'>
            <span>مشاهده گزینه ها</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 8v8h8"></path>
            </svg>
          </a>
        </div>
      </div>
      {/* headphone */}
      <div className='hidden lg:block relative'>
        <img src="public/Photo/banner-headphon.avif" alt="headphon" className='rounded-xl' />
        <h2 className='text-2xl w-24 absolute top-10 right-7 text-white'>هدفون و هندزفری</h2>
        <a href="#" className='absolute top-28 right-7 flex items-end gap-1'>
          <span>خرید</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 8v8h8"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

