import React from 'react';
import "../styles/shop/shopping-cart.css";

const ShoppingCart = () => {
    return (
        <aside className="cart">
            <div className="cart__head">
                <span>
                    <img src="./src/svg/bt_arrow_left.svg" alt="icon arrow"/>
                </span>
                <p>Shopping cart</p>
            </div>
            <section className="cart__list">
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="cart item"/>
                    </figure>
                    <p>Retro fridge</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="cart item"/>
                    </figure>
                    <p>Round shelf</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="cart item"/>
                    </figure>
                    <p>Retro fridge</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="cart item"/>
                    </figure>
                    <p>Round shelf</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="cart item"/>
                    </figure>
                    <p>Retro fridge</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="cart item"/>
                    </figure>
                    <p>Round shelf</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="cart item"/>
                    </figure>
                    <p>Retro fridge</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
                <article className="list__art">
                    <figure>
                        <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="cart item"/>
                    </figure>
                    <p>Round shelf</p>
                    <p>$ 120,00</p>
                    <span>
                        <img src="./src/svg/icon_close.svg" alt="icon close"/>
                    </span>
                </article>
            </section>
            <section className="cart_info">
                <section className="info__total">
                    <p>Total</p>
                    <p>$ 960,00</p>
                </section>
                <button className="cart__chk">Checkout</button>
            </section>
        </aside>
    );
}

export default ShoppingCart;