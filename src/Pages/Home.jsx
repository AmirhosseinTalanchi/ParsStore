import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'
import HeaderBaner from '../components/HeaderBaner'

export default function Home() {

   const [isOpen, setIsOpen] = useState(false)

   const CloseHandler = () => {
      if (isOpen) {
         setIsOpen(false)
      }
   }

   return (
      <div className='w-full container font-iransans'>
         <TopBar setIsOpen={setIsOpen} />
         <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
         <DeskTopMenu />
         <HeaderBaner />
      </div>
   )
}



