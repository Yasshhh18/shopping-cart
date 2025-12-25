import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css'
const Navbar = ({size,setShow}) => {
  return (
 <nav>
    <div className='nav_box'>
        <span className='myshop'>
            OnePiece Shop
        </span>
        <div className='nav_cart' onClick={()=> setShow(prev => !prev)}>
            <span>
                <i className='fas fa-cart-plus'></i>
            </span>
            <span>{size}</span>
        </div>
    </div>
 </nav>
  )
}

export default Navbar
