import React from 'react';
import "../styles/containers/ProductDetail.css";

//Assets
import i_close from "@svgAssets/icon_close.svg";
import i_cartWhite from "@svgAssets/icon_cart_white.svg";

const ProductDetail = () => {
    return (
        <aside className="prod">
            <div className="prod__cls">
                <img src={i_close} alt="icon close"/>
            </div>
            <section className="prod__dtl">
                <section className="dtl__imgs">
                    <figure className="imgs__itm">
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                    </figure>
                    <figure className="imgs__itm">
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                    </figure>
                    <figure className="imgs__itm">
                        <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                    </figure>
                </section>
                <section className="dtl__bar">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </section>
            <section className="prod__info">
                <section className="info__cont">
                    <p>$ 120,00</p>
                    <p>Retro fridge</p>
                    <article className="info__dcrp">
                        <p>With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.</p>
                    </article>
                </section>
                <button className="prod__add"><img src={i_cartWhite} alt="icon cart"/>Add to cart</button>
            </section>
        </aside>
    );
}

export default ProductDetail;