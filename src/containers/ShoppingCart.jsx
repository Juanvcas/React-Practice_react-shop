import React from 'react';
import "../styles/containers/ShoppingCart.css";

//Components
import Cart_Item from '../components/Cart_Item';

//Assets
import i_arrLeft from "@svgAssets/bt_arrow_left.svg";

const ShoppingCart = () => {
    return (
        <aside class="cart">
            <div class="cart__head">
                <span>
                    <img src={i_arrLeft} alt="icon arrow left"/>
                </span>
                <p>Shopping cart</p>
            </div>
            <section class="cart__list">
                <Cart_Item/>
                <Cart_Item/>
                <Cart_Item/>
                <Cart_Item/>
                <Cart_Item/>
                <Cart_Item/>
            </section>
            <section class="cart_info">
                <section class="info__total">
                    <p>Total</p>
                    <p>$ 960,00</p>
                </section>
                <button class="cart__chk">Checkout</button>
            </section>
        </aside>
    );
}

export default ShoppingCart;