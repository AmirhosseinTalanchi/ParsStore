import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CgUser } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";



export default function TopBar({setIsOpen}) {
  return (
    <>
      <div className='container flex justify-between items-center px-4 h-14 w-full relative '>

        {/* logo page */}
        <img src='public/Photo/logo.png' className='w-36 h-6'></img>

        {/* search box */}
        <div className='hidden lg:flex w-1/2 relative'>
          <input type="text" placeholder='جستوجو در محصولات ...' className='w-full py-3 px-4 border border-zinc-300 rounded-xl outline-0' />
          <IoIosSearch className='w-6 h-6 absolute top-3  left-3' />
        </div>

        {/* cart and account and menuInMoblie */}
        <div className='flex gap-3 items-center'>
          {/* accont */}
          <div className='flex'>
            <CgUser className='w-6 h-6' />
            <span className='hidden lg:block text-zinc-500'>حساب کاربری</span>
          </div>
          {/* cart */}
          <div className='flex'>
            <div className='relative'>
              <BsCart3 className='w-6 h-6' />
              <div className='w-5 h-5 rounded-[7px] bg-blue-700 text-white justify-center items-center flex absolute bottom-3 right-3 text-sm'>0</div>
            </div>
            <span className='hidden lg:block text-zinc-500'>محصول</span>
          </div>
          {/* menuInMoblie */}
          <FiMenu className='w-9 h-9 z-10 lg:hidden' onClick={() => setIsOpen(prev => ! prev)} />
        </div>


      </div>
    </>
  )
}
