import React from 'react'
import { OrderList } from '../OrderList'

export  function Cart() {


    const orders =[
        {
          id: 66,
          title: "Босоножки 'Myer'",
          price: 34000,
          size: '10 US',
          amount: 1
        },
        {
          id: 65,
          category: 15,
          title: "Босоножки 'Keira'",
          price: 7600,
          size: '12 US',
          amount: 2
        },
        {
          id: 73,
          category: 15,
          title: "Супергеройские кеды",
          price: 1400,
          size: '8 US',
          amount: 3
        },
      
    ]




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
                <OrderList orders={orders}/>
                <tr>
                    <td colSpan="5" className="text-right">Общая стоимость</td>
                    <td>34 000 руб.</td>
                </tr>
            </tbody>
        </table>

    )
}
