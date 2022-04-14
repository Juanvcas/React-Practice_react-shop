import React from 'react';
import "../styles/menu/manu-desk.css";

const MenuDesk = () => {
    return (
        <menu className="log-menu__desk">
            <section className="desk__opt">
                <a href="">My orders</a>
                <a href="">My account</a>
            </section>
            <section className="desk__acc">
                <a href="">Sing out</a>
            </section>
        </menu>
    );
}

export default MenuDesk;