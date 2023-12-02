import React from 'react'
import { CartOrder } from '../CartOrder/CartOrder'

export  function OrderList({orders}) {
  return (
    <>
        {orders.map((order, index)=> (<CartOrder order={order} index={index+1} key={order.id}/>))}
    </>
  )
}
