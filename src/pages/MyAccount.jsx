import React from 'react';
import "../styles/account-styles/my-account-phone.css";

import Header from '../components/Header';

const MyAccount = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="ma-main">
                <section className="ma-main__macc-cont">
                    <h1>My account</h1>
                    <section className="macc__form-cont">
                        <form action="" className="macc__form">
                            <label htmlFor="name" className="macc__form__lbl">
                                <span>Name</span>
                                <p>Juan Vasquez</p>
                            </label>
                            <label htmlFor="email" className="macc__form__lbl">
                                <span>Email Address</span>
                                <p>example@mail.com</p>
                            </label>
                            <label htmlFor="password" className="macc__form__lbl">
                                <span>Password</span>
                                <p>*********</p>
                            </label>
                            <div className="macc__form__butt">
                                <input type="submit" value="Edit" className="macc__form__butt"/>
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default MyAccount;