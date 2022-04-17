import React from 'react';
import "../styles/components/CartItem.css";

const CartItem = () => {
    return (
        <article class="list__art">
            <figure>
                <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="cart item"/>
            </figure>
            <p>Retro fridge</p>
            <p>$ 120,00</p>
            <span>
                <img src="./src/svg/icon_close.svg" alt="icon close"/>
            </span>
        </article>
    );
}

export default CartItem;