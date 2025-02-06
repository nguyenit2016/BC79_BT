import React, { useState } from 'react'
import { listShoe } from './dataShoe';
import DetailShoe from './DetailShoe';
import ListShoe from './ListShoe';
import CartShoe from './CartShoe';

export default function ExShoe() {
    let [detailShoe, setDetailShoe] = useState({});
    // Tạo state để lưu trữ giỏ hàng
    let [cart, setCart] = useState([]);
    let handlSetCart = (cartAdd) => {
        let cartClone = [...cart];
        let index = cart.findIndex(it => it.id == cartAdd.id);
        //1: sp chua co trong gio hang
        //them moi sp vao gio hang voi so luong = 1
        if (index == -1) {
            let cartAddClone = { ...cartAdd, soLuong: 1 };
            cartClone.push(cartAddClone);
        }
        //2: sp da co trong gio hang
        //cap nhat so luong cua san pham
        else {
            cartClone[index].soLuong++;
        }
        setCart(cartClone);
    }
    let handlDelete = (id) => {
        // cách 1 dùng splice
        // let cartClone = [...cart];
        // let index = cart.findIndex(it => it.id == id);
        // if (index > 0) {
        //     cartClone.splice(index, 1);
        //     setCart(cartClone);
        // }

        // cách 2: dùng filter
        //let cartClone = cart.filter(it => it.id !== id);
        let cartClone = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(cartClone);
    }

    return (
        <div>
            <div className='w-100'><DetailShoe detailShoe={detailShoe} /></div>
            <div className='flex'>
                <div className='w-1/2'>
                    <ListShoe listShoe={listShoe} setDetailShoe={setDetailShoe} handlAddToCart={handlSetCart} />
                </div>
                <CartShoe cart={cart} handlDelete={handlDelete} />
            </div>
        </div>
    )
}
