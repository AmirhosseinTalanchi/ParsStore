import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
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
import Footer from '../components/Footer.jsx';

export default function Home() {

   const [allProduct, setAllProduct] = useState(product)
   const [isOpen, setIsOpen] = useState(false)
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



   const CloseHandler = () => {
      if (isOpen) {
         setIsOpen(false)
      }
   }



   return (
      <>
         <div className=' w-full font-iransans overflow-hidden flex justify-center flex-col items-center '>

            <TopBar setIsOpen={setIsOpen} />

            <MobieMenu isOpen={isOpen} onClose={CloseHandler} />

            <DeskTopMenu />

            <HeaderBaner />

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12.5 mt-4 gap-4 '>
               {category1.map((category) => (
                  <Category key={category.id} {...category} />
               ))}
            </div>

            <PruductCategoryBanner/>

            <NewestProduct />

            <ConsoleBanner/>
             
            <HighSaleProduct />

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

            <WatchSlider />

            <FooterBanner />

            <ArticleSlider />

            <Footer />
         </div>
      </>

   )
}



