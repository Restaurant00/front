import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import PlainteClient from './pages/PlainteClient'
import PlaintGerant from './pages/PlaintGerant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <NavBar/>
          <Routes>
            <Route path='/plainteClient' element={<PlainteClient />}/>
            <Route path='/plainteGerant' element={<PlaintGerant />}/>

          </Routes>
      </div>
    </>
  )
}

export default App
