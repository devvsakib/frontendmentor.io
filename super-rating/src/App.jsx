import { useState } from 'react'
import './App.css'
import Stars from './Stars'
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
      <div>
        <h1 className='font-bold uppercase'>Super Rating: {count}</h1>
        <div className='flex justify-center mt-10 text-5xl'>
          <Stars 
          count ={count}
          setCount={setCount}
           />
        </div>
      </div>
    </div>
  )
}

export default App
