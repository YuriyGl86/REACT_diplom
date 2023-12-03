import React from 'react'
import { CartOrder } from '../CartOrder/CartOrder'
import { useSelector } from 'react-redux'

export  function OrderList() {
    const {items} = useSelector(store=> store.cart)

    return (
        <>
            {items.map((order, index)=> 
                (<CartOrder order={order} index={index+1} key={order.id + order.size}/>)
            )}
        </>
    )
}
