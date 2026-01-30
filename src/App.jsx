import { useState } from 'react'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div  dir='rtl' className='flex justify-center box-border overflow-hidden  '>
      <Home/>
    </div>
  )
}

export default App
