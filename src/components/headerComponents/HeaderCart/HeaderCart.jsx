import React from 'react'
import { Link } from 'react-router-dom'

export  function HeaderCart() {
  return (
    <Link className="header-controls-pic header-controls-cart" to='/cart'>
      <div className="header-controls-cart-full">1</div>
      <div className="header-controls-cart-menu"></div>
    </Link>
  )
}
