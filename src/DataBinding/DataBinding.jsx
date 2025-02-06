import React, { useState } from 'react'

// DataBinding <=> đưa dữ liệu của biến hoặc function vào html thông qua dấu {}
export default function DataBinding() {
    let [isShow, setIsShow] = useState(true);
    let handleToggleImg = () => {
        setIsShow(!isShow);
    }
    let title = "Tết 2025";
    let imgSrc = "https://lh5.googleusercontent.com/proxy/ML9HwNKpNp0-B7rsANU_ibTnICNXMPUXjGg2gbQ5IqMBZLN5-UUnQqOLLznfDxtNGQkUfknx9l6tDjkXJ1fdS6RK6Cgvx5wOHntnsfM58I86d2WS0vI";
    let renderBanner = () => {
        return <img className='w-50' src={imgSrc} />
    }
    return (
        <div>
            <h2>Databinding</h2>
            <h1>{title}</h1>
            {/* cách 1 */}
            {isShow ? renderBanner() : ""}
            {/* cách 2 */}
            {isShow && renderBanner()}
            <button onClick={handleToggleImg}>Click</button>
        </div>
    )
}
