import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
import HeaderBaner from '../components/HeaderBaner'
import Category from '../components/Category.jsx'
import { categoryBanner, categoryBanner2, product } from '../../Data.js'
import NewestProduct from '../components/NewestProduct.jsx'
import Categort2 from '../components/Categort2.jsx'
import HighSaleProduct from '../components/HighSaleProduct.jsx'


export default function Home() {

   const [allProduct, setAllProduct] = useState(product)

   const [isOpen, setIsOpen] = useState(false)
   const [category, setCategory] = useState(categoryBanner)
   const [category2, setCategory2] = useState(categoryBanner2)

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
               {category.map((category) => (
                  <Category key={category.id} {...category} />
               ))}
            </div>
            <NewestProduct {...allProduct} />
            <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-2 lg:gap-x-4 mb-10 '>
               {category2.map((category2) => (
                  <Categort2 key={category2.id} {...category2} />
               ))}
            </div>

            <HighSaleProduct {...allProduct}/>


         </div>
      </>

   )
}



