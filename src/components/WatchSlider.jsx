import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import { product } from '../../Data.js'
import Product from './Product.jsx';

export default function WatchSlider({onAddToFavorite,onAddToComparison}) {

   const [allProduct, setAllProduct] = useState(product)
   const [watchSliderProduct, setWatchSliderProduct] = useState([])





   useEffect(() => {
      const Watch = allProduct.filter((pro) => {
         return pro.categoryE === "watch"
      })
      setWatchSliderProduct(Watch)

   }, [])


   return (

      <div className="container">
         <div>
            <div className='flex justify-between text-2xl mb-7 '>
               <h2>ساعت هوشمند</h2>
            </div>

            <div className='mb-10'>

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
                  {watchSliderProduct.map((pro) => (
                     <SwiperSlide key={pro.proId}>
                        <Product {...pro} onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>


   )
}
