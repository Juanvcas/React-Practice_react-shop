import React from 'react';
import "../styles/components/Orders_Item.css";

//Assets
import i_arrRight from "@svgAssets/bt_arrow_right.svg";

const Orders_Item = () => {
    return (
        <article className="ords-list__art">
            <div className="total__info">
                <p>01.08.2022</p>
                <p>8 articles</p>
            </div>
            <div className="total__total">
                <p>$ 960,00</p>
                <span>
                    <img src={i_arrRight} alt=""/>
                </span>
            </div>
        </article>
    );
}

export default Orders_Item;