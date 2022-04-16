import React from 'react';
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <main className='main-mrg'>
            <section className='main-mrg__cont nf-cont'>
                <div>
                    <p>404</p>
                </div>
                <p>Ups, the page wasn't found :(</p>
                <a href="" className='main-btt'>Go Home</a>
            </section>
        </main>
    );
}

export default NotFound;