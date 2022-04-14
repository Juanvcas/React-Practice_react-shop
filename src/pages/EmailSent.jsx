import React from 'react';
import "../styles/login-styles/email-sent.css";

const EmailSent = () => {
    return (
        <main className="esnt-main">
            <section className="esnt-main__eml-cont">
                <img src="./src/svg/logo_yard_sale.svg" alt="Yard sale logo"/>
                <h1>Email has been sent!</h1>
                <h2>Please check your inbox for instructions on how to reset the password</h2>
                <figure className="eml__icon">
                    <img src="./src/svg/icon_mail.svg" alt="mail icon"/>
                </figure>
                <a href="">Login</a>
                <p><span>Didn't recive the email?</span> <a href="">Resend</a></p>
            </section>
        </main>
    );
}

export default EmailSent;