import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import { product } from '../../Data.js'
import Pruduct from './Product.jsx';

export default function NewestProduct() {

   const [allProduct, setAllProduct] = useState(product)
   const [userSelectProduct, setUserSelectProduct] = useState([])
   const [userWantProduct, setUserWantProduct] = useState("هدفون")


   let changeCategory = (Category) => {
      setUserWantProduct(Category)
   }

   useEffect(() => {
      const newProduct = allProduct.filter((pro) => {
         return pro.category === userWantProduct
      })
      setUserSelectProduct(newProduct)

   }, [userWantProduct])

   return (
      <div className='mb-56'>

         {/* top */}
         <div className='flex justify-between text-2xl mb-7 '>
            <h2>جدیدترین محصولات</h2>
            <ul className='gap-4 flex text-sm'>
               <li className={`cursor-pointer select-none  ${userWantProduct === "هدفون" ? "border-b border-[#1462cf]" : ""}`} onClick={() => { changeCategory("هدفون") }}>هدفون</li>
               <li className={`cursor-pointer select-none  ${userWantProduct === "موس" ? "border-b border-[#1462cf]" : ""}`} onClick={() => { changeCategory("موس") }}>موس</li>
               <li className={`cursor-pointer select-none  ${userWantProduct === "مانیتور" ? "border-b border-[#1462cf]" : ""}`} onClick={() => { changeCategory("مانیتور") }}>ماننیتور</li>
            </ul>
         </div>

         {/* product */}
         <Swiper
            modules={[Navigation]}
            spaceBetween={2}
            slidesPerView={2}
            breakpoints={{
               768: { slidesPerView: 3 },
               1024: { slidesPerView: 4 },

            }}
         >
            {userSelectProduct.map((pro) => (
               <SwiperSlide key={pro.proId} className=''>
                <Pruduct {...pro} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}


