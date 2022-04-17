import React from 'react';
import "../styles/containers/ShoppingCart.css";

//Components
import CartItem from '../components/CartItem';

const ShoppingCart = () => {
    return (
        <aside class="cart">
            <div class="cart__head">
                <span>
                    <img src="./src/svg/bt_arrow_left.svg" alt="icon arrow"/>
                </span>
                <p>Shopping cart</p>
            </div>
            <section class="cart__list">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
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