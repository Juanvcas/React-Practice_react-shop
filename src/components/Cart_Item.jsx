import React, { useContext } from 'react';
import "../styles/components/CartItem.css";

//Context
import AppContext from '../context/AppContext';

//Assets
import i_close from "@svgAssets/icon_close.svg";

const CartItem = (productItem) => {
    const {removeFromCart} = useContext(AppContext);
    const {product,uniqueKey} = productItem;
    return (
        <article className="list__art">
            <figure>
                <img src={product.images} alt={product.title}/>
            </figure>
            <p>{product.title}</p>
            <p>$ {product.price}</p>
            <span>
                <img src={i_close} alt="icon close" onClick={() => removeFromCart(product,uniqueKey)}/>
            </span>
        </article>
    );
}

export default CartItem;