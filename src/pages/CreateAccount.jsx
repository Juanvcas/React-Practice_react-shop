import React from 'react';

//Components
import Header from '../components/Header';

const CreateAccount = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main className="main-mrg">
                <section className="main-mrg__cont">
                    <h1>My account</h1>
                    <form action="" className="form">
                        <label htmlFor="name" className="form__lbl">
                            <span>Name</span>
                            <input type="text" id="name" name="name" placeholder="Your name"/>
                        </label>
                        <label htmlFor="email" className="form__lbl">
                            <span>Email Address</span>
                            <input type="email" id="email" name="email" placeholder="example@mail.com"/>
                        </label>
                        <label htmlFor="password" className="form__lbl">
                            <span>Password</span>
                            <input type="password" id="password" name="password" placeholder="*********"/>
                        </label>
                        <div className="form__butt">
                            <input type="submit" value="Create"/>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default CreateAccount;