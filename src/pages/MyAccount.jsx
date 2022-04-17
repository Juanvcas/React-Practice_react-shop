import React from 'react';
import "../styles/pages/MyAccount.css";

//Components
import Header from '../components/Header';

const MyAccount = () => {
    return (
        <div className='page-cont'>
            <Header/>
            <main class="main-mrg">
                <section class="main-mrg__cont">
                    <h1>My account</h1>
                    <section action="" class="ma-info">
                        <div for="name" class="ma-info__cont">
                            <span>Name</span>
                            <p>Juan Vasquez</p>
                        </div>
                        <div for="email" class="ma-info__cont">
                            <span>Email Address</span>
                            <p>example@mail.com</p>
                        </div>
                        <div for="password" class="ma-info__cont">
                            <span>Password</span>
                            <p>*********</p>
                        </div>
                    </section>
                    <a href="" className="sec__btt">Edit</a>
                </section>
            </main>
        </div>
    );
}

export default MyAccount;