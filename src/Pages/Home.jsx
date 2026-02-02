import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
import HeaderBaner from '../components/HeaderBaner'
import Category from '../components/Category.jsx'
import Data from '../../Data.js'
import NewestProduct from '../components/NewestProduct.jsx'


export default function Home() {

   const [isOpen, setIsOpen] = useState(false)
   const [category, setCategory] = useState(Data)

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
         
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-[50px] mt-4 gap-4 '>
            {category.map((category)=>(
               <Category key={category.id} {...category} />
            ))}
         </div>

         <NewestProduct/>


      </div>   
     </>
     
   )
}



