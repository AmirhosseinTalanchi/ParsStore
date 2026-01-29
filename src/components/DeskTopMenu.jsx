import React from 'react'
import { FiMenu } from "react-icons/fi";

export default function DeskTopMenu() {
   return (
      <div className='hidden lg:flex justify-between h-14 items-center border-b border-zinc-300' >
         {/* right */}
         <div className='flex'>
            {/* menu */}
            <div className='flex items-center gap-x-2 pl-6 ml-6 border-l border-zinc-300'>
               <FiMenu className='w-6 h-6' />
               <span>دسته بندی محصولات</span>
            </div>
            {/* list */}
            <ul className='flex justify-center items-center gap-9'>
               <li>خانه</li>
               <li>تایپوگرافی</li>
               <li>درباره ما </li>
               <li>تماس با ما </li>
               <li>فروشگاه</li>
            </ul>
         </div>
         {/* left */}
         <div className='flex items-center gap-5'>
            {/* مقایسه */}
            <div className='flex gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-git-compare">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                  <path d="M14 9l-3 -3l3 -3"></path>
                  <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path>
                  <path d="M10 15l3 3l-3 3"></path>
               </svg>
               <span className=' text-zinc-400'>مقایسه</span>
            </div>
            {/* علاقه مندی */}
            <div className='flex gap-2'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-heart">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828"></path>
                  <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
               </svg>
               <span className=' text-zinc-400'>علاقه مندی</span>
            </div>
         </div>
      </div>
   )
}
