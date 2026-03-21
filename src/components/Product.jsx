import React from 'react'

export default function Pruduct({img,category,score,title,price,discount}) {
   return (
      <div className='relative flex flex-col border border-zinc-300 p-4 rounded-xl group m-2 z-50 transition-all duration-500 overflow-hidden '>
         <img src={img} />
         <div>
            <div className='flex justify-between mb-4'>
               <span className='text-zinc-500 text-xs'>{category}</span>
               {score && (
                  <div className='flex items-center gap-1'>
                     <span className='text-zinc-500 text-xs'>{score}</span>
                     <svg className='w-3.5 h-3.5 text-zinc-600' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                  </div>
               )}
            </div>
            <div className='transition-all duration-500'>
               <div className='mb-10 mt-5 h-11'>
                  <h2 className='text-[15px] line-clamp-2'>{title}</h2>
               </div>
               <div className='text-left text-sm'>
                  <span>{price.toLocaleString()} تومان</span>
               </div>
            </div>
            <div className='absolute bottom-4 left-0 right-0 bg-white opacity-0 max-h-0 scale-95 flex flex-col border-t border-zinc-300  px-4 pt-4 items-center transition-all duration-500  pointer-events-none group-hover:opacity-100 group-hover:max-h-60 group-hover:scale-100 group-hover:pointer-events-auto'>
               <button className='px-4 py-3 border border-zinc-300 rounded-xl text-zinc-500 mb-3'>افزودن به سبد خرید</button>
               <div className='flex gap-9 text-zinc-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-eye">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                     <path d="M21 12c-2.4 4 -5.4 6 -9 6s-6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6s6.6 2 9 6"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-git-compare">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                     <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                     <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                     <path d="M14 9l-3 -3l3 -3"></path>
                     <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path>
                     <path d="M10 15l3 3l-3 3"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-heart">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828"></path>
                     <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                     <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                  </svg>
               </div>
            </div>
            {discount && (
               <div className='w-22 h-6 flex text-[12px] text-white transform -rotate-90 absolute top-8 -right-2'>
                  <div className=' bg-emerald-700 px-2 py-1 '>{discount}%</div>
                  <div className=' bg-emerald-600 px-2 py-1  rounded-tl-lg rounded-bl-lg'>تخفیف</div>
               </div>
            )}
         </div>
      </div>
   )
}
