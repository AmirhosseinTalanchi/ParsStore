import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Favorite from './Pages/Favorite'
import Comparison from './Pages/Comparison'
import ProductInfo from './Pages/ProductInfo'
import TopBar from './components/TopBar'
import MobieMenu from './components/MobieMenu'
import ShopingCartMenu from './components/ShopingCartMenu'
import DeskTopMenu from './components/DeskTopMenu'
import Footer from './components/Footer.jsx';
import { categoryBanner, product, } from '../Data.js'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [allProduct, setAllProduct] = useState(product)
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

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
  const location = useLocation();

  
  useEffect(() => {
    localStorage.setItem("favoriteProduct", JSON.stringify(favoriteProduct));
  }, [favoriteProduct]);

  useEffect(() => {
    localStorage.setItem("comparisonProduct", JSON.stringify(comparisonProduct));
  }, [comparisonProduct]);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
  }, [cartProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])


  const CloseHandler = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false)
    }
    if (isOpenCart) {
      setIsOpenCart(false)
    }
    if (subMenuIsOpen) (
      setSubMenuIsOpen(false)
    )
  }
  const addToFavorite = (proId) => {
    const favorit = allProduct.find((pro) => pro.proId === proId);
    setFavoriteProduct(prevFavoriteProduct => {
      const isExist = prevFavoriteProduct.some(item => item.proId === favorit.proId);
      if (isExist) {
        toast.error('این محصول قبلاً به لیست علاقه‌مندی‌ها اضافه شده است', {
          duration: 4000,
          position: 'top-left'
        });
        return prevFavoriteProduct;
      }
      toast.success('محصول به لیست علاقه‌مندی‌ها اضافه شد', {
        duration: 4000,
        position: 'top-left'
      });
      return [...prevFavoriteProduct, favorit];
    });
  };
  const removeTaFavorite = (proId) => {
    let newFavorite = favoriteProduct.filter((pro) => {
      return pro.proId !== proId
    })
    setFavoriteProduct(newFavorite)
    toast.error("محصول از لیست علاقه مندی ها حذف شد", {
      duration: 4000,
      position: 'top-left'
    })
  }
  const addToComparison = (proId) => {
    const comparison = allProduct.find((pro) => pro.proId === proId);
    setComparisonProduct(prevComparisonProduct => {
      const isExist = prevComparisonProduct.some(item => item.proId === comparison.proId);
      if (isExist) {
        toast.error('این محصول قبلاً به لیست مقایسه اضافه شده است', {
          duration: 4000,
          position: 'top-left'
        });
        return prevComparisonProduct;
      }
      toast.success('محصول به لیست مقایسه اضافه شد', {
        duration: 4000,
        position: 'top-left'
      });
      return [...prevComparisonProduct, comparison];
    });
  }
  const removeTaComparison = (proId) => {
    let newComparison = comparisonProduct.filter((pro) => {
      return pro.proId !== proId
    })
    setComparisonProduct(newComparison)
    toast.error("محصول از لیست مقایسه حذف شد", {
      duration: 4000,
      position: 'top-left'
    })
  }
  const addToCart = (proId) => {
    const cart = allProduct.find((pro) => pro.proId === proId);
    setCartProduct(prevCartProduct => {
      const isExist = prevCartProduct.some(item => item.proId === cart.proId);
      if (isExist) {
        toast.error('این محصول قبلاً به سبد خرید اضافه شده است', {
          duration: 4000,
          position: 'top-left'
        });
        return prevCartProduct;
      }
      toast.success('محصول به سبد خرید اضافه شد', {
        duration: 4000,
        position: 'top-left'
      });
      return [...prevCartProduct, cart];
    });


  }
  const removeTaCart = (proId) => {
    let newCart = cartProduct.filter((pro) => {
      return pro.proId !== proId
    })
    setCartProduct(newCart)
    toast.error(" یک محصول از سبد خرید حذف شد", {
      duration: 4000,
      position: 'top-left'
    })
  }
  const openSebMenu = () => {
    setSubMenuIsOpen(prevSubMenuIsOpen => !prevSubMenuIsOpen)
    console.log(subMenuIsOpen)
  }
  const getSelectedProductInfo = () => {
    let selectedProduct = allProduct.filter((pro) => {
      return pro.proId === 1
    }, [])

    setProductUserWantSee(selectedProduct)
  }

  return (

    <div dir='rtl' className='flex flex-col items-center justify-center w-full font-iransans box-border'>


      <TopBar setIsOpenMenu={setIsOpenMenu} setIsOpenCart={setIsOpenCart} cartProduct={cartProduct} />
      <DeskTopMenu />
      <ShopingCartMenu isOpenCart={isOpenCart} onClose={CloseHandler} cartProduct={cartProduct} CloseHandler={CloseHandler} onRemoveTaCart={removeTaCart} />
      <MobieMenu isOpenMenu={isOpenMenu} onClose={CloseHandler} subMenuIsOpen={subMenuIsOpen} onOpenSebMenu={openSebMenu} />


      <Routes>
        <Route path='/' element={<Home onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart} />} />
        <Route path='/Shop/:proGat' element={<Shop onAddToFavorite={addToFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart} />} />
        <Route path='/Favorite' element={<Favorite favoriteProduct={favoriteProduct} onRemoveToFavorite={removeTaFavorite} onAddToComparison={addToComparison} onAddToCart={addToCart} />} />
        <Route path='/Comparison' element={<Comparison comparisonProduct={comparisonProduct} onRemoveTaComparison={removeTaComparison} onAddToFavorite={addToFavorite} onAddToCart={addToCart} />} />
        <Route path='/ProductInfo/:proID' element={<ProductInfo allProduct={allProduct}/>} />
      </Routes>

      <Footer />

      <Toaster />

    </div>
  )
}

export default App
