import React from 'react'

export default function DetailShoe({detailShoe}) {
  return (
    <div>
        <h2>Detail</h2>
        <img className='w-50 m-auto' src={detailShoe.image} alt="" />
        <h2>Name: {detailShoe.name}</h2>
        <h2>Price: ${detailShoe.price}</h2>
        <h2>Description: {detailShoe.description}</h2>
        <h2>Quantity: {detailShoe.quantity}</h2>
    </div>
  )
}
