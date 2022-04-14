import React from 'react';
import "../styles/header.css"

const Header = () => {
    return (
        <header className="header">
            <menu href="" className="header__menu">
                <img src="./src/svg/icon_menu.svg" alt=""/>
            </menu>
            <nav className="header__nav">
                <ul className="nav__ul">
                    <li><a href="">All</a></li>
                    <li><a href="">Clothes</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Toys</a></li>
                    <li><a href="">Others</a></li>
                </ul>
            </nav>
            <img src="./src/svg/logo_yard_sale.svg" alt="Yard sale Logo"/>
            <div className="header__log">
                <p className="log__menu">example@email.com <span><img src="./src/svg/bt_arrow_down.svg" alt="arrow down"/></span></p>
                <img src="./src/svg/icon_shopping_cart.svg" alt="shopping cart"/>
                <div>
                    <p>2</p>
                </div>
            </div>
        </header>
    );
}

export default Header;