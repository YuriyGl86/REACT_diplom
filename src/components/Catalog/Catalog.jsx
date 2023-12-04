import { CategoriesList } from '../../components/CategoriesList'
import { CardsList } from '../../components/CardsList'
import { AddMoreButton } from '../../components/AddMoreButton'
import { Widget } from '../../components/Widget'
import { catalogFetchAPI, useGetCatalogItemsQuery } from '../../store/catalogFetchAPI'
import { Preloader } from '../Preloader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


export  function Catalog({ children }) {

    // const items =[
    //     {
    //       id: 66,
    //       category: 13,
    //       title: "Босоножки 'Myer'",
    //       price: 34000,
    //       images: [
    //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg",
    //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"
    //       ],
    //     },
    //     {
    //       id: 65,
    //       category: 15,
    //       title: "Босоножки 'Keira'",
    //       price: 7600,
    //       images: [
    //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira.jpg",
    //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_keira_2.jpg"
    //       ],
    //     },
    //     {
    //       id: 73,
    //       category: 15,
    //       title: "Супергеройские кеды",
    //       price: 1400,
    //       images: [
    //         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/superhero_sneakers.jpg"
    //       ],
    //     },
      
    // ]
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

      {error?`Произошла ошибка загрузки категорий каталога - ${error.message}`:null}
      {isLoading?<Preloader/>:null}
      {isSuccess?
        <CardsList items={data} addClasses={'catalog-item-card'}/>: null}
        {haveMoreItems && <AddMoreButton/>}
    </Widget>
  )
}
