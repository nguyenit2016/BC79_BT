import React, { useState } from 'react'

//render dua theo dieu kien
export default function ConditionalRendering() {
    let [isLogin, setIsLogin] = useState(false);
    if (isLogin == false) {
        return (
            <div>
                <button onClick={() => {
                    setIsLogin(true);
                }}>Login</button>
                <p>Chua dang nhap</p>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => {
                    setIsLogin(false);
                }}>Logout</button>
                <p>Da dang nhap</p>
            </div>
        )
    }

}
