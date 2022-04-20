import React from 'react';
import "../styles/Home.css";

//Components
import Header from '../components/Header';

//Containers
import ProductList from '../containers/ProductList';

//Assets
import i_search from "@svgAssets/icon_search.svg"

const Home = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main">
                <section className="main__menu">
                    <div className="menu__srch">
                        <img src={i_search} alt="search icon"/>
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
                <ProductList/>
            </main>
        </div>
    );
}

export default Home;