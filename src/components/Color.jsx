import React from 'react'

export default function Color({ proGat }) {


   return (
      <>
         {proGat === "cpu" ? null : (
            <div className=' border border-zinc-300 rounded-lg p-5'>
               <div className='border-b border-zinc-200 pb-4 relative'>
                  <h2 className='text-lg'>رنگ</h2>
                  <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
               </div>
               <div className='mt-7 flex flex-col gap-4'>
                  {/* blue */}

                  {proGat === "all" || proGat === "mobile" || proGat === "console" || proGat === "watch" || proGat === "console" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#1e81eb]'></div>
                              <h3 className='text-[15px]'>آبی</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === 'all' ? 7 : proGat === "mobile" ? 4 : proGat === "console" ? 1 : proGat === "watch" ? 2 : proGat === "console" ? 1 : null}</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* khakestary */}

                  {proGat === "all" || proGat === "laptop" || proGat === "headphone" || proGat === "keybord" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#808080]'></div>
                              <h3 className='text-[15px]'>خاکستری</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 2 : proGat === "headphone" ? 1 : proGat === "keybord" ? 1 : proGat === "all" ? 4 : null}</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* rozgold */}

                  {proGat === "all" || proGat === "mobile" || proGat === "headphone" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#bf7269]'></div>
                              <h3 className='text-[15px]'>رزگلد</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 3 : proGat === "headphone" ? 1 : proGat === "all" ? 4 : null}</div>
                        </div>

                     </>
                  ) : (null)
                  }

                  {/* yellow */}

                  {proGat === "all" || proGat === "mobile" || proGat === "console" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#ffcb0f]'></div>
                              <h3 className='text-[15px]'>زرد</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 1 : proGat === "console" ? 1 : proGat === "all" ? 2 : null}</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* green */}

                  {proGat === "all" || proGat === "laptop" || proGat === "watch" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#1cbc10]'></div>
                              <h3 className='text-[15px]'>سبز</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 1 : proGat === "watch" ? 1 : proGat === "all" ? 2 : null}</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* white */}

                  {proGat === "all" || proGat === "laptop" || proGat === "PC" || proGat === "console" || proGat === "watch" || proGat === "camera" || proGat === "manitor" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#ffffff]'></div>
                              <h3 className='text-[15px]'>سفید</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "laptop" ? 1 : proGat === "PC" ? 1 : proGat === "console" ? 4 : proGat === "watch" ? 1 : proGat === "camera" ? 1 : proGat === "manitor" ? 2 : proGat === "all" ? 10 : null}</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* red */}

                  {proGat === "all" || proGat === "mobile" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#fb5061]'></div>
                              <h3 className='text-[15px]'>قرمز</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>2</div>
                        </div>
                     </>
                  ) : (null)
                  }

                  {/* black */}

                  <>
                     <div className='flex justify-between'>
                        <div className='flex items-center gap-2'>
                           <div className='w-3.5 h-3.5 rounded-2xl bg-[#000000]'></div>
                           <h3 className='text-[15px]'>مشکی</h3>
                        </div>
                        <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>{proGat === "mobile" ? 4 : proGat === "laptop" ? 2 : proGat === "PC" ? 2 : proGat === "TV" ? 4 : proGat === "console" ? 3 : proGat === "watch" ? 1 : proGat === "camera" ? 5 : proGat === "headphone" ? 4 : proGat === "mouse" ? 3 : proGat === "keybord" ? 4 : proGat === "manitor" ? 4 : proGat === "all" ? 36 : null}</div>
                     </div>
                  </>

                  {/* silver */}

                  {proGat === "all" || proGat === "mobile" ? (
                     <>
                        <div className='flex justify-between'>
                           <div className='flex items-center gap-2'>
                              <div className='w-3.5 h-3.5 rounded-2xl bg-[#c7c7c7]'></div>
                              <h3 className='text-[15px]'>نقره‌ای</h3>
                           </div>
                           <div className='w-5 h-5 rounded-lg pt-0.5 bg-[#1462cf] text-white flex justify-center items-center text-[13px]'>2</div>
                        </div>
                     </>
                  ) : (null)
                  }
                  
               </div>
            </div>
         )}
      </>
   )
}
