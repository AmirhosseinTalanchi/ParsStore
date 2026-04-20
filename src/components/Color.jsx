import React from 'react'

export default function Color({ proGat }) {


   return (
      <div className=' border border-zinc-300 rounded-lg p-5'>
         <div className='border-b border-zinc-200 pb-4 relative'>
            <h2 className='text-lg'>رنگ</h2>
            <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
         </div>
         <div className='mt-7 flex flex-col gap-4'>
            {/* blue */}

            {proGat === "all" || proGat === "mobile" || proGat === "console" || proGat === "watch" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#1e81eb]'></div>
                        <h3 className='text-[15px]'>آبی</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === 'all' ? 7 : proGat === "mobile" ? 4 : proGat === "console" ? 1 : proGat === "watch" ? 2 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* rozgold */}

            {proGat === "mobile" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#bf7269]'></div>
                        <h3 className='text-[15px]'>رزگلد</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 3 : null}</div>
                  </div>

               </>
            ) : (null)
            }

            {/* yellow */}

            {proGat === "mobile" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#ffcb0f]'></div>
                        <h3 className='text-[15px]'>زرد</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 1 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* red */}

            {proGat === "mobile" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#fb5061]'></div>
                        <h3 className='text-[15px]'>قرمز</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 2 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* khakestary */}

            {proGat === "laptop" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#808080]'></div>
                        <h3 className='text-[15px]'>خاکستری</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 2 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* green */}

            {proGat === "laptop" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#1cbc10]'></div>
                        <h3 className='text-[15px]'>سبز</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 1 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* white */}

            {proGat === "laptop" || proGat === "PC" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#ffffff]'></div>
                        <h3 className='text-[15px]'>سفید</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 1 : proGat === "PC" ? 1 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* black */}

            {proGat === "mobile" || proGat === "laptop"  || proGat === "PC" || proGat === "TV" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#000000]'></div>
                        <h3 className='text-[15px]'>مشکی</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 4 : proGat === "laptop" ? 2 : proGat === "PC" ? 2 : proGat === "PC" ? 4 : null}</div>
                  </div>
               </>
            ) : (null)
            }

            {/* silver */}

            {proGat === "mobile" ? (
               <>
                  <div className='flex justify-between'>
                     <div className='flex items-center gap-2'>
                        <div className='w-3.5 h-3.5 rounded-2xl bg-[#c7c7c7]'></div>
                        <h3 className='text-[15px]'>نقره‌ای</h3>
                     </div>
                     <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 2 : null}</div>
                  </div>
               </>
            ) : (null)
            }



         </div>
      </div>
   )
}
