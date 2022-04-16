import React from 'react';

//Components
import Header from '../components/Header';

const RecoveryPass = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <img src="./src/svg/logo_yard_sale.svg" alt="Yard sale Logo"/>
                    <h1>Recovery Password</h1>
                    <p>Inform the email address used to create your account</p>
                    <form action="" className="form">
                        <label htmlFor="email" className="form__lbl">
                            <span>Email Address</span>
                            <input type="text" id="email" name="email" placeholder="example@mail.com"/>
                        </label>
                        <div className="form__butt">
                            <input type="submit" value="Log in"/>
                        </div>
                        <a href="">Back to log in</a>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default RecoveryPass;