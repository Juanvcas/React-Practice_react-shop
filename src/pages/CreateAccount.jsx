import React from 'react';
import "../styles/account-styles/create-account-phone.css";

const CreateAccount = () => {
    return (
        <main className="ca-main">
        <section className="ca-main__acc-cont">
            <h1>Create account</h1>
            <section className='acc__form-cont'>
                <form action="" className="ca-form">
                    <label htmlFor="name" className="ca-form__lbl">
                        <span>Name</span>
                        <input type="text" id="name" name="name" placeholder="Your name"/>
                    </label>
                    <label htmlFor="email" className="ca-form__lbl">
                        <span>Email Address</span>
                        <input type="email" id="email" name="email" placeholder="example@mail.com"/>
                    </label>
                    <label htmlFor="password" className="ca-form__lbl">
                        <span>Password</span>
                        <input type="password" id="password" name="password" placeholder="*********"/>
                    </label>
                    <div className="ca-form__butt">
                        <input type="submit" value="Create" className="ca-form__butt"/>
                    </div>
                </form>
            </section>
        </section>
    </main>
    );
}

export default CreateAccount;