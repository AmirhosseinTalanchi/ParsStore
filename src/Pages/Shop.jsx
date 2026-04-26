import React, { useState, useEffect } from 'react'
import Product from '../components/Product.jsx';
import Color from '../components/Color.jsx';
import OS from '../components/OS.jsx';
import Manitor from '../components/Manitor.jsx';
import Popular from '../components/Popular.jsx';
import { product } from '../../Data.js'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/grid";
import { Link, useParams } from 'react-router';




export default function Shop({ onAddToFavorite ,onAddToComparison, onAddToCart }) {

   const [allProduct, setAllProduct] = useState(product)
   const [userWantProduct, setUserWantProduct] = useState("پیش فرض")
   const [currentPage, setCurrentPage] = useState(1)
   const [productToShow, setProductToShow] = useState([])
   const [paginatedProduct, setPaginatedProduct] = useState([])

   const { proGat } = useParams()

   let pageName = productToShow?.[0]?.category
   let pageSize = 12
   let pageCount = Math.ceil(productToShow.length / pageSize)
   let pageNumber = Array.from(Array(pageCount).keys())
   let endIndex = pageSize * currentPage
   let startIndex = endIndex - pageSize



   useEffect(() => {
      if (proGat && proGat !== "all") {
         let productToSee = allProduct.filter((pro) => {
            return pro.categoryE === proGat
         })
         setProductToShow(productToSee)

      } else if (proGat === "all") {
         setProductToShow(allProduct);
      }
   }, [proGat, allProduct])

   useEffect(() => {
      let ProductToSee2 = productToShow.slice(startIndex, endIndex)
      setPaginatedProduct(ProductToSee2)
   }, [productToShow, currentPage, startIndex, endIndex])

   let changePage = (newPage) => {
      setCurrentPage(newPage)
      let endIndex = pageSize * currentPage
      let startIndex = endIndex - pageSize
      let ProductToSee2 = productToShow.slice(startIndex, endIndex)
      setPaginatedProduct(ProductToSee2)
   }

   let prevPage = () => {
      setCurrentPage(currentPage - 1)
   }

   let nextPage = () => {
      setCurrentPage(currentPage + 1)
   }

   let changeCategory = (Category) => {
      setUserWantProduct(Category)
   }




   return (
      <>
         <div className=' w-full font-iransans overflow-hidden flex justify-center flex-col items-center '>

            <div className='container mt-15 text-zinc-600'>
               <Link to="/">خانه</Link>
               <Link to="/Shop/all"> » فروشگاه</Link>
               {proGat !== "all" &&
                  <Link to={`/Shop/${proGat}`}> » {pageName}</Link>
               }
            </div>

            <div className='container flex w-full mt-10'>
               {/* right slide */}
               <div className='w-2/7 lg:w-1/4 flex-col gap-7 hidden md:flex text-zinc-900'>
                  {/* pricelimit */}
                  {/* <div className='h-53 border border-zinc-300 rounded-lg p-5'>
                     <div className='border-b border-zinc-200 pb-4 relative'>
                        <h2 className='text-lg'>محدوده قیمت</h2>
                        <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
                     </div>
                  </div> */}
                  {/* color */}
                  <Color proGat={proGat} />
                  {/* os */}
                  <OS proGat={proGat} />
                  {/* manitor */}
                  <Manitor proGat={proGat} />
                  {/* popular */}
                  <Popular proGat={proGat} />
               </div>
               {/* left side */}
               <div className=' w-full md:w-5/7 lg:w-3/4 md:mr-10 flex flex-col justify-between '>
                  <div>
                     {/* top */}
                     <div>
                        <h2 className='text-2xl mb-7'>{proGat === "all" ? "همه محصولات" : pageName}</h2>
                        <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                           <span className='text-xs text-zinc-500'>
                              نمایش {startIndex + 1}–{endIndex > allProduct.length ? allProduct.length : endIndex} از {allProduct.length} نتیجه
                           </span>
                           <ul className='gap-4 flex flex-wrap text-sm'>
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
                           <Product key={pro.proId} {...pro} onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />
                        ))}
                     </div>
                  </div>
                  {/* pagination */}
                  <ul className='flex items-center justify-center text-zinc-500 gap-3 mt-7'>
                     <li
                        className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${currentPage === 1 ? "hidden" : "block"}`}
                        onClick={() => { prevPage() }}
                     >
                        →
                     </li>

                     {pageNumber.length > 1 &&
                        pageNumber.map((page) => (
                           <li
                              className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${page + 1 === currentPage ? " bg-[#1462cf] text-white" : ""}`}
                              key={page}
                              onClick={() => changePage(page + 1)}
                           >
                              {page + 1}
                           </li>
                        ))
                     }

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



         </div>
      </>
   )
}
