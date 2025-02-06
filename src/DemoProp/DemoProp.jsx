import React, { useState } from 'react'
import Avatar from './Avatar';

// props: là 1 object chứa các thuộc tính của component
// để truyền dữ liệu từ component cha sang component con
// để giao tiếp giữa các component
export default function DemoProp() {
    let [age, setAge] = useState(18);
    let plusAge = () => {
        setAge(age + 1);
    }
    console.log("Component cha");
    let userName = "alice";
  return (
    <div className='p-20 bg-blue-500'>
        DemoProp
        {/* Truyền dữ liệu của biến userName vào cho thuộc tính propUserName */}
        <Avatar propUserName = {userName} age={age} handlClick={plusAge} />
    </div>
  )
}
