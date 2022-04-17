import React from 'react'
import "../styles/pages/Orders.css";

//Components
import Header from '../components/Header';
import Orders_Item from '../components/Orders_Item';

const Orders = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main class="main-mrg">
                <section class="main-mrg__cont">
                    <h1>My orders</h1>
                    <section class="ords-list">
                        <Orders_Item/>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Orders;