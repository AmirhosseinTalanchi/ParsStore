import React, { use, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { product } from '../../Data.js'
import RelatedProduct from "../components/RelatedProduct.jsx"
import { register } from 'swiper/element'


export default function ProductInfo({ onAddToFavorite, onAddToComparison, onAddToCart }) {

   const [allProduct, setAllProduct] = useState(product)
   const [selectedProduct, setSelectedProduct] = useState([])
   const [menuStatus, setMenuStatus] = useState("توضیحات")
   const [relatedProducts, setRelatedProducts] = useState([])
   const [comment, setComment] = useState("")
   const [userName, setUserName] = useState("")
   const [email, setEmail] = useState("")
   const [score, setScore] = useState(5)

   const { proID } = useParams()
   const register = (e) => {
      e.preventDefault(); // جلوی refresh شدن رو می‌گیره
      if (!selectedProduct.length) return;

      const currentProID = selectedProduct[0].proId;
      const newComment = {
         name: userName,
         email: email,
         comment: comment,
      };
      setAllProduct((prevProducts) =>
         prevProducts.map((p) => {
            // فقط محصولی که proId برابر است را آپدیت کن
            if (p.proId === currentProID) {
               return {
                  ...p,
                  comment: [...(p.comment || []), newComment],
               };
            }
            return p; // بقیه تغییر نکنن
         })
      );
      setComment("");
      setUserName("");
      setEmail("");
   }

   useEffect(() => {
      let productUserWant = allProduct.filter((pro) => {
         return pro.proId === Number(proID)
      })
      setSelectedProduct(productUserWant)
   }, [proID, allProduct])

   useEffect(() => {
      let cat
      if (selectedProduct.length > 0) {
         cat = selectedProduct[0].categoryE
      }
      let relatedP = allProduct.filter((pro) => {
         return pro.categoryE === cat
      })
      let relatedProductOnly = relatedP.filter((pro) => {
         return pro.proId !== selectedProduct[0].proId
      })
      setRelatedProducts(relatedProductOnly)

   }, [selectedProduct])

   return (

      <>
         {selectedProduct.map((pro) => (
            <div className='container flex flex-col justify-start w-full' >
               {/* top */}
               <div div className='container mt-15 text-zinc-600 text-[13px]' >
                  <Link to="/">خانه</Link>
                  <Link to="/Shop/all"> » فروشگاه</Link>
                  <Link to="/"> » {pro.category}</Link>
                  <Link to="/"> » {pro.brand}</Link>
                  <Link to="/"> » {pro.title}</Link>
               </div >
               {/* productInfo */}
               <div className='flex items-center w-full mt-7'>
                  {/* img */}
                  <img className='w-105.5 h-105.5 shrink' src={pro.img} alt="" />
                  {/* info */}
                  <div>
                     {/* info top */}
                     <div className='flex'>
                        {/* info */}
                        <div className='flex flex-col min-w-150 ml-10 shrink'>
                           <div className='flex justify-between'>
                              <div className='flex gap-7'>
                                 <div className='bg-[#1462cf] text-white py-0.5 px-2 text-[13px] rounded-lg'>{pro.category}</div>
                                 <span className='text-[13px] text-zinc-900'>{pro.brand}</span>
                              </div>
                              {pro.score && (
                                 <div className='flex items-center gap-1'>
                                    <span className='text-zinc-500 text-xs'>{pro.score}</span>
                                    <svg className='w-3.5 h-3.5' xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="oklch(82.8% .189 84.429)" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                 </div>
                              )}
                           </div>
                           <h2 className='text-2xl text-zinc-900 mt-5 font-medium'>{pro.title}</h2>
                           <h4 className='text-zinc-500 text-[13px] mt-2.5'>{pro.subtitle}</h4>
                           <p className='text-zinc-600 text-sm my-7 leading-7'>{pro.caption}</p>
                           <span className='font-bold text-lg'>{pro.price.toLocaleString()} تومان</span>
                           <div className='flex items-center w-full gap-3 mt-7'>
                              <div className='flex text-xs border border-zinc-200 rounded-lg'>
                                 <div className='flex items-center justify-center border-l px-2 border-zinc-200'>-</div>
                                 <div className='p-4'>{pro.count}</div>
                                 <div className='flex items-center justify-center border-r px-2 border-zinc-200'>+</div>
                              </div>
                              <div className='flex justify-center py-4 p-6 bg-emerald-600 text-white rounded-lg w-full'>افزودن به سبد خرید</div>
                           </div>
                        </div>
                        {/* left */}
                        <div className='w-full flex flex-col gap-3'>
                           <div className='flex w-full gap-2'>
                              <div className='w-full flex items-center gap-2 border text-xs border-zinc-200 rounded-lg px-3 py-2.5'>
                                 <svg onClick={() => onAddToComparison(proId)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c3d7f2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-git-compare">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M11 6h5a2 2 0 0 1 2 2v8"></path>
                                    <path d="M14 9l-3 -3l3 -3"></path>
                                    <path d="M13 18h-5a2 2 0 0 1 -2 -2v-8"></path>
                                    <path d="M10 15l3 3l-3 3"></path>
                                 </svg>
                                 <span>مقایسه</span>
                              </div>
                              <div className='w-full flex items-center gap-2 border text-xs border-zinc-200 rounded-lg px-3 py-2.5'>
                                 <svg className='cursor-pointer' onClick={() => onAddToFavorite(proId)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag-heart">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304c-.057 .368 -.1 .644 -.127 .828"></path>
                                    <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                                    <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path>
                                 </svg>
                                 <span>علاقه مندی</span>
                              </div>
                           </div>
                           <div className='w-full border border-zinc-200 rounded-lg text-xs py-2.5 px-4'>
                              <span className='flex items-center  text-zinc-900'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600 icon icon-tabler icons-tabler-outline icon-tabler-check">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 12l5 5l10 -10"></path>
                                 </svg>
                                 نقاط قوت
                              </span>
                              {pro.Strengths && (
                                 <ul className='flex flex-col gap-2.5 mt-3 mb-1'>
                                    {Object.values(pro.Strengths).map((strength, index) => (
                                       <li className='text-zinc-500 flex items-center gap-2' key={index}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path></svg>
                                          {strength}
                                       </li>
                                    ))}
                                 </ul>
                              )}
                           </div>
                           <div className='w-full border border-zinc-200 rounded-lg h-31 text-xs py-2.5 px-4'>
                              <span className='flex items-center  text-zinc-900'>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-600 icon icon-tabler icons-tabler-outline icon-tabler-x">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                 </svg>
                                 نقاط ضعف
                              </span>
                              {pro.Strengths && (
                                 <ul className='flex flex-col gap-2.5 mt-3 mb-1'>
                                    {Object.values(pro.weakPoints).map((weakPoints, index) => (
                                       <li className='text-zinc-500 flex items-center gap-2' key={index}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path></svg>
                                          {weakPoints}
                                       </li>
                                    ))}
                                 </ul>
                              )}
                           </div>
                        </div>
                     </div>
                     {/* info button */}
                     <div className='flex w-full mt-7 border border-zinc-200 rounded-lg p-3'>
                        <div className=' w-full flex items-center gap-4'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-truck"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path> <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path> </svg>
                           <div className='flex flex-col gap-1'>
                              <span className='text-zinc-700 text-[13px] font-s'>ارسال اکسپرس</span>
                              <span className='text-zinc-500 text-xs'>تحویل سریع مرسوله</span>
                           </div>
                        </div>
                        <div className=' w-full flex items-center gap-4'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-shield-check"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path> </svg>                           <div className='flex flex-col gap-1'>
                              <span className='text-zinc-700 text-[13px] font-s'>ضمانت اصالت</span>
                              <span className='text-zinc-500 text-xs'>تضمین کیفیت محصول</span>
                           </div>
                        </div>
                        <div className=' w-full flex items-center gap-4'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path> <path d="M9 12l2 2l4 -4"></path> </svg>                           <div className='flex flex-col gap-1'>
                              <span className='text-zinc-700 text-[13px] font-s'>بهترین قیمت</span>
                              <span className='text-zinc-500 text-xs'>گارانتی بهترین قیمت</span>
                           </div>
                        </div>
                        <div className=' w-full flex items-center gap-4'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rosette-discount-check"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path> <path d="M9 12l2 2l4 -4"></path> </svg>                           <div className='flex flex-col gap-1'>
                              <span className='text-zinc-700 text-[13px] font-s'>7 روز گارانتی بازگشت</span>
                              <span className='text-zinc-500 text-xs'>مرجوعی آسان کالا</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* productDiscription */}
               <div className='mt-10 flex gap-7'>
                  {/* button */}
                  <div className='flex flex-col min-w-1/5 gap-3 text-zinc-500'>
                     <button className={`text-[13px] border border-zinc-200 rounded-lg flex justify-start py-3 px-4 ${menuStatus === "توضیحات" && "text-white bg-[#1462cf]"} `} onClick={() => setMenuStatus("توضیحات")}>توضیحات</button>
                     <button className={`text-[13px] border border-zinc-200 rounded-lg flex justify-start py-3 px-4 ${menuStatus === "توضیحات تکمیلی" && "text-white bg-[#1462cf]"} `} onClick={() => setMenuStatus("توضیحات تکمیلی")}>توضیحات تکمیلی</button>
                     <button className={`text-[13px] border border-zinc-200 rounded-lg flex justify-start py-3 px-4 ${menuStatus === "نظرات" && "text-white bg-[#1462cf]"} `} onClick={() => setMenuStatus("نظرات")}>نظرات</button>
                  </div>
                  {/* content */}
                  <div className='w-4/5'>
                     {menuStatus === "توضیحات" ? (
                        <p className='text-zinc-900 text-[15px] leading-7 whitespace-pre-line'>
                           {pro.discription}
                        </p>
                     )
                        : menuStatus === "توضیحات تکمیلی" ? (
                           <div>
                              {pro.property && (
                                 <table className='w-full'>
                                    {Object.values(pro.property).map((property) => (
                                       <tbody key={property.id} className='w-full'>
                                          <tr className='w-full'>
                                             <td className='py-2.5 px-3 w-1/4 rounded-lg border border-zinc-200 text-[13px] text-zinc-900'>{property.label}</td>
                                             <td className='py-2.5 px-3 w-3/4 rounded-lg border border-zinc-200 text-xs text-zinc-600'>{property.value}</td>
                                          </tr>
                                       </tbody>
                                    ))}
                                 </table>
                              )}
                           </div>
                        )
                           : menuStatus === "نظرات" ? (
                              <div>
                                 {pro.comment && pro.comment.length > 0 ? (
                                    pro.comment.map((comment, index) => (
                                       <div key={index} className='border border-zinc-200 rounded-lg w-full p-5 flex flex-col gap-3'>
                                          <h3 className='text-sm text-zinc-900 font-bold'>{comment.name}</h3>
                                          <p className='text-sm text-zinc-700'>{comment.comment}</p>
                                       </div>
                                    ))
                                 ) : (
                                    <div className='w-full border border-zinc-200 rounded-lg text-zinc-700 py-2 px-4'>
                                       هنوز بررسی‌ای ثبت نشده است...
                                    </div>
                                 )}

                                 <div className='mt-6'>
                                    <div className='border-b border-zinc-200 pb-4 relative'>
                                       <h4 className='text-sm text-zinc-900 font-medium'>اولین کسی باشید که دیدگاهی برای "{pro.title}" می‌نویسد</h4>
                                       <div className='bg-[#1462cf] w-10 h-1 rounded-xl absolute -bottom-0.5'></div>
                                    </div>
                                    <div className='mt-10 text-zinc-800 flex flex-col gap-2.5'>
                                       <div>نشانی ایمیل شما منتشر نخواهد شد.</div>
                                       <div>بخش‌های موردنیاز علامت‌گذاری شده‌اند <span className='text-rose-400'>*</span></div>
                                    </div>
                                    <form className='mt-5 flex flex-col gap-7'>
                                       {/* score */}
                                       <div className='flex gap-3'>
                                          <label className='font-bold text-sm text-zinc-900'>امتیاز شما <span className='text-rose-400'>*</span></label>
                                          <div className='flex gap-0.5'>
                                             <div className="text-[#c3d7f2]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                             </div>
                                             <div className="text-[#c3d7f2]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                             </div>
                                             <div className="text-[#c3d7f2]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                             </div>
                                             <div className="text-[#c3d7f2]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                             </div>
                                             <div className="text-[#c3d7f2]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"></path></svg>
                                             </div>
                                          </div>
                                       </div>
                                       {/* comment */}
                                       <div className='flex flex-col gap-3'>
                                          <label htmlFor='comment' className='text-sm text-zinc-900'>دیدگاه شما <span className='text-rose-400'>*</span></label>
                                          <textarea value={comment} onChange={(event) => setComment(event.target.value)} name='comment' className='border border-zinc-200 rounded-lg outline-none p-5 text-sm text-zinc-700'></textarea>
                                       </div>
                                       {/* name */}
                                       <div className='flex flex-col gap-3'>
                                          <label htmlFor='name' className='text-sm text-zinc-900'>نام <span className='text-rose-400'>*</span></label>
                                          <input value={userName} onChange={(event) => setUserName(event.target.value)} type='text' name='name' className='border border-zinc-200 rounded-lg outline-none p-5 text-sm text-zinc-700'></input>
                                       </div>
                                       {/* Email */}
                                       <div className='flex flex-col gap-3'>
                                          <label htmlFor='Email' className='text-sm text-zinc-900'>ایمیل<span className='text-rose-400'>*</span></label>
                                          <input value={email} onChange={(event) => setEmail(event.target.value)} type='text' name='Email' className='border border-zinc-200 rounded-lg outline-none p-5 text-sm text-zinc-700'></input>
                                       </div>
                                       {/* btm */}
                                       <button onClick={register} className='w-full text-white bg-zinc-800 rounded-lg py-3 px-6'>ثبت</button>
                                    </form>
                                 </div>
                              </div>
                           ) : null}
                  </div>
               </div>
               {/* Related products */}
               <RelatedProduct relatedProducts={relatedProducts} onAddToFavorite={onAddToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart} />
            </div >

         ))}

      </>


   )
}
