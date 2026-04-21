import React from 'react'

export default function Manitor({ proGat }) {
   return (

      <>
         {proGat === "all" || proGat === "TV" || proGat === "watch" || proGat === "manitor" ? (
            <>
               <div className=' border border-zinc-300 rounded-lg p-5'>

                  <div className='border-b border-zinc-200 pb-4 relative'>
                     <h2 className='text-lg'>صفحه نمایش</h2>
                     <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
                  </div>

                  <div className='mt-7 flex flex-col gap-4'>
                     {proGat === "TV" ? null: (
                        <>
                           <div className='flex justify-between'>
                              <h3 className='text-[15px]'>IPS</h3>
                              <div className='w-5 h-5 pt-0.5 rounded-lg bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "watch" ? 1 : proGat === "manitor" ? 4 :  proGat === "all" ? 5 : null}</div>
                           </div>
                        </>
                     ) 
                     }
                     {proGat === "manitor" ? null :(
                        <>
                           <div className='flex justify-between '>
                              <h3 className='text-[15px]'>OLED</h3>
                              <div className='w-5 h-5 pt-0.5 rounded-lg bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "TV" ? 3 : proGat === "watch" ? 3 : proGat === "all" ? 6 : null}</div>
                           </div>
                        </>
                     ) 
                     }
                  </div>
               </div>
            </>
         ):null}
      </>


   )
}
