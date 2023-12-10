import { Banner } from '../../components/Banner';
import { Cart } from '../../components/Cart';
import { OrderForm } from '../../components/OrderForm';

import { Widget } from '../../components/Widget';

export function CartPage() {
    return (
        <div className="row">
            <div className="col">
                <Banner />

                <Widget title={'Корзина'} sectionClasses={'cart'}>
                    <Cart />
                </Widget>

                <Widget title={'Оформить заказ'} sectionClasses={'order'}>
                    <OrderForm />
                </Widget>
            </div>
        </div>
    );
}
