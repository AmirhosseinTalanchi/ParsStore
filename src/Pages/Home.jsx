import React, { useState, useEffect } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
import HeaderBaner from '../components/HeaderBaner'
import Category from '../components/Category.jsx'
import { categoryBanner, product } from '../../Data.js'
import NewestProduct from '../components/NewestProduct.jsx'
import Categort2 from '../components/Categort2.jsx'
import HighSaleProduct from '../components/HighSaleProduct.jsx'


export default function Home() {

   const [allProduct, setAllProduct] = useState(product)

   const [isOpen, setIsOpen] = useState(false)
   const [allcategory, setAllCategory] = useState(categoryBanner)
   const [category1, setCategory1] = useState([])
   const [category2, setCategory2] = useState([])

   useEffect(() => {
      const cat1 = allcategory.filter((banner) => {
         return banner.position === 1
      })
      setCategory1(cat1)

   }, [])

   useEffect(() => {
      const cat2 = allcategory.filter((banner) => {
         return banner.position === 2
      })
      // setCategory2(cat2)

   }, [])

   const CloseHandler = () => {
      if (isOpen) {
         setIsOpen(false)
      }
   }

   return (
      <>
         <div className='w-full container font-iransans overflow-hidden '>

            <TopBar setIsOpen={setIsOpen} />
            <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
            <DeskTopMenu />
            <HeaderBaner />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12.5 mt-4 gap-4 '>
               {category1.map((category) => (
                  <Category key={category.id} {...category} />
               ))}
            </div>
            <NewestProduct {...allProduct} />
            <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-2 lg:gap-x-4 mb-10 '>
               {category2.map((category) => (
                  <Categort2 key={category2.id} {...category} />
               ))}
            </div>

            <HighSaleProduct {...allProduct} />


         </div>
      </>

   )
}



