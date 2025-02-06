import React from 'react'

export default function CartShoe({ cart, handlDelete }) {
    let renderCart = () => {
        return cart.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <img className='w-20' src={item.image} alt="" />
                    </td>
                    <td>{item.soLuong}</td>
                    <td>
                        <button onClick={() => {handlDelete(item.id)}} className='bg-red-500 text-white'>Delete</button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className='flex-grow border-2 border-black'>
            <table className='w-full'>
                <thead className='bg-gray-500'>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCart()}
                </tbody>
                {cart.length == 0 && (<p>No item in cart</p>)}
            </table>
        </div>
    )
}
