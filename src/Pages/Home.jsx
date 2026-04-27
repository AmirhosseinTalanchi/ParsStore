import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import HeaderBaner from '../components/HeaderBaner'
import Category from '../components/Category.jsx'
import PruductCategoryBanner from '../components/PruductCategoryBanner.jsx'
import { categoryBanner, product, } from '../../Data.js'
import NewestProduct from '../components/NewestProduct.jsx'
import ConsoleBanner from '../components/ConsoleBanner.jsx'
import HighSaleProduct from '../components/HighSaleProduct.jsx'
import SliderBanner from '../components/SliderBanner.jsx'
import WatchSlider from '../components/WatchSlider.jsx';
import FooterBanner from '../components/FooterBanner.jsx';
import ArticleSlider from '../components/ArticleSlider.jsx';
import Product from '../components/Product.jsx';

export default function Home({onAddToFavorite, onAddToComparison ,onAddToCart,}) {

   const [allProduct, setAllProduct] = useState(product)
   const [allcategory, setAllCategory] = useState(categoryBanner)
   const [category1, setCategory1] = useState([])
   const [sliderBanner, setSliderBanner] = useState([])

 
   useEffect(() => {
      const cat1 = allcategory.filter((banner) => {
         return banner.position === 1
      })
      setCategory1(cat1)

   }, [])

   useEffect(() => {
      const slider = allcategory.filter((banner) => {
         return banner.position === 3
      })
      setSliderBanner(slider)

   }, [])

   return (
      <>
         <div className='flex justify-center flex-col items-center container'>

            <HeaderBaner />

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12.5 mt-4 gap-4 '>
               {category1.map((category) => (
                  <Category key={category.id} {...category} />
               ))}
            </div>

            <PruductCategoryBanner />

            <NewestProduct onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart}  />

            <ConsoleBanner />

            <HighSaleProduct onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />

            <div className='container'>
               <Swiper
                  modules={[Navigation]}
                  spaceBetween={2}
                  slidesPerView={1}
                  loop="true"
               >
                  {sliderBanner.map((slider) => (
                     <SwiperSlide>
                        <SliderBanner key={slider.id}  {...slider} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            <WatchSlider onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />

            <FooterBanner />

            <ArticleSlider />

         </div>
      </>

   )
}



