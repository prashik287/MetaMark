import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMob,setIsMob] = useState(false)

   function SetConnection(){
    if(window.ethereum){
      console.log("Metamask Installed")
    }
    // if(!window.ethereum){
    //   console.log("Metamask Not Installed")
    // }
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 text-white">
        <div className="text-3xl font-extrabold tracking-wide">MetaMark</div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 1z8h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden  md:flex items-center text-center justify-between space-x-8 text-black" >
          <Link to="/" className="text-xl font-medium hover:text-black transition duration-200" style={{ textDecoration:"none",color:'inherit'}}>
            Home
          </Link>
          <Link to="/about" className="text-xl font-medium hover:text-white hover:underline transition duration-200" style={{ textDecoration:"none",color:'inherit'}}>
            About
          </Link>
          {/* <Link to="/connect"> */}
            {/* <button className="bg-transparent text-black font-medium px-5 py-2 rounded-xl transition duration-300 shadow">
              Connect
            </button> */}

            <DropdownMenu/>
            {/* </Link> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-4  flex flex-col space-y-3 bg-blue-500 text-white ">
          {/* px-6 pb-4 */}

        
          <Link to="/" className="text-lg text-yellow-300 hover:text-yellow-400 transition duration-200" style={{ textDecoration:"none",color:'inherit'}}>
            Home
          </Link>
          <Link to="/about" className="text-lg  text-white hover:underline" style={{ textDecoration:"none",color:'inherit'}}>
            About
          </Link>
          
          <div>
            <div onClick={(e)=>{setIsMob(!isMob)}} className='font-bold'>
             Connect
             </div>
             {
              isMob && (
                <div className='p-4 space-x-4 space-y-4'>
                  <Link to="/register" style={{ textDecoration:"none",color:'inherit'}}>
              <div>
                Register
              </div>
              </Link>
              <Link style={{ textDecoration:"none",color:'inherit'}} className='font-bold'>
              <div>
                Login
              </div>
              </Link>
             </div>
              )

             }
             {/* <div className='p-4 space-x-4 space-y-4'>
              <div>
                Register
              </div>
              <div>
                Login
              </div>
             </div> */}
          </div>
            <Link to="/login" className="text-lg bg-blue-500 text-black hover:underline">
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
