import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCatalogItemDetailsQuery } from '../../store/catalogFetchAPI'
import { useDispatch, useSelector } from 'react-redux'
import { Banner } from '../../components/Banner'
import { Widget } from '../../components/Widget'
import { Sizes } from '../../components/Sizes'
import { Preloader } from '../../components/Preloader'
import { Count } from '../../components/Count'
import { CatalogItemDetails } from '../../components/CatalogItemDetails/CatalogItemDetails'
import { appStateActions } from '../../store/slices/appStateSlice'
import { cartActions } from '../../store/slices/cartSlice'

export  function CatalogItemPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, error, isLoading, isSuccess } = useGetCatalogItemDetailsQuery(id)
    const { selectedSize,count } = useSelector(store => store.appState)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        return ()=>{

            dispatch(appStateActions.selectSize(undefined))

            dispatch(appStateActions.resetcount())
        }
        // eslint-disable-next-line
    }, [])


    const handleAddtoCartClick =()=> {
        const newPurchase = {
            id:data.id,
            title:data.title,
            price: data.price,
            size: selectedSize,
            count: count
        }
        console.log(newPurchase)
        dispatch(cartActions.addToCart(newPurchase))
        navigate('/cart')
    }

    return (

        <>  
            {error?`Произошла ошибка загрузки товара - ${error.message}`:null}
            {isLoading && <Preloader/>}
            {isSuccess?
            <div className="row">
                <div className="col">
                    <Banner/>
                    <Widget title={data.title} sectionClasses={"catalog-item"}>
                        
                        <div className="row">
                            <div className="col-5">
                                <img src={data.images[0]}
                                    className="img-fluid" alt={data.titlr}/>
                            </div>
                            <div className="col-7">
                                <CatalogItemDetails data={data}/>
                                <div className="text-center">                                    
                                    <p>Размеры в наличии: <Sizes sizes={data.sizes}/></p>
                                    {data.sizes.find(i=>i.available) && <Count/>}
                                </div>
                                {data.sizes.find(i=>i.available) && <button className="btn btn-danger btn-block btn-lg" disabled={!Boolean(selectedSize)} onClick={handleAddtoCartClick}>В корзину</button>}
                            </div>
                        </div>

                    </Widget>
                </div>
            </div>:null}
        </>
    )
}
