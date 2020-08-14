import React from 'react';

const AboutMe = () => {
    return (
        <section className="about px-4 text-center about--me background" id="about">
            <div className="me py-5">
                <h1 className={"text-uppercase font-staat text-bolder"}>About the developer</h1>
            </div>
            <div className="row m-0">
                <div className="col-sm-5 pl-0">
                    <img src={'https://i.imgur.com/yIRXIZj.png'} className="img-fluid" alt={'my profile picture'}/>
                </div>
                <div className="col-sm-6">
                    <h4 className="font-ram py-2 text-lighter" style={{fontSize:'25px'}}> Hi,I'm Hari Bhandari, </h4>
                    <p className="font-ram  py-2 text-lighter about-me-font-size">
                        A passionate self-taught developer. I like to describe myself as someone persistent and purposeful; I love solving real-life problems, mathematics problems and learning new algorithms.
                        <br/>
                        I started coding back in 2019 after I graduated from my sixth form with AAB. I was impassive about algorithms, but Advanced level further decision wholly altered my mind. It taught me different aspects of programming from learning algorithms to being more Logical. Also, Advanced level Mathematics and Further Mathematics has enhanced my mathematical skills, problems solving skills and most importantly, my analytical skills. I want to pursue a career in computer programming!
                        <br/>
                        Furthermore, I am also interested in creating and learning optimised algorithms.


                    </p>
                    <div className={"d-flex flex-row flex-wrap justify-content-between py-4 "}>
                        <div className="d-flex flex-column ">
                            <p className="text-bolder"><b className="about-me-font-size">Birthday: </b><span className="text-lighter about-me-font-size">10 February 2001</span></p>
                            <p className="text-bolder"><b className="about-me-font-size">Website: </b><span className="text-lighter about-me-font-size"><a href="https://www.haribhandari.me">Hire ME</a></span></p>
                        </div>
                        <div className="d-flex flex-column">
                            <p className="text-bolder"><b className="about-me-font-size">Mail: </b><span className="text-lighter about-me-font-size">2012bhandari.ha@gmail.com</span></p>
                        </div>
                    </div>
                    <a href="https://haribhandari.me"><button className="btn btn-dark text-uppercase mr-3">Check out my portfolio</button></a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;