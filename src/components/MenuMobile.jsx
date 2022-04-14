import React from 'react';
import "../styles/menu/menu-mobile.css";

const MenuMobile = () => {
    return (
        <menu className="menu__mbl">
            <span></span>
            <section className="mbl__cats">
                <h2>CATEGORIES</h2>
                <a href="">All</a>
                <a href="">Clothes</a>
                <a href="">Electronics</a>
                <a href="">Furnitures</a>
                <a href="">Toys</a>
                <a href="">Others</a>
            </section>
            <section className="mbl__acc">
                <div className="acc__usr">
                    <a href="">My orders</a>
                    <a href="">My account</a>
                </div>
                <div className="acc__log">
                    <p>example@email.com</p>
                    <a href="">Sing out</a>
                </div>
            </section>
        </menu>
    );
}

export default MenuMobile;