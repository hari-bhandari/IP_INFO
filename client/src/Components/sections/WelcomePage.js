import React from 'react';
import Coding from "./WelcomePage/Coding";

const WelcomePage = () => {
    return (
            <div className="page landing-page ">
                <section className="clean-block clean-hero" style={{color:"rgba(9,162,255,0.85"}}>
                    <div className="row">
                        <div className="text">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                            <button className="btn btn-outline-light btn-lg" type="button">Learn More</button>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default WelcomePage;