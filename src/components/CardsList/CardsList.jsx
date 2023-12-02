import React from 'react'
import { Card } from '../Card'

export function CardsList({items, addClasses}) {
  return (
    <div className="row">
        {items.map(card=> <Card card={card} classNames={addClasses} key={card.id}/>)}
    </div>
  )
}
