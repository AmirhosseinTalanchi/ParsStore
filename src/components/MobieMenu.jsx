import React from 'react'

export default function MobieMenu({isOpen}) {

 
   return (
      <div className={`w-80 h-full z-50 py-4 absolute top-0 bg-white flex flex-col transition-all duration-300 lg:hidden ${isOpen ? "Open": "Close"}`} >
         <div className='w-full border-b border-zinc-300 pb-4'>
            <input type="text" placeholder='جستجو در سایت ...' className='w-72 h-11 mx-4 border border-zinc-300 rounded-xl p-3 ' />
         </div>
         <ul className='text-zinc-700 px-6 pt-4 space-y-8 '>
            <li>خانه</li>
            <li>ابزارک ها</li>
            <li>المان ها</li>
            <li>بیوگرافی</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>حساب کاربری من</li>
            <li>سبد خرید </li>
            <li>فروشگاه</li>
         </ul>
      </div>
   )
}


