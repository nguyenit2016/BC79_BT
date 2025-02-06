import React from 'react'

export default function EventHandling() {
    // Ham co tham so: arrow function boc lai
    // Ham k co tham so: gan truc tiep
    let sayHello = () => {
        console.log("Hello");
    }
    let sayHelloWithParam = (name) => {
        console.log("Hello ", name);
    }

  return (
    <div>
        <button onClick={sayHello}>Click - no param</button>
        <button onClick={() => sayHelloWithParam("nguyen")}>Click - param</button>
    </div>
  )
}
