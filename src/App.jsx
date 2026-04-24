import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Favorite from './Pages/Favorite'
import Comparison from './Pages/Comparison'
import TopBar from './components/TopBar'
import MobieMenu from './components/MobieMenu'
import DeskTopMenu from './components/DeskTopMenu'
import Footer from './components/Footer.jsx';
import { categoryBanner, product, } from '../Data.js'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [allProduct, setAllProduct] = useState(product)

  const [favoriteProduct, setFavoriteProduct] = useState(() => {
    const saved = localStorage.getItem("favoriteProduct");
    return saved ? JSON.parse(saved) : [];
  })
  const [comparisonProduct, setComparisonProduct] = useState(() => {
    const saved2 = localStorage.getItem("comparisonProduct");
    return saved2 ? JSON.parse(saved2) : [];
  })

  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(favoriteProduct));
  }, [favoriteProduct]);

  useEffect(() => {
    localStorage.setItem("comparisonProduct", JSON.stringify(comparisonProduct));
  }, [comparisonProduct]);

 

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
  const removeTaFavorite = (proId) => {
    let newFavorite = favoriteProduct.filter((pro) => {
      return pro.proId !== proId 
    })
    setFavoriteProduct(newFavorite)
  }
  const addToComparison = (proId) => {
    let comparison = allProduct.find((pro) => {
      return pro.proId === proId
    })
    setComparisonProduct(prevComparisonProduct => {
      if (prevComparisonProduct.some(item => item.proId === comparison.proId)) {
        return prevComparisonProduct; 
      }
      return [...prevComparisonProduct, comparison];
    });


  }
  const removeTaComparison = (proId) => {
    let newComparison = comparisonProduct.filter((pro) => {
      return pro.proId !== proId 
    })
    setComparisonProduct(newComparison)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location])


  console.log(favoriteProduct)
  console.log(comparisonProduct)
  return (

    <div dir='rtl' className='flex flex-col items-center justify-center w-full font-iransans box-border'>

      <TopBar setIsOpen={setIsOpen} />
      <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
      <DeskTopMenu />

      <Routes>
        <Route path='/' element={<Home onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} />} />
        <Route path='/Shop/:proGat' element={<Shop onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} />} />
        <Route path='/Favorite' element={<Favorite favoriteProduct={favoriteProduct} onRemoveToFavorite={removeTaFavorite}  onAddToComparison={addToComparison}/>} />
        <Route path='/Comparison' element={<Comparison comparisonProduct={comparisonProduct} onRemoveTaComparison={removeTaComparison} onAddToFavorite={addToFavorite}/>} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
