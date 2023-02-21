import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  const [theme, setTheme] = useState(false);
  const darkMode = () => {
    document.body.classList.toggle('dark');
    setTheme(!theme)
  }
  return (
    <div className="App  dark:text-white text-[#111517]">
      <Header darkMode={darkMode} theme={theme} />
      <main className='mt-32'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:capital' element={<Details />} />
        </Routes>
      </main>

    </div>
  )
}

export default App
