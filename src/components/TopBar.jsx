import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CgUser } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router';



export default function TopBar({ setIsOpenMenu,setIsOpenCart, cartProduct }) {
  return (
    <>
      <div className='container'>
        <div className='  flex justify-between items-center  h-24 w-full relative border-b border-zinc-300'>

          {/* logo page */}
          <Link to="/">
            <img src='/Photo/logo.png' className='w-36 h-6'></img>
          </Link>

          {/* search box */}
          <div className='hidden lg:flex w-1/2 relative'>
            <input type="text" placeholder='جستجو در محصولات ...' className='w-full py-3 px-4 border border-zinc-300 rounded-xl outline-0' />
            <IoIosSearch className='w-6 h-6 absolute top-3  left-3' />
          </div>

          {/* cart and account and menuInMoblie */}
          <div className='flex gap-3 items-center'>
            {/* accont */}
            <div className='flex gap-2'>
              <CgUser className='w-6 h-6' />
              <span className='hidden lg:block text-zinc-400'>حساب کاربری</span>
            </div>
            {/* cart */}
            <div className='flex gap-2' onClick={() => setIsOpenCart(prev => ! prev)}>
              <div className='relative'>
                <BsCart3 className='w-6 h-6' />
                <div className='w-5 h-5 rounded-[7px] bg-blue-700 text-white justify-center items-center flex absolute bottom-3 right-3 text-sm pt-1'>{cartProduct.length}</div>
              </div>
              <span className='hidden lg:block text-zinc-400'>محصول</span>
            </div>
            {/* menuInMoblie */}
            <FiMenu className='w-9 h-9 z-10 lg:hidden' onClick={() => setIsOpenMenu(prev => !prev)} />
          </div>


        </div>
      </div>
    </>
  )
}
