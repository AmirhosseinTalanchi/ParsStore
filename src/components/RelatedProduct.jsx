import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import Product from './Product.jsx';


export default function RelatedProduct({ relatedProducts, onAddToFavorite, onAddToComparison, onAddToCart }) {



   return (
      <div className='container'>
         <div className='mt-15 mb-7'>

            {/* top */}

            <h2>محصولات مرتبط</h2>

            {/* product */}
            <Swiper
               modules={[Navigation]}
               spaceBetween={2}
               slidesPerView={2}
               breakpoints={{
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1200: { slidesPerView: 5 }

               }}
            >
               {relatedProducts.map((pro) => (
                  <SwiperSlide key={pro.proId}>
                     <Product {...pro} onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}
