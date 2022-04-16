import React from 'react';

//Components
import Header from '../components/Header';

const CreatePass = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <img src="./src/svg/logo_yard_sale.svg" alt="Yard sale Logo"/>
                    <h1>Create a new password</h1>
                    <p>Enter a new password for your acount</p>
                    <form action="" className="form">
                        <label htmlFor="password" className="form__lbl">
                            <span>Password</span>
                            <input type="text" id="password" name="password" placeholder="*********"/>
                        </label>
                        <label htmlFor="re-password" className="form__lbl">
                            <span>Re-enter password</span>
                            <input type="text" id="re-password" name="re-password" placeholder="*********"/>
                        </label>
                        <div className="form__butt">
                            <input type="submit" value="Confirm"/>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default CreatePass;