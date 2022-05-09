import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state,setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({...state,cart:[...state.cart,payload]});
    };
    const removeFromCart = (uniqueKey) => {
        setState({...state,cart: state.cart.filter((items,index) => index !== uniqueKey)})
    }
    return {state,addToCart,removeFromCart};
};

export default useInitialState;