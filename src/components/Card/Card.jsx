import React from 'react'

export  function Card({card, classNames=''}) {
  return (
    <div className="col-4">
      <div className={`card ${classNames}`}>
        <img src={card.images[0]}
        className="card-img-top img-fluid" alt={card.title}/>
        <div className="card-body">
        <p className="card-text">{card.title}</p>
        <p className="card-text">{card.price} руб.</p>
        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
        </div>
      </div>
    </div>
  )
}
