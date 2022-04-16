import React from 'react'
import "../styles/components/ItemShop.css";

const ItemShop = () => {
    return (
        <article className="arts__itm">
            <figure className="itm__img">
                <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
            </figure>
            <div className="itm__info">
                <p>$ 120,00</p>
                <p>Round Shelf</p>
            </div>
            <figure className="itm__cart">
                <img src="./src/svg/bt_add_to_cart.svg" alt="cart icon"/>
            </figure>
        </article>
    );
}

export default ItemShop;