import {  useDispatch, useSelector } from "react-redux";
import { appStateActions } from "../../store/slices/appStateSlice";

export  function CategoryItem({category}) {
  const dispatch = useDispatch()
  const { selected } = useSelector((state) => state.appState);

  const handleCategoryClick =(e) =>{
    e.preventDefault()
    dispatch(appStateActions.resetOffset())
    dispatch(appStateActions.selectFilter(category.id))
  }

  return (
    <li className="nav-item"  >
        <a 
        className={`nav-link ${category.id === selected? 'active': ''}`}
        // eslint-disable-next-line
        href="/" 
        onClick={handleCategoryClick}
        >
          {category.title}
        </a>
    </li>
  )
}
