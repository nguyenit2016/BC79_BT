import React from 'react'

export default function ButtonColor({ color, handlChangeColor }) {
    return (
        <button onClick={() => {handlChangeColor(color)}} className='to-white mx-5' style={{ background: color }}>{color}</button>
    )
}
