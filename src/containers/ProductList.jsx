import React,{useEffect,useState} from 'react';
import "../styles/containers/ProductList.css";

//Components
import Shop_Item from '../components/Shop_Item';

//Custom Hooks
import useGetProduct from '../hooks/useGetProduct';

//API
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
    const product = useGetProduct(API)
    return (
        <section className="main__arts">
            {product.map(products => (
                <Shop_Item products={products} key={products.id}/>
            ))}
        </section>
    );
}

export default ProductList;