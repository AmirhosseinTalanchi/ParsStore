import { useState , useEffect } from 'react'
import { Route, Routes,useLocation } from 'react-router'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import TopBar from './components/TopBar'
import MobieMenu from './components/MobieMenu'
import DeskTopMenu from './components/DeskTopMenu'
import Footer from './components/Footer.jsx';



function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const CloseHandler = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const location = useLocation(); 

  useEffect(() => {
      window.scrollTo(0, 0); 
  })


  return (

    <div dir='rtl' className='flex flex-col items-center justify-center w-full font-iransans box-border overflow-hidden  '>

      <TopBar setIsOpen={setIsOpen} />
      <MobieMenu isOpen={isOpen} onClose={CloseHandler} />
      <DeskTopMenu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop/:proGat' element={<Shop />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
