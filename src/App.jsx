import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Favorite from './Pages/Favorite'
import TopBar from './components/TopBar'
import MobieMenu from './components/MobieMenu'
import DeskTopMenu from './components/DeskTopMenu'
import Footer from './components/Footer.jsx';
import { categoryBanner, product, } from '../Data.js'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [allProduct, setAllProduct] = useState(product)
  const [favoriteProduct, setFavoriteProduct] = useState([])


  const location = useLocation();

  const CloseHandler = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const addToFavorite = (proId) => {
    let favorit = allProduct.find((pro) => {
      return pro.proId === proId
    })
    setFavoriteProduct(prevFavoriteProduct => {
      if (prevFavoriteProduct.some(item => item.proId === favorit.proId)) {
        return prevFavoriteProduct; 
      }
      return [...prevFavoriteProduct, favorit];
    });
  }

  console.log(favoriteProduct)

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (

    <div dir='rtl' className='flex flex-col items-center justify-center w-full font-iransans box-border'>

      <TopBar setIsOpen={setIsOpen} />
      <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
      <DeskTopMenu />

      <Routes>
        <Route path='/' element={<Home onAddToFavorite={addToFavorite} />} />
        <Route path='/Shop/:proGat' element={<Shop onAddToFavorite={addToFavorite} />} />
        <Route path='/Favorite' element={<Favorite/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
