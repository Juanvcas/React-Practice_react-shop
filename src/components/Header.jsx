import React, { useState } from 'react';
import "../styles/Header.css";

//Componentes
import MenuMobile from './MenuMobile';
import MenuDesk from './MenuDesk';

//Assets
import i_menu from "@svgAssets/icon_menu.svg";
import i_ysLogo from "@svgAssets/logo_yard_sale.svg";
import i_shCart from "@svgAssets/icon_shopping_cart.svg";
import i_arrDown from "@svgAssets/bt_arrow_down.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(toggle ? false : true);
    }
    return (
        <header className="header">
            <menu href="" className="header__menu">
                <img src={i_menu} alt=""/>
                <MenuMobile/>
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
            <img src={i_ysLogo} alt="Yard sale Logo"/>
            <div className="header__log">
                <div className="log__menu">example@email.com<span onClick={handleToggle}><img src={i_arrDown} alt="arrow down"/>
                    {toggle ? <MenuDesk/> : null}
                </span></div>
                <img src={i_shCart} alt="shopping cart"/>
                <div className='cart-cuantity'>
                    <p>2</p>
                </div>
            </div>
        </header>
    );
}

export default Header;