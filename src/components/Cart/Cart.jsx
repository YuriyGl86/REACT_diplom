import React from 'react';
import { OrderList } from '../OrderList';
import { useSelector } from 'react-redux';

export function Cart() {
    const { items } = useSelector(store => store.cart);

    const getTotal = () => {
        return items.reduce((acc, i) => acc + i.count * i.price, 0);
    };

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                <OrderList />
                <tr>
                    <td colSpan="5" className="text-right">
                        Общая стоимость
                    </td>
                    <td>{getTotal()} руб.</td>
                </tr>
            </tbody>
        </table>
    );
}
