import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCatalogItemDetailsQuery } from '../../store/catalogFetchAPI';
import { useDispatch } from 'react-redux';
import { Banner } from '../../components/Banner';
import { Widget } from '../../components/Widget';
import { Sizes } from '../../components/Sizes';
import { Preloader } from '../../components/Preloader';
import { Count } from '../../components/Count';
import { CatalogItemDetails } from '../../components/CatalogItemDetails/CatalogItemDetails';
import { cartActions } from '../../store/slices/cartSlice';

export function CatalogItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isSuccess } = useGetCatalogItemDetailsQuery(id);
  const [selectedSize, setSelectedSize] = useState(undefined);
  const [count, SetCount] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setSelectedSize(undefined);
      SetCount(1);
    };
    // eslint-disable-next-line
  }, []);

  const handleAddtoCartClick = () => {
    const newPurchase = {
      id: data.id,
      title: data.title,
      price: data.price,
      size: selectedSize,
      count: count,
    };
    dispatch(cartActions.addToCart(newPurchase));
    navigate('/cart');
  };

  return (
    <>
      {error ? `Произошла ошибка загрузки товара - ${error.message}` : null}
      {isLoading && <Preloader />}
      {isSuccess ? (
        <div className="row">
          <div className="col">
            <Banner />
            <Widget title={data.title} sectionClasses={'catalog-item'}>
              <div className="row">
                <div className="col-5">
                  <img src={data.images[0]} className="img-fluid" alt={data.titlr} />
                </div>
                <div className="col-7">
                  <CatalogItemDetails data={data} />
                  <div className="text-center">
                    <p>
                      Размеры в наличии:{' '}
                      <Sizes
                        sizes={data.sizes}
                        setSelectedSize={setSelectedSize}
                        selectedSize={selectedSize}
                      />
                    </p>
                    {data.sizes.find(i => i.available) && (
                      <Count count={count} SetCount={SetCount} />
                    )}
                  </div>
                  {data.sizes.find(i => i.available) && (
                    <button
                      className="btn btn-danger btn-block btn-lg"
                      disabled={!Boolean(selectedSize)}
                      onClick={handleAddtoCartClick}
                    >
                      В корзину
                    </button>
                  )}
                </div>
              </div>
            </Widget>
          </div>
        </div>
      ) : null}
    </>
  );
}
