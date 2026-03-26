import React from 'react'

export default function Article({ img, category, date, title, caption }) {
   return (
      <div className='border border-zinc-300 rounded-lg p-2 mr-3'>
         <img className='rounded-lg w-60 h-41.25' src={img} />
         <div className='p-4'>
            <div className='flex gap-4 mb-3'>
               <span className='text-zinc-500 text-xs'>{category}</span>
               <span className='text-zinc-500 text-xs'>{date}</span>
            </div>
            <h3 className='line-clamp-2 text-zinc-900 text-[16px] mb-5'>{title}</h3>
            <p className='line-clamp-2 text-zinc-700 text-sm'>{caption}</p>
         </div>
      </div>
   )
}
