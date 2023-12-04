import { CategoriesList } from '../../components/CategoriesList'
import { CardsList } from '../../components/CardsList'
import { AddMoreButton } from '../../components/AddMoreButton'
import { Widget } from '../../components/Widget'
import { catalogFetchAPI, useGetCatalogItemsQuery } from '../../store/catalogFetchAPI'
import { Preloader } from '../Preloader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


export  function Catalog({ children }) {

    const { selected, offset, haveMoreItems,searchRequest } = useSelector((state) => state.appState);
    const { data, error, isLoading, isSuccess } = useGetCatalogItemsQuery({selected, q:searchRequest, offset})

    const dispatch = useDispatch()

  useEffect(()=>{
    return ()=> {dispatch(catalogFetchAPI.util.resetApiState())}
    // eslint-disable-next-line
  }, [])

      
  return (
    <Widget title={'Каталог'} sectionClasses={"catalog"}>

      {children}
      <CategoriesList/>

      {error?`Произошла ошибка загрузки категорий каталога - ${error.error}`:null}
      {isLoading?<Preloader/>:null}

      {isSuccess?
      <CardsList items={data} addClasses={'catalog-item-card'}/>: null}
      
      {haveMoreItems && <AddMoreButton/>}
    </Widget>
  )
}
