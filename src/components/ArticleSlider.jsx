import React, { useState } from 'react'
import { Articles } from '../../Data.js'
import Article from './Article'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"

export default function ArticleSlider() {

   const [allArticle, setAllArticle] = useState(Articles)

   const getPandomItems = (arr, count) => {
      const shuffled = [...arr].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count)
   }

   const randomItems = getPandomItems(allArticle, 7)



   return (
   <div className="container">
           <div className='mb-10'>
            {/* top */}
            <div className='flex justify-between text-2xl mb-7 '>
               <h2>مطالب جدید</h2>
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
               {randomItems.map((art) => (
                  <SwiperSlide key={art.proId}>
                     <Article {...art} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
       </div>



   )
}
 