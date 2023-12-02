import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { appStateActions } from '../../store/slices/appStateSlice'

export  function MenuItem({ item }) {
  const dispatch = useDispatch()

  const handleClick =()=> {
    dispatch(appStateActions.resetOffset())
    dispatch(appStateActions.resetFilter())
    dispatch(appStateActions.resetSearch())
  }


  return (
    <li className="nav-item"><Link to={item.href} className="nav-link" onClick={handleClick}>{item.title}</Link></li>
  )
}
