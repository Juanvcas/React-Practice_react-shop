import React from 'react';
import "../styles/shop/orders.css";

import Header from '../components/Header';

const Orders = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="ords-main">
                <section className="ords-main__cont">
                    <h1>My orders</h1>
                </section>
                <section className="ords-main__ord-list">
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                    <article className="ords__ord-list__art">
                        <div className="ords__total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="ords__total__total">
                            <p>$ 960,00</p>
                            <span>
                                <img src="./src/svg/bt_arrow_right.svg" alt=""/>
                            </span>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Orders;