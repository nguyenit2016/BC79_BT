import React from 'react'

export default function ItemShoe({dataShoe, setDetailShoe, handlAddToCart}) {
    return (
        <div className='p-10 border-1'>
            <img className='w-2/3 m-auto' src={dataShoe.image} alt="" />
            <h2>{dataShoe.name}</h2>
            <h2>${dataShoe.price}</h2>
            <button onClick={() => {setDetailShoe(dataShoe)}} className='bg-green-600 hover:bg-green-500 text-white'>Detail</button>
            <button onClick={() => {handlAddToCart(dataShoe)}} className='bg-blue-600 hover:bg-blue-500 text-white'>Add to cart</button>
        </div>
    )
}
