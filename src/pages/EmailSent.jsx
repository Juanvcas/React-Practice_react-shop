import React from 'react';
import "../styles/pages/EmailSent.css";

//components
import Header from '../components/Header';

const EmailSent = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <img src="./src/svg/logo_yard_sale.svg" alt="Yard sale logo"/>
                    <h1>Email has been sent!</h1>
                    <p>Please check your inbox for instructions on how to reset the password</p>
                    <figure className="eml__icon">
                        <img src="./src/svg/icon_mail.svg" alt="mail icon"/>
                    </figure>
                    <a href="" className="main__btt">Login</a>
                    <p className="resend-msg">Didn't recive the email? <a href="">Resend</a></p>
                </section>
            </main>
        </div>
    );
}

export default EmailSent;