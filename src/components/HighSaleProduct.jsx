import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import Product from './Product.jsx';
import { product } from '../../Data.js'

export default function HighSaleProduct() {

   const [allproduct, setAllProduct] = useState(product)
   const [highSaleProduct, setHighSaleProduct] = useState([])

   useEffect(() => {
      const HighSale = product.filter((pro) => {
         return pro.highSale === true
      })
      setHighSaleProduct(HighSale)

   }, [])

   return (
      <div>
         {/* top */}
         <div className='flex justify-between text-2xl mb-7 '>
            <h2>محصولات پرفروش​</h2>
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
            {highSaleProduct.map((pro) => (
               <SwiperSlide key={pro.proId}>
                  <Product {...pro} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
