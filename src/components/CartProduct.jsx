import React, { useEffect, useState } from 'react'

export default function CartProduct({ img, title, proId, price, onRemoveTaCart, initialCount = 1, onUpdateQuantity}) {

 
   const [count, setCount] = useState(initialCount);
   const [totalPrice, setTotalPrice] = useState(price * initialCount);

   useEffect(() => {
      setTotalPrice(price * count);
   }, [count, price]);

   const add = () => {
      const newCount = count + 1;
      setCount(newCount);
      onUpdateQuantity(proId, newCount);
   };
   const mi = () => {
      if (count > 1) {
          const newCount = count - 1;
          setCount(newCount);
          onUpdateQuantity(proId, newCount);
      } else {
          onRemoveTaCart(proId);
          
      }
  };


   return (
      <div className='flex mt-5 cursor-pointer w-full'>
         <img className='w-22 h-22' src={img} alt="" />
         <div className='flex flex-col gap-2 w-full'>
            <h4 className='line-clamp-1 mt-1 text-sm'>{title}</h4>
            <span className='text-red-600 text-xs'>{totalPrice.toLocaleString()} تومان</span>
            <div className='flex gap-3 items-center'>
               <div className='flex'>
                  <div className='px-2 select-none cursor-pointer border border-zinc-200 flex justify-center items-center rounded-tr-sm rounded-br-sm'onClick={add}>+</div>
                  <div className='px-2 select-none border border-zinc-200 flex justify-center items-center text-sm'>{count}</div>
                  <div className='px-2 select-none cursor-pointer border border-zinc-200 flex justify-center items-center rounded-tl-sm rounded-bl-sm'onClick={mi}>-</div>
               </div>
               <div className='text-red-600 font-bold' onClick={() => onRemoveTaCart(proId)}>✕</div>
            </div>
         </div>
      </div>
   )
}
