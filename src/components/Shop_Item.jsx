import React from 'react'
import "../styles/components/ItemShop.css";

//Assets
import i_atCart from "@svgAssets/bt_add_to_cart.svg"

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
                <img src={i_atCart} alt="cart icon"/>
            </figure>
        </article>
    );
}

export default ItemShop;