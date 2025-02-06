import React, { useState } from 'react'

export default function DemoUseState() {
    //useState: quan ly data thay doi tren UI
    let [count, setCount] = useState(1);
    //useState(1) tra ve mang gom 2 phan tu
    //count: gia tri hien tai
    //setCount: ham de thay doi gia tri cua count
    console.log("Count: ", count);
    console.log("set count: ", setCount);
    let handlClick = () => {
        setCount(count + 1);
    }
    //sau khi set state thành công thì component sẽ render lại UI
  return (
    <div>
        <p>{count}</p>
        <button onClick={handlClick}>Set count</button>
    </div>
  )
}
