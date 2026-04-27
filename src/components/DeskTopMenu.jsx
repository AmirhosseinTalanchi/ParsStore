import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router';
import { categoryBanner } from "../../Data"


export default function DeskTopMenu() {

   const [banner, setbanner] = useState(categoryBanner.filter((cat) => {
      return cat.id > 8
   }))




   return (
      <div className='container'>
         <div className='hidden lg:flex justify-between h-14 items-center border-b border-zinc-300 ' >
            {/* right */}
            <div className='flex '>
               {/* menu */}
               <div className='flex group items-center gap-x-2 pl-6 ml-6 border-l border-zinc-300 relative'>
                  <FiMenu className='w-6 h-6' />
                  <span className='cursor-pointer'>دسته بندی محصولات</span>
                  {/* submenu */}
                  <div className='bg-white w-65 absolute top-13.5 border border-zinc-200 z-50 hidden group-hover:block'>
                     <div className='px-2'>
                        {banner.map((banner) => (
                           <Link key={banner.id} to={`/Shop/${banner.categoryE}`}>
                              <div className='flex items-center py-1.25 border-b border-zinc-200' key={banner.id}>
                                 <img className='w-10 h-10' src={banner.img} alt="" />
                                 <h3 className='text-sm text-zinc-800'>{banner.label}</h3>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>
               </div>

               {/* list */}
               <ul className='flex justify-center items-center gap-5'>
                  <li className='hover:border-b-4 border-[#1462cf] pb-3.5 mt-3.5 px-3 transition-all duration-100 cursor-pointer'><Link to="/">خانه</Link></li>
                  <li className='hover:border-b-4 border-[#1462cf] pb-3.5 mt-3.5 px-3 transition-all duration-100 cursor-pointer'>تایپوگرافی</li>
                  <li className='hover:border-b-4 border-[#1462cf] pb-3.5 mt-3.5 px-3 transition-all duration-100 cursor-pointer'>درباره ما </li>
                  <li className='hover:border-b-4 border-[#1462cf] pb-3.5 mt-3.5 px-3 transition-all duration-100 cursor-pointer'>تماس با ما </li>
                  <li className='hover:border-b-4 border-[#1462cf] pb-3.5 mt-3.5 px-3 transition-all duration-100 cursor-pointer'><Link to="/Shop/all">فروشگاه</Link></li>
               </ul>
            </div>
            {/* left */}
            <div className='flex items-center gap-5'>
               {/* مقایسه */}
               <Link to="Comparison" className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-git-compare">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                     <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                     <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                     <path d="M14 9l-3 -3l3 -3"></path>
                     <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path>
                     <path d="M10 15l3 3l-3 3"></path>
                  </svg>
                  <span className=' text-zinc-400'>مقایسه</span>
               </Link>
               {/* علاقه مندی */}
               <Link to="Favorite" className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-heart">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828"></path>
                     <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                     <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                  </svg>
                  <span className=' text-zinc-400'>علاقه مندی</span>
               </Link>
            </div>

         </div>
      </div>
   )
}
