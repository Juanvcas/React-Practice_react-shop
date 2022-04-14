import React from 'react';
import "../styles/home-styles/home-phone.css";

import Header from "../components/Header";

const Home = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="home-main">
                <section className="home-main__menu">
                    <div className="menu__srch">
                        <img src="../assets/svg/icon_search.svg" alt="search icon"/>
                        <input type="text" placeholder="Search product"/>
                    </div>
                    <section className="menu__cat">
                        <a href="">All</a>
                        <a href="">Clothes</a>
                        <a href="">Electronics</a>
                        <a href="">Furniture</a>
                        <a href="">Toys</a>
                    </section>
                    <p><b>Order:</b>  Most recent <span></span></p>
                </section>
                <section className="home-main__arts">
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Round Shelf</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_add_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Retro fridge</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_added_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Round Shelf</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_add_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Retro fridge</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_added_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Round Shelf</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_add_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Retro fridge</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_added_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Round Shelf</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_add_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Retro fridge</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_added_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/rFqJLp2X/round-shelf.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Round Shelf</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_add_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                    <article className="arts__itm">
                        <figure className="itm__img">
                            <img src="https://i.postimg.cc/VsqRTCTW/Bitmap.jpg" alt="Store Article"/>
                        </figure>
                        <div className="itm__info">
                            <p>$ 120,00</p>
                            <p>Retro fridge</p>
                        </div>
                        <figure className="itm__cart">
                            <img src="./src/assets/svg/bt_added_to_cart.svg" alt="cart icon"/>
                        </figure>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Home;