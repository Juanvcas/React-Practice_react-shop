import React from 'react';
import "../styles/components/MenuDesk.css";

const MenuDesk = () => {
    return (
        <div className="log-menu__desk">
            <section className="desk__opt">
                <a href="">My orders</a>
                <a href="">My account</a>
            </section>
            <section className="desk__acc">
                <a href="">Sing out</a>
            </section>
        </div>
    );
}

export default MenuDesk;