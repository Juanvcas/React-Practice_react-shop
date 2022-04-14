import React from 'react';
import "../styles/shop/my.order.css";

import Header from '../components/Header';

const MyOrder = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="mord-main">
                <section className="mord-main__ord">
                    <h1>My order</h1>
                    <section className="mord__ord__total">
                        <div className="mord__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="mord__total__total">
                            <p>$ 960,00</p>
                        </div>
                    </section>
                </section>
                <section className="mord-main__ord-list">
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="order article"/>
                        </figure>
                        <p>Round shelf</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="order article"/>
                        </figure>
                        <p>Retro fridge</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="order article"/>
                        </figure>
                        <p>Round shelf</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="order article"/>
                        </figure>
                        <p>Retro fridge</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="order article"/>
                        </figure>
                        <p>Round shelf</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="order article"/>
                        </figure>
                        <p>Retro fridge</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="order article"/>
                        </figure>
                        <p>Round shelf</p>
                        <p>$ 120,00</p>
                    </article>
                    <article className="mord__ord-list__art">
                        <figure className="mord__art__fig">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="order article"/>
                        </figure>
                        <p>Retro fridge</p>
                        <p>$ 120,00</p>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default MyOrder;