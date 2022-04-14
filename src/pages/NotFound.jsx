import React from 'react';
import "../styles/NotFound.css"

const NotFound = () => {
    return (
        <main className='nf-main'>
            <section className='nf-main__msg'>
                <div className='msg__cont'>
                    <h1>404</h1>
                </div>
                <p>Ups, the page wasn't found.</p>
                <a href="">Go Home</a>
            </section>
        </main>
    );
}

export default NotFound;