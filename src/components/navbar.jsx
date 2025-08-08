import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      selam nw wey
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-900 text-white px-6 py-4 z-50">
        {/*LOGO*/}
        <div className="text-2xl font-bold">Logo</div>
        <ul className="flex space-x-4">
            <li> <Link to="/home" className="cursor-pointer hover:text-gray-400">home </Link> </li>
            <li className="cursor-pointer hover:text-gray-400" >About</li>
            <li className="cursor-pointer hover:text-gray-400" >Hi</li>
            <li className="cursor-pointer hover:text-gray-400" >Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
