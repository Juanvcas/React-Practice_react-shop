import React from 'react';
import "../styles/pages/EmailSent.css";

//Components
import Header from '../components/Header';

//Assets
import i_ysLogo from "@svgAssets/logo_yard_sale.svg";
import i_email from "@svgAssets/icon_mail.svg"

const EmailSent = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <img src={i_ysLogo} alt="Yard sale logo"/>
                    <h1>Email has been sent!</h1>
                    <p>Please check your inbox for instructions on how to reset the password</p>
                    <figure className="eml__icon">
                        <img src={i_email} alt="mail icon"/>
                    </figure>
                    <a href="" className="main__btt">Login</a>
                    <p className="resend-msg">Didn't recive the email? <a href="">Resend</a></p>
                </section>
            </main>
        </div>
    );
}

export default EmailSent;