import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateActions } from '../../store/slices/appStateSlice';
import { useSendOrderMutation } from '../../store/catalogFetchAPI';
import { Preloader } from '../Preloader';
import { cartActions } from '../../store/slices/cartSlice';

export function OrderForm() {
    const dispatch = useDispatch();

    const initForm = {
        phone: '',
        address: '',
        agreement: false,
    };

    const [form, setForm] = useState(initForm);
    const { phone, address, agreement } = form;

    const handleChange = ({ target }) => {
        let { name, value } = target;
        if (name === 'agreement') {
            value = target.checked;
        }
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const { items } = useSelector(store => store.cart);
    const [sendOrder, { isLoading, isError, isSuccess, error }] = useSendOrderMutation();

    const handleSubmit = async e => {
        e.preventDefault();
        const order = {
            owner: {
                phone: phone,
                address: address,
            },
            items: items,
        };
        try {
            await sendOrder(JSON.stringify(order)).unwrap();
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(cartActions.resetCart());
            setForm(initForm);
            // reset()
        }
        // eslint-disable-next-line
    }, [isSuccess]);

    const disabled = () => {
        return !agreement || isLoading || items.length === 0 || !phone || !address;
    };

    return (
        <div className="card" style={{ maxWidth: 30 + 'rem', margin: '0 auto' }}>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                        className="form-control"
                        id="phone"
                        placeholder="Ваш телефон"
                        onChange={handleChange}
                        value={phone}
                        name="phone"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input
                        className="form-control"
                        id="address"
                        placeholder="Адрес доставки"
                        onChange={handleChange}
                        value={address}
                        name="address"
                    />
                </div>
                <div className="form-group form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreement"
                        name="agreement"
                        onChange={handleChange}
                        checked={agreement}
                    />
                    <label className="form-check-label" htmlFor="agreement">
                        Согласен с правилами доставки
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    disabled={disabled()}
                >
                    {isLoading ? 'Отправка' : 'Оформить'}
                </button>
                {isLoading ? <Preloader /> : null}
                {isError ? `Произошла ошибка отправки формы -  ${error.error}` : null}
                {isSuccess ? 'Заказ успешно отправлен!' : null}
            </form>
        </div>
    );
}
