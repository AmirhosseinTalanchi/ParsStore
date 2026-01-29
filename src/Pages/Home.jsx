import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import MobieMenu from '../components/MobieMenu'

export default function Home() {

   const [isOpen, setIsOpen] = useState(false)

   const CloseHandler = () => {
      if(isOpen){
         setIsOpen(false)
      }
   }

   return (
      <>

         <TopBar setIsOpen={setIsOpen} />
         <MobieMenu isOpen={isOpen} />
         <div className={`absolute top-0 right-0 left-0 bottom-0 ${isOpen && "bg-black/30"}`} onClick={CloseHandler}></div>
      </>
   )
}



