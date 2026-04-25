import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import Product from './Product.jsx';
import { product } from '../../Data.js'

export default function HighSaleProduct({onAddToFavorite,onAddToComparison ,onAddToCart}) {

   const [allproduct, setAllProduct] = useState(product)
  

   const getPandomItems = (arr, count) => {
      const shuffled = [...arr].sort(()=> Math.random()-0.5);
      return shuffled.slice(0,count) 
      } 
   
      const randomItems = getPandomItems(allproduct,7)
   

   return (
    <div className="container">
        <div className='mb-10'>
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
               1200: {slidesPerView: 5}

            }}
         >
            {randomItems.map((pro) => (
               <SwiperSlide key={pro.proId}>
                  <Product {...pro} onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
    </div>
   )
}
