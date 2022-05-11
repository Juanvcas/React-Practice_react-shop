import React, {useContext} from 'react';
import "../styles/containers/ShoppingCart.css";

//Components
import Cart_Item from '../components/Cart_Item';

//Context
import AppContext from '../context/AppContext';

//Assets
import i_arrLeft from "@svgAssets/bt_arrow_left.svg";

const ShoppingCart = (props) => {
    const {state:{cart}} = useContext(AppContext);

    const {toggle,setToggle} = props;

    const total = () => {
        const prices = [null];
        cart.map(item => prices.push(item.price));
        const totalPrice = prices.reduce((sum,price) => (sum + price));
        return totalPrice;
    }

    return (
        <aside className="cart">
            <div className="cart__head">
                <span>
                    <img src={i_arrLeft} alt="icon arrow left" onClick={() => setToggle(!toggle)}/>
                </span>
                <p>Shopping cart</p>
            </div>
            <section className="cart__list">
                {cart.map((productItem,index) => {
                    return <Cart_Item product={productItem} key={`Shop_Item: ${index}`} uniqueKey={index}/>
                })}
            </section>
            <section className="cart_info">
                <section className="info__total">
                    <p>Total</p>
                    <p>$ {total()}</p>
                </section>
                <button className="cart__chk">Checkout</button>
            </section>
        </aside>
    );
}

export default ShoppingCart;