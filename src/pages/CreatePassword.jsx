import React from 'react';
import "../styles/login-styles/create-password.css";

const CreatePassword = () => {
    return (
        <main className="cpass-main">
        <section className="cpass-main__pass-cont">
            <img src="./src/asstes/svg/logo_yard_sale.svg" alt="Yard sale Logo"/>
            <h1>Create a new password</h1>
            <h2>Enter a new password for your acount</h2>
            <section className="cpass__form-cont">
                <form action="" className="cpass__form">
                    <label htmlFor="password" className="cpass__form__lbl">
                        <span>Password</span>
                        <input type="text" id="password" name="password" placeholder="*********"/>
                    </label>
                    <label htmlFor="re-password" className="cpass__form__lbl">
                        <span>Re-enter password</span>
                        <input type="text" id="re-password" name="re-password" placeholder="*********"/>
                    </label>
                    <input type="submit" value="Confirm" className="cpass__form__butt"/>
                </form>
            </section>
        </section>
    </main>
    );
}

export default CreatePassword;