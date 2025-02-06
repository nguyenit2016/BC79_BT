import React, { useState } from 'react'
import ButtonColor from './ButtonColor';

export default function ExCarAdvance() {
    let colors = ["red", "black", "silver"];
    let [color, setColor] = useState("red");
    let renderButtonColor = () => {
        return colors.map((item, index) => {
            return (
                <ButtonColor key={index} color={item} handlChangeColor={setColor} />
            );
        });
    };

    return (
        <div>
            <img className='w-100' src={`./public/img/${color}-car.jpg`} alt="" />
            {renderButtonColor()}
        </div>
    )
}
