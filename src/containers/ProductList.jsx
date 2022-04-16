import React from 'react';
import "../styles/containers/ProductList.css";

//Componentes
import ItemShop from '../components/ItemShop';

const ProductList = () => {
    return (
        <section className="main__arts">
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
            <ItemShop/>
        </section>
    );
}

export default ProductList;