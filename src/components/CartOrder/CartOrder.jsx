import React from 'react'

export  function CartOrder({order, index}) {
  return (
    <tr>
        <td scope="row">{index}</td>
        <td><a href="/products/1.html">{order.title}</a></td>
        <td>{order.size}</td>
        <td>{order.amount}</td>
        <td>{order.price} руб.</td>
        <td>{Number(order.amount) * Number(order.price)} руб.</td>
        <td><button className="btn btn-outline-danger btn-sm">Удалить</button></td>
    </tr>
  )
}
