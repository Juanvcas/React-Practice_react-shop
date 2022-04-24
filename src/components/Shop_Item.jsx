import React from 'react'
import "../styles/components/ItemShop.css";

//Assets
import i_atCart from "@svgAssets/bt_add_to_cart.svg"

const ItemShop = ({products}) => {
    return (
        <article className="arts__itm">
            <figure className="itm__img">
                <img src={products.images} alt={products.title}/>
            </figure>
            <section className="info__cont">
                <div className="itm__info">
                    <p>$ {products.price}</p>
                    <p>{products.title}</p>
                </div>
                <figure className="itm__cart">
                    <img src={i_atCart} alt="cart icon"/>
                </figure>
            </section>
        </article>
    );
}

export default ItemShop;