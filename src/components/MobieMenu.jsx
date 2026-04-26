import React, { useState } from 'react'
import { Link } from 'react-router'
import { categoryBanner } from "../../Data"


export default function MobieMenu({ isOpenMenu, onClose, subMenuIsOpen, onOpenSebMenu }) {

   const [banner, setbanner] = useState(categoryBanner.filter((cat) => {
      return cat.id > 8
   }))

   return (
      <>
         {/* mobile menu */}
         <div className={` ${isOpenMenu ? "Open" : "Close"} fixed w-80 h-full overflow-auto z-90 py-4 top-0 bg-white flex flex-col transition-all duration-300 lg:hidden`} >
            <div className='w-full border-b border-zinc-300 pb-4'>
               <input type="text" placeholder='جستجو در سایت ...' className='w-72 h-11 mx-4 border border-zinc-300 rounded-xl p-3 ' />
            </div>
            <ul className='text-zinc-700 px-6 pt-4 space-y-5 '>
               <li className='cursor-pointer' onClick={onClose}><Link to="/">خانه</Link></li>
               <li className='cursor-pointer'>
                  <Link to="/Shop/all" className='flex justify-between'>
                     <span onClick={onClose}>فروشگاه</span>

                     <svg className={`${subMenuIsOpen && "-rotate-90"} transition-all duration-100`} onClick={onOpenSebMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-chevron-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                     </svg>

                  </Link>
               </li>
               <ul className={subMenuIsOpen ? "flex mr-5 flex-col gap-y-5" : " hidden"}>
                  {banner.map((cat) => (
                     <li key={cat.id} onClick={onClose}>
                        <Link to={`/Shop/${cat.categoryE}`}>
                           {cat.label}
                        </Link>
                     </li>
                  ))}
               </ul>
               <li className='cursor-pointer'>حساب کاربری من</li>
               <li className='cursor-pointer' onClick={onClose}><Link to="/Favorite">علاقه مندی ها</Link></li>
               <li className='cursor-pointer' onClick={onClose}><Link to="/Comparison">مقایسه</Link></li>
               <li className='cursor-pointer'>بیوگرافی</li>
               <li className='cursor-pointer'>تماس با ما</li>
               <li className='cursor-pointer'>درباره ما</li>
            </ul>
         </div>

         {/* blur bg */}
         <div className={`hidden  z-80 top-0 right-0 left-0 bottom-0 fixed ${isOpenMenu && "inline bg-black/65"}`} onClick={onClose} ></div>

      </>
   )
}


