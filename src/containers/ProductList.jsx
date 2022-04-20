import React from 'react';
import "../styles/containers/ProductList.css";

//Componentes
import Shop_Item from '../components/Shop_Item';

const ProductList = () => {
    return (
        <section className="main__arts">
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
            <Shop_Item/>
        </section>
    );
}

export default ProductList;