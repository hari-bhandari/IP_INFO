import React from 'react';

const AboutMe = () => {
    return (
        <div className="clean-block about-us">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card clean-card text-center">
                            <div className="card-body info">
                                <h4 className="card-title">John Smith</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons"><a href="#"><i className="icon-social-facebook"></i></a><a href="#"><i className="icon-social-instagram"></i></a><a href="#"><i className="icon-social-twitter"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;