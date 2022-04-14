import React from 'react';
import "../styles/login-styles/login-phone.css";

const Login = () => {
    return (
        <div className="login-main">
            <section className="login-main__log-cont">
                <img src="../assets/svg/logo_yard_sale.svg" alt="Yard sale Logo"/>
                <section className="log__form-cont">
                    <form action="" className="form">
                        <label htmlFor="email" className="form__lbl">
                            <span>Email Address</span>
                            <input type="text" id="email" name="email" placeholder="example@mail.com"/>
                        </label>
                        <label htmlFor="password" className="form__lbl">
                            <span>Password</span>
                            <input type="text" id="password" name="password" placeholder="*********"/>
                        </label>
                        <input type="submit" value="Log in" className="form__butt"/>
                    </form>
                    <a href="">Forgot my password</a>
                </section>
                <div className="log__sp">
                    <a href="">Sing up</a>
                </div>
            </section>
        </div>
    );
}

export default Login;