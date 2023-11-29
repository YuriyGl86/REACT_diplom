import React from 'react'
import { Link } from 'react-router-dom'

export  function MenuItem({ item }) {
  return (
    <li className="nav-item"><Link to={item.href} class="nav-link">{item.title}</Link></li>
  )
}
