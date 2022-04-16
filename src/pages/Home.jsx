import React from 'react';
import "../styles/Home.css";

//Components
import Header from '../components/Header';

//Containers
import ProductList from '../containers/ProductList';

const Home = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main">
                <section className="main__menu">
                    <div className="menu__srch">
                        <img src="./src/svg/icon_search.svg" alt="search icon"/>
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