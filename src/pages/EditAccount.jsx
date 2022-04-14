import React from 'react';
import "../styles/account-styles/edit-account.css";

import Header from '../components/Header';

const EditAccount = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main class="ea-main">
                <section class="ea-main__acc-cont">
                    <h1>Edit account</h1>
                    <section class="eacc__form-cont">
                        <form action="" class="eacc__form">
                            <label for="name" class="eacc__form__lbl">
                                <span>Name</span>
                                <input type="text" id="name" name="name" placeholder="Your name"/>
                            </label>
                            <label for="email" class="eacc__form__lbl">
                                <span>Email Address</span>
                                <input type="email" id="email" name="email" placeholder="example@mail.com"/>
                            </label>
                            <label for="password" class="eacc__form__lbl">
                                <span>Password</span>
                                <input type="password" id="password" name="password" placeholder="*********"/>
                            </label>
                            <div class="eacc__form__butt">
                                <input type="submit" value="Save" class="eacc__form__butt"/>
                            </div>
                        </form>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default EditAccount;