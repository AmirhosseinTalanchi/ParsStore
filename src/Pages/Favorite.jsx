import React, { useState, useEffect } from 'react'
import { Link } from 'react-router';
import Product from '../components/Product.jsx';
import { useLocation } from 'react-router'; 


export default function Favorite({ favoriteProduct, onRemoveToFavorite, onAddToComparison ,onAddToCart }) {

  const [paginatedProduct, setPaginatedProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  let pageSize = 15
  let pageCount = Math.ceil(favoriteProduct.length / pageSize)
  let pageNumber = Array.from(Array(pageCount).keys())
  let endIndex = pageSize * currentPage
  let startIndex = endIndex - pageSize

  const location = useLocation(); 
  const currentPath = location.pathname; 
  

  useEffect(() => {
    let ProductToSee2 = favoriteProduct.slice(startIndex, endIndex)
    setPaginatedProduct(ProductToSee2)
  }, [favoriteProduct, currentPage, startIndex, endIndex])

  let changePage = (newPage) => {
    setCurrentPage(newPage)
    let endIndex = pageSize * currentPage
    let startIndex = endIndex - pageSize
    let ProductToSee2 = favoriteProduct.slice(startIndex, endIndex)
    setPaginatedProduct(ProductToSee2)
  }
  let prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  let nextPage = () => {
    setCurrentPage(currentPage + 1)
  }





  return (
    <div className='container flex flex-col justify-center items-start w-full'>
      {/* top */}
      <div className='container mt-15 text-zinc-600 text-[13px]'>
        <Link to="/">خانه</Link>
        <Link to="/Favorite"> » علاقه مندی ها</Link>
      </div>
      {/* title */}
      <h2 className='text-zinc-900 text-3xl mt-10 font-medium'>علاقه مندی ها</h2>
      {/* product */}
      {favoriteProduct.length > 0 ? (
        <div>
          {/* top  and products*/}
          <div>
            <div>
              <div className='flex flex-col lg:flex-row gap-5 justify-between'>
                <span className='text-xs text-zinc-500 mt-5'>
                  نمایش {startIndex + 1}–{endIndex > favoriteProduct.length ? favoriteProduct.length : endIndex} از {favoriteProduct.length} نتیجه
                </span>
              </div>
            </div>

            <div className='mt-5 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
              {paginatedProduct.map((pro) => (
                <Product key={pro.proId} {...pro}  currentPath={currentPath} onRemoveToFavorite={onRemoveToFavorite} onAddToComparison={onAddToComparison} onAddToCart={onAddToCart}/>
              ))}
            </div>
          </div>
          {/* pagination */}
          <ul className='flex items-center justify-center text-zinc-500 gap-3 mt-7'>
            <li
              className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${currentPage === 1 ? "hidden" : "block"}`}
              onClick={() => { prevPage() }}
            >
              →
            </li>

            {pageNumber.length > 1 &&
              pageNumber.map((page) => (
                <li
                  className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${page + 1 === currentPage ? " bg-[#1462cf] text-white" : ""}`}
                  key={page}
                  onClick={() => changePage(page + 1)}
                >
                  {page + 1}
                </li>
              ))
            }

            <li
              className={`px-4 py-2 border border-zinc-200 rounded-lg cursor-pointer ${currentPage === (pageNumber.length) ? "hidden" : "block"}`}
              onClick={() => { nextPage() }}
            >
              ←
            </li>
          </ul>
        </div>
      ) : (
        <h4 className='text-[15px] text-zinc-900 mt-7'>لیست علاقه مندی های شما خالیست.</h4>
      )}


    </div>
  )
}
