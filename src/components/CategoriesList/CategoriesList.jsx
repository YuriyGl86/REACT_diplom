import { useGetCategoriesQuery } from '../../store/catalogFetchAPI'
import { CategoryItem } from '../CategoryItem/CategoryItem'
import { Preloader } from '../Preloader'


// const data = [
//   {
//       "id": 12,
//       "title": "Мужская обувь"
//   },
//   {
//       "id": 13,
//       "title": "Женская обувь"
//   },
//   {
//       "id": 14,
//       "title": "Обувь унисекс"
//   },
//   {
//       "id": 15,
//       "title": "Детская обувь"
//   }
// ]



export  function CategoriesList() {

  const { data, error, isLoading, isSuccess } = useGetCategoriesQuery()

  return (
    <>
      {error?`Произошла ошибка загрузки категорий каталога - ${error}`:null}
      {isLoading?<Preloader/>:null}
      {isSuccess?
        <ul className="catalog-categories nav justify-content-center">
            {[{id:'Все', title:'Все'}, ...data].map(category=> <CategoryItem category={category} key={category.title}/>)}
        </ul>: null}
    </>
  )
}
