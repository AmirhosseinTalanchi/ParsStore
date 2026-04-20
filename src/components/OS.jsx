import React from 'react'

export default function OS({ proGat }) {

   return (
      <>
         {proGat === "laptop" || proGat === "PC" ? null : (

            <div className=' border border-zinc-300 rounded-lg p-5'>
               <div className='border-b border-zinc-200 pb-4 relative '>
                  <h2 className='text-lg'>سیستم عامل</h2>
                  <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
               </div>
               <div className='mt-7 flex flex-col gap-4'>

                  {proGat === "mobile" || proGat === "all" ? (
                     <>
                        <div className='flex justify-between '>
                           <h3>آی او اس</h3>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 3 : null}</div>
                        </div>
                     </>
                  ) : null
                  }

                  {proGat === "mobile" || proGat === "all" || proGat === "TV" ? (
                     <>
                        <div className='flex justify-between '>
                           <h3>اندروید</h3>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 2 : proGat === "TV" ? 1 : null}</div>
                        </div>
                     </>
                  ) : null
                  }

                  {proGat === "all" ? (
                     <>
                        <div className='flex justify-between '>
                           <h3>تایزن</h3>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>4</div>
                        </div>
                     </>
                  ) : null
                  }

                  {proGat === "all" ? (
                     <>
                        <div className='flex justify-between '>
                           <h3>ویندوز</h3>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>2</div>
                        </div>
                     </>
                  ) : null
                  }

               </div>
            </div>
         )}

      </>
   )
}
