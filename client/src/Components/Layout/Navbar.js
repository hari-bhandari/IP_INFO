import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div className="container-fluid"><a className="navbar-brand" href="#">IP-API.ml</a>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse"
                     id="navcol-1">
                    <ul className="nav navbar-nav">
                        <li className="nav-item" role="presentation"><a className="nav-link" href="#documentation">Documentation</a></li>
                    </ul>
                    <span className="navbar-text mr-auto"> <a className="login" href="#about">About</a>

                        </span>
                    <a className="btn btn-light action-button" role="button" href="#features">Features</a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;