import React from 'react'

export default function Footer() {
   return (

      <>
         <div className='flex flex-col justify-center items-center w-full bg-zinc-900 mt-15'>
            {/* footer top */}
            <div className='container'>
               <div className=' flex justify-between  px-10 py-7 w-full'>
                  <div className='flex flex-col md:flex-row gap-10 w-full md:w-50'>
                     <div className='flex items-center justify-between md:justify-start gap-2 w-full'>
                        <div className='flex items-center gap-2 '>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white icon icon-tabler icons-tabler-outline icon-tabler-headset">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
                              <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
                              <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                              <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
                           </svg>
                           <span className='text-white'>12345</span>
                        </div>
                        <label className='bg-zinc-800 text-zinc-500 text-xs rounded-lg px-1.5 py-1'>تلفن</label>
                     </div>
                     <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center justify-between gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white icon icon-tabler icons-tabler-outline icon-tabler-mail">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                              <path d="M3 7l9 6l9 -6"></path>
                           </svg>
                           <span className='text-white'>support@example.com</span>
                        </div>
                        <label className='bg-zinc-800 text-zinc-500 text-xs rounded-lg px-1.5 py-1'>ایمیل</label>
                     </div>
                  </div>
                  <div className='hidden md:flex items-center gap-2'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-8">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M12 12l-3 2"></path>
                        <path d="M12 7v5"></path>
                     </svg>
                     <span className='text-white'>8 صبح تا 8 شب</span>
                     <label className='bg-zinc-800 text-zinc-500 text-xs rounded-lg px-1.5 py-1'>زمان پشتیبانی</label>
                  </div>
               </div>
            </div>

         </div>
         {/* footer button */}

         <div className='flex flex-col justify-center items-center w-full bg-zinc-800'>
            <div className='container'>
               <div className=' bg-zinc-800 flex justify-between flex-col pt-10'>
                  <div className='flex  text-zinc-400  bg-zinc-800 gap-7 flex-col xl:flex-row items-center justify-between'>

                     <div className='flex flex-col lg:flex-row gap-15'>
                        <div className='flex flex-col gap-3'>
                           <img src='public/Photo/logo-dark.png' className='w-36 h-6'></img>
                           <p className='min-w-1'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آن چنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>
                        <div className='flex gap-40 min-w-100'>
                           <ul className='flex flex-col gap-3'>
                              <li>خانه</li>
                              <li>تایپوگرافی</li>
                              <li>ابزارک ها</li>
                              <li>المان ها</li>
                              <li>درباره ما</li>
                              <li>تماس با ما</li>
                           </ul>
                           <ul className='flex flex-col gap-3'>
                              <li>مقایسه محصول</li>
                              <li>علاقه مندی ها</li>
                              <li>راهنمای خرید</li>
                              <li>راهنمای مرجوعی</li>
                              <li>شرایط و قوانین</li>
                           </ul>
                        </div>
                     </div>

                     <div>
                        <p className='w-69 mb-5'>ایران، تهران، بلوار یک، خیابان دو، کوچه سه، ساختمان چهار، واحد پنج، پلاک شش</p>
                        <div className='flex gap-3'>
                           <img className='w-18.75 h-22 contain-content rounded-xl bg-white' src="/public/Photo/footer-img/enemad.png" />
                           <img className='w-18.75 h-22 contain-content rounded-xl bg-white' src="/public/Photo/footer-img/samandehi.png" />
                           <img className='w-18.75 h-22 contain-content rounded-xl bg-white' src="/public/Photo/footer-img/senf.png" />
                        </div>
                     </div>

                  </div>
                  <h3 className='flex justify-center text-white mt-10 mb-20'>کلیه حقوق مادی و معنوی متعلق به این فروشگاه بوده و کپی برداری و انتشار مطالب مجاز نمی باشد.</h3>
               </div>
            </div>
         </div>

      </>

   )
}



