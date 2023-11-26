import React from 'react'
import { Person, Cart } from 'react-bootstrap-icons'
import './Nav.css'


const Nav = () => {
  return (

    <nav style={{ height: "6.5rem" }} className="navbar w-100">
      <img className='logo' src='https://i.ibb.co/F0qqgN6/Capture-d-cran-2023-11-26-175550.png' alt='logo' />
      <div style={{width : "10%"}} className='d-flex justify-content-between'>
        <Person className='icons' size={40} />
        <Cart className='icons' size={40} />
      </div>
    </nav>


  )
}

export default Nav