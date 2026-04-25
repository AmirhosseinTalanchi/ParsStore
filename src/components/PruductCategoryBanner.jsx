import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import { categoryBanner } from '../../Data.js'
import { Link } from 'react-router';

export default function ProductCategoryBanner() {

   const [allProductBanner, setAllProductBanner] = useState(categoryBanner)
   const [bannerToShow, setBannerToShow] = useState([])
 


   useEffect(() => {
      const procat = allProductBanner.filter((banner) => {
         return banner.id > 8
      })
      setBannerToShow(procat)

   }, [])




   return (
      <div className='container mb-15'>
      
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
               {bannerToShow.map((banner) => (
                  <SwiperSlide key={banner.id}>
                     <Link to={`/Shop/${banner.categoryE}`} className="flex flex-col text-center p-1">
                        <img
                           src={banner.img}
                        />
                        <span className="text-xs text-zinc-600">
                           {banner.label}
                        </span>
                     </Link>
                  </SwiperSlide>
               ))}
            </Swiper>


      </div>
   )
}
