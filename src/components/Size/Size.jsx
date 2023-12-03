import { useDispatch, useSelector } from 'react-redux'
import { appStateActions } from '../../store/slices/appStateSlice'

export  function Size({size}) {
    const dispatch = useDispatch()
    const { selectedSize } = useSelector(store=> store.appState)

    const handleSizeSelect = (e)=> {
        console.log(size.size)
        dispatch(appStateActions.selectSize(size.size))
    }

    return (
        <span className={`catalog-item-size ${selectedSize === size.size? 'selected': ''}`} onClick={handleSizeSelect}>{size.size}</span>
    )
}
