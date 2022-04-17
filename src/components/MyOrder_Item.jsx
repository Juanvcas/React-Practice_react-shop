import React from 'react'
import "../styles/components/MyOrder_Item.css";

const MyOrder_Item = () => {
    return (
        <article className="ord-list__art">
            <figure className="art__fig">
                <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="order article"/>
            </figure>
            <p>Round shelf</p>
            <p>$ 120,00</p>
        </article>
    );
}

export default MyOrder_Item;