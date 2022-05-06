import React, { useContext } from 'react'
import "../styles/components/ItemShop.css";

//Context
import AppContext from '../context/AppContext';

//Assets
import i_atCart from "@svgAssets/bt_add_to_cart.svg";

const ItemShop = ({products}) => {
    const {addToCart} = useContext(AppContext);
    const handleClick = (item) => {
        addToCart(item);
    }
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
                <button className="itm__cart" onClick={() => handleClick(products)}>
                    <img src={i_atCart} alt="cart icon"/>
                </button>
            </section>
        </article>
    );
}

export default ItemShop;