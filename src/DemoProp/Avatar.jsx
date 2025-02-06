import React from 'react'

export default function Avatar(props) {
    //props: object chứa các data được truyền từ component cha vào
    console.log("Component con: ", props);
    
  return (
    <div className='p-20 bg-yellow-400'>
        <h2>Username: {props.propUserName}</h2>
        <h2>Age: {props.age}</h2>
        <button onClick={props.handlClick}>Tăng tuổi</button>
    </div>
  )
}
