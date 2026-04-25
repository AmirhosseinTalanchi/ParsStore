import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Favorite from './Pages/Favorite'
import Comparison from './Pages/Comparison'
import TopBar from './components/TopBar'
import MobieMenu from './components/MobieMenu'
import ShopingCartMenu from './components/ShopingCartMenu'
import DeskTopMenu from './components/DeskTopMenu'
import Footer from './components/Footer.jsx';
import { categoryBanner, product, } from '../Data.js'

function App() {
  const [count, setCount] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [allProduct, setAllProduct] = useState(product)

  const [favoriteProduct, setFavoriteProduct] = useState(() => {
    const saved = localStorage.getItem("favoriteProduct");
    return saved ? JSON.parse(saved) : [];
  })
  const [comparisonProduct, setComparisonProduct] = useState(() => {
    const saved2 = localStorage.getItem("comparisonProduct");
    return saved2 ? JSON.parse(saved2) : [];
  })
  const [cartProduct, setCartProduct] = useState(() => {
    const saved3 = localStorage.getItem("cartProduct");
    return saved3 ? JSON.parse(saved3) : [];
  })


  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(favoriteProduct));
  }, [favoriteProduct]);

  useEffect(() => {
    localStorage.setItem("comparisonProduct", JSON.stringify(comparisonProduct));
  }, [comparisonProduct]);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);


  const location = useLocation();

  const CloseHandler = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false)
    }
    if (isOpenCart) {
      setIsOpenCart(false)
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
  const addToCart = (proId) => {
    let cart = allProduct.find((pro) => {
      return pro.proId === proId
    })
    setCartProduct(prevCartProduct => {
      if (prevCartProduct.some(item => item.proId === cart.proId)) {
        return prevCartProduct;
      }
      return [...prevCartProduct, cart];
    });


  }
  const removeTaCart = (proId) => {
    let newCart = cartProduct.filter((pro) => {
      return pro.proId !== proId
    })
    setCartProduct(newCart)
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (

    <div dir='rtl' className='flex flex-col items-center justify-center w-full font-iransans box-border'>

      <TopBar setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart} cartProduct={cartProduct} />
      <MobieMenu isOpenMenu={isOpenMenu} onClose={CloseHandler} />
      <ShopingCartMenu isOpenCart={isOpenCart} onClose={CloseHandler} cartProduct={cartProduct} CloseHandler={CloseHandler} onRemoveTaCart={removeTaCart} />
      <DeskTopMenu />





      <Routes>
        <Route path='/' element={<Home onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart}/>} />
        <Route path='/Shop/:proGat' element={<Shop onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart} />} />
        <Route path='/Favorite' element={<Favorite favoriteProduct={favoriteProduct} onRemoveToFavorite={removeTaFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart} />} />
        <Route path='/Comparison' element={<Comparison comparisonProduct={comparisonProduct} onRemoveTaComparison={removeTaComparison} onAddToFavorite={addToFavorite} onAddToCart={addToCart} />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
