import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { categoryBanner } from '../../Data.js'
import { Link } from 'react-router';

export default function ProductCategoryBanner() {

    const [allProductBanner, setAllProductBanner] = useState(categoryBanner)

    useEffect(() => {
          const procat = allProductBanner.filter((banner) => {
             return banner.id >  8
          })
          setAllProductBanner(procat)
    
       }, [])
     
   
      

   return (
      <div className='container w-full mb-20'>
         <Swiper
            modules={[Navigation]}
           
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
               768: { slidesPerView: 8 },
               1024: { slidesPerView: 10 },
               1200: { slidesPerView: 12 }
            }}
         >
            {allProductBanner.map((banner) => (
               <SwiperSlide key={banner.id}>
                  <Link to={`/Shop/${banner.categoryE}`} className='text-center block p-1'>
                     <img src={banner.img}/>
                     <span className='text-xs text-zinc-600'>{banner.label}</span>
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
