import { useState } from 'react'
import Home from './Pages/Home'
import ProductsShow from './Pages/ProductsShow'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div  dir='rtl' className='flex justify-center box-border overflow-hidden  '>
      {/* <Home/> */}
      <ProductsShow/>
    </div>
  )
}

export default App
