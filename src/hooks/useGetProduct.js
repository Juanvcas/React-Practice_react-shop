import { useState,useEffect } from "react";

//Packages
import axios from "axios";

const useGetProduct = (API) => {
    const [product,setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(API);
            setProduct(response.data);
        };
        fetchData();
    },[]);
    return product;
}

export default useGetProduct;