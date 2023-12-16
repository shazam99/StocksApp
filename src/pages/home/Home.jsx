import React from 'react';
import { GiTakeMyMoney } from 'react-icons/gi';
import './Home.css';

const Home = () => {
    return (
        <div className='main'>
            <div className="top-section">
                <h1 className='display-1'>All things finance,<br />right here.</h1>
                <button className='btn green-btn'>Get Started</button>
                <img className='img-fluid' src="images/city1.png" alt="" />
            </div>
            <div className="middle-section row">

                <div className="left-div-middle col-sm-6">
                    <h1 className="display-3">Indian markets at <br />your fingertips.</h1>
                    <p className='text-muted'>Long-term, Short-term, High-risk or Low-risk <br />
                        be the kind of Investor you want!
                    </p>
                </div>
                <div className="right-div-middle col-sm-6">
                    <img className='img-fluid' src="images/stock-vector.jpg" alt="" />
                </div>
            </div>
            <div className="bottom-section">
                <GiTakeMyMoney />
                <h1 className='display-3'>Finance Simplified,<br />in your language.</h1>
                <img className='img-fluid' src="images/graph-image.jpg" alt="" />

            </div>
        </div>
    );
}

export default Home;
