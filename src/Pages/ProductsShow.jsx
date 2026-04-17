import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
import Footer from '../components/Footer.jsx';
import Product from '../components/Product.jsx';
import { product } from '../../Data.js'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/grid";




export default function ProductsShow() {

   const [allProduct, setAllProduct] = useState(product)
   const [isOpen, setIsOpen] = useState(false)
   const [userWantProduct, setUserWantProduct] = useState("پیش فرض")

   const [currentPage, setCurrentPage] = useState(1)
   const [paginatedProduct, setPaginatedProduct] = useState([])

   let pageSize = 16
   const pageCount = Math.ceil(allProduct.length / pageSize)
   let pageNumber = Array.from(Array(pageCount).keys())

   useEffect(() => {
      let endIndex = pageSize * currentPage
      let startIndex = endIndex - pageSize
      let ProductToShow = allProduct.slice(startIndex, endIndex)
      setPaginatedProduct(ProductToShow)
   }, [currentPage, allProduct, pageSize])


   const CloseHandler = () => {
      if (isOpen) {
         setIsOpen(false)
      }
   }

   let changeCategory = (Category) => {
      setUserWantProduct(Category)
   }

   let changePage = (newPage) => {
      setCurrentPage(newPage)
      let endIndex = pageSize * currentPage
      let startIndex = endIndex - pageSize
      let ProductToShow = allProduct.slice(startIndex, endIndex)
      setPaginatedProduct(ProductToShow)
   }

   let prevPage = () => {
      setCurrentPage(currentPage - 1)
   }
   let nextPage = () => {
      setCurrentPage(currentPage + 1)
   }
   


   return (
      <>
         <div className=' w-full font-iransans overflow-hidden flex justify-center flex-col items-center '>

            <TopBar setIsOpen={setIsOpen} />

            <MobieMenu isOpen={isOpen} onClose={CloseHandler} />

            <DeskTopMenu />

            <div className='container mt-15'>
               <a href="#">خانه</a>
               <a href="#"> » فروشگاه</a>
            </div>

            <div className='container flex w-full mt-10'>
               {/* right slide */}
               <div className='w-2/6 lg:w-1/4 flex-col gap-7 hidden md:flex'>
                  {/* pricelimit */}
                  <div className='h-53 border border-zinc-300 rounded-lg'>

                  </div>
                  {/* color */}
                  <div className='h-103.5 border border-zinc-300 rounded-lg'>

                  </div>
                  {/* os */}
                  <div className='h-60.5 border border-zinc-300 rounded-lg'>

                  </div>
                  {/* manitor */}
                  <div className='h-43 border border-zinc-300 rounded-lg'>

                  </div>
                  {/*  */}
                  <div className='h-53 border border-zinc-300 rounded-lg mb-7'>

                  </div>
               </div>
               {/* left side */}
               <div className=' w-full md:h-4/6 lg:w-3/4 md:mr-10'>
                  {/* top */}
                  <div>
                     <h2 className='text-2xl mb-7'>فروشگاه</h2>
                     <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                        <span className='text-xs text-zinc-500'>نمایش 1–12 از 72 نتیجه</span>
                        <ul className='gap-4 flex text-sm'>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "پیش فرض" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("پیش فرض") }}>پیش‌فرض</li>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "پر فروش" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("پر فروش") }}>پرفروش</li>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "بالاترین امتیاز" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("بالاترین امتیاز") }}>بالاترین‌امتیاز</li>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "جدید ترین" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("جدید ترین") }}>جدیدترین</li>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "کمترین قیمت" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("کمترین قیمت") }}>کمترین‌قیمت</li>
                           <li className={`cursor-pointer select-none text-zinc-500 pb-1  ${userWantProduct === "بیشترین قیمت" ? "border-b border-[#1462cf] text-zinc-900" : ""}`} onClick={() => { changeCategory("بیشترین قیمت") }}>بیشترین‌قیمت</li>
                        </ul>
                     </div>
                  </div>
                  {/* products */}
                  <div className='mt-5 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                     {paginatedProduct.map((pro) => (
                        <Product key={pro.proId} {...pro} />
                     ))}
                  </div>
                  {/* pagination */}
                  <ul className='flex items-center justify-center text-zinc-500 gap-3 mt-7'>
                     <li
                        className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${currentPage === 1 ? "hidden" : "block"}`}
                        onClick={() => { prevPage() }}
                     >
                        →
                     </li>
                     {pageNumber.map((page) => (
                        <li
                           className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${page + 1 === currentPage ? " bg-[#1462cf] text-white" : ""}`}
                           key={page}
                           onClick={() => changePage(page + 1)}
                        >
                           {page + 1}
                        </li>
                     ))}
                     <li
                        className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${currentPage === (pageNumber.length) ? "hidden" : "block"}`}
                        onClick={() => { nextPage() }}
                     >
                        ←
                     </li>
                  </ul>
               </div>
            </div>



            {/* درست کردن ری رندر */}

            <Footer />

         </div>
      </>
   )
}
