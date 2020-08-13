import React from 'react';
import './Header-Blue.css'
import './styles.css'
import Navbar from "../Layout/Navbar";
import Coding from "./WelcomePage/Coding";

const WelcomePage = () => {
    return (
        <div className="header-blue">
            <Navbar/>
            <div className="container hero">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>By developer. For developers...</h1>
                        <p>This is an Open source API to help you get clients IP with a single request.</p>
                        <button className="btn btn-light btn-lg action-button" type="button"><a href="https://documenter.getpostman.com/view/10917205/T1LMk8Zb?version=latest">See documentation on POST MAN</a></button>
                    </div>
                    <div className="col-lg-1">

                    </div>
                    <div className=" col-lg-5 d-none d-lg-block">
                       <Coding/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;