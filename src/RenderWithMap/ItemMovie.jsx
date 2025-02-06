import React from 'react'

export default function ItemMovie(props) {
    let {tenPhim, hinhAnh} = props;
    return (
        <div>
            <h3 className='text-center text-2xl font-bold'>{tenPhim}</h3>
            <img className='w-30' src={hinhAnh} alt="" />
        </div>
    )
}
