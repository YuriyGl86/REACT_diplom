import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStateActions } from '../../store/slices/appStateSlice'

export  function CatalogSearch() {

  const dispatch = useDispatch()
  const { catalogSearch } = useSelector(store => store.appState)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.search.value)
    dispatch(appStateActions.setSearchRequest(e.target.search.value))
  }

  const handleChange =({target:{value}})=>{
    dispatch(appStateActions.changeCatalogSearch(value))
  }

  return (
    <form className="catalog-search-form form-inline" onSubmit={handleSubmit}> 
        <input className="form-control" placeholder="Поиск" name='search' onChange={handleChange} value={catalogSearch}/>
    </form>
  )
}
