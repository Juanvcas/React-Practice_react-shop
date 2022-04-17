import React from 'react';
import "../styles/pages/MyOrder.css";

//Components
import Header from '../components/Header';
import MyOrder_Item from '../components/MyOrder_Item';

const MyOrder = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className='main-mrg'>
                <section className='main-mrg__cont'>
                    <h1>My Order</h1>
                    <section className="ord__total">
                        <div className="total__info">
                            <p>01.08.2022</p>
                            <p>8 articles</p>
                        </div>
                        <div className="total__total">
                            <p>$ 960,00</p>
                        </div>
                    </section>
                    <section className='ord__list'>
                        <MyOrder_Item/>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default MyOrder;