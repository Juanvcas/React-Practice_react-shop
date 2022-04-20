import React from 'react';
import "../styles/pages/Login.css";

//Containers
import Header from '../components/Header';

//Assets
import i_ysLogo from "@svgAssets/logo_yard_sale.svg";

const Login = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <img src={i_ysLogo} alt="Yard sale Logo"/>
                    <form action="" className="form">
                        <label htmlFor="email" className="form__lbl">
                            <span>Email Address</span>
                            <input type="text" id="email" name="email" placeholder="example@mail.com"/>
                        </label>
                        <label htmlFor="password" className="form__lbl">
                            <span>Password</span>
                            <input type="text" id="password" name="password" placeholder="*********"/>
                        </label>
                        <div className="form__butt">
                            <input type="submit" value="Log in"/>
                        </div>
                        <a href="">Forgot my password</a>
                    </form>
                    <a href="" className="sec__btt">Sing up</a>
                </section>
            </main>
        </div>
    );
}

export default Login;