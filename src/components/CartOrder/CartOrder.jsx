import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartActions } from '../../store/slices/cartSlice'


export  function CartOrder({order, index}) {
    const dispatch = useDispatch()
    const handleDelete = ()=> {
        dispatch(cartActions.deleteFromCart({id:order.id, size: order.size}))
    }

    return (
    <tr>
        <td >{index}</td>
        <td><Link to={`/catalog/${order.id}`}>{order.title}</Link></td>
        <td>{order.size}</td>
        <td>{order.count}</td>
        <td>{order.price} руб.</td>
        <td>{Number(order.count) * Number(order.price)} руб.</td>
        <td><button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>Удалить</button></td>
    </tr>
    )
}
