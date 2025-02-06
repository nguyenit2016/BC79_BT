import React from 'react';
import ItemShoe from './ItemShoe';

export default function ListShoe({listShoe, setDetailShoe, handlAddToCart}) {
    let renderListShoe = () => {
        return listShoe.map((item, index) => {
            return <ItemShoe key={index} dataShoe={item} setDetailShoe={setDetailShoe} handlAddToCart={handlAddToCart} />
        });
    }
    return (
        <div className='grid grid-cols-2 gap-6'>
            {renderListShoe()}
        </div>
    )
}
