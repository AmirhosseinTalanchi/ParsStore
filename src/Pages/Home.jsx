import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'
import DeskTopMenu from '../components/DeskTopMenu'

export default function Home() {

   const [isOpen, setIsOpen] = useState(false)

   const CloseHandler = () => {
      if (isOpen) {
         setIsOpen(false)
      }
   }

   return (
      <div className='w-full container px-4'>
         <TopBar setIsOpen={setIsOpen} />
         <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
         <DeskTopMenu/>
      </div>
   )
}



