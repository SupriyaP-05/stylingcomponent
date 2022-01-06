import React from 'react';
import './style.css';

const Main = () => {
    return (
        <>
            <div className="cards">
                <div className="card">ONE</div>
                <div className="card">TWO</div>
                <div className="card">THREE</div>
                <div className="card">FOUR</div>
                <div className="card">FIVE</div>
                <div className="card">SIX</div>
                <div className="card">SEVEN</div>
                <div className="card">EIGHT</div>
                <div className="card">NINE</div>
                <div className="card">TEN</div>
                <div className="card">ELEVEN</div>
                <div className="card">TWELVE</div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>Column One</h2>
                </div>
                <div className="col">
                    <h2>Column Two</h2>
                </div>
                <div className="col">
                    <h2>Column Three</h2>
                </div>
                <div className="col">
                    <h2>Column Four</h2>
                </div>
            </div>
        </>
    )
};

export default Main;
