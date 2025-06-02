import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Login from './components/dynamic/authentication/Login'
// import './App.css'
import {Navbar} from './components/defaults/default'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
          <div className='fixed mt-[-26em] ml-0   items-left'>
      <div className=' w-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </div>
    </div>
    </Router>
    </>
  )
}

export default App
