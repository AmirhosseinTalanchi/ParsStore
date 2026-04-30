import React, { useEffect, useState } from 'react'
import CartProduct from './CartProduct'

export default function ShopingCartMenu({ isOpenCart, onClose, cartProduct, CloseHandler, onRemoveTaCart }) {

   const [cart, setCart] = useState(cartProduct);
   const [totalCartPrice, setTotalCartPrice] = useState(0);
   
 

   const updateQuantity = (proId, newCount) => {
      const updatedCart = cart.map(item => {
         if (item.proId === proId) {
            return { ...item, count: newCount };
         }
         return item;
      });
      setCart(updatedCart);
   };




   
  useEffect(()=> {
      setCart(cartProduct)
   },[cartProduct])
   
   useEffect(() => {
      const sum = cart.reduce((accumulator, currentItem) => {
          return accumulator + (currentItem.price * currentItem.count);
      }, 0);
      setTotalCartPrice(sum);
  }, [cart]); // این useEffect هر بار که سبد خرید (cart) تغییر می‌کند، اجرا می‌شود


  console.log(cart)

   return (
      <>
         {/* shoping cart menu */}
         <div className={`${isOpenCart ? "left-0" : "-left-80"} flex flex-col justify-between py-4 px-3 bg-white h-full w-80 top-0 bottom-0 fixed z-90 transition-all duration-300`}>
            <div>
               {/* header */}
               <div className='flex justify-between border-b pb-2 border-zinc-300'>
                  <h3 className='text-lg text-zinc-900'>سبد خرید</h3>
                  <span className='text-sm text-zinc-500 cursor-pointer' onClick={CloseHandler}> بستن منو</span>
               </div>
               {/* product */}
               <div className='h-150 overflow-y-auto'>
                  {cart.map((pro) => (
                     <CartProduct key={pro.proId} {...pro} initialCount={pro.count} onRemoveTaCart={onRemoveTaCart} onUpdateQuantity={updateQuantity} />
                  ))}
               </div>
            </div>
            {/* footer */}
            <div className=' border-t border-zinc-300'>
               <div className='flex justify-between items-center pt-2 '>
                  <span className='text-[16px] text-zinc-900'>جمع سبد</span>
                  <span className='text-sm'>{totalCartPrice.toLocaleString()} تومان</span>
               </div>
               <div className='flex w-full gap-5 mt-3'>
                  <button className='w-full bg-[#1462cf] rounded-xl text-white h-11' onClick={CloseHandler}>ادامه خرید</button>
                  <button className='w-full bg-[#1462cf] rounded-xl text-white h-11'>پرداخت</button>
               </div>
            </div>
         </div>
         {/* blur */}
         <div className={`hidden  z-80 top-0 right-0 left-0 bottom-0 fixed ${isOpenCart && "inline bg-black/65"}`} onClick={onClose} ></div>

      </>
   )
}
