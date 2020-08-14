import React from 'react';

const Features = () => {
    return (
        <div className="clean-block features" id="features">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Features</h2>
                    <p>An open Source API</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 feature-box"><i className="icon-star icon"></i>
                        <h4>Fast and reliable</h4>
                        <p>This API is fast as it is hosted in reliable web service. </p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-pencil icon"></i>
                        <h4>FREE</h4>
                        <p>Unlike other API, This api is FREE, so No monthly charges...If you like this product, You can certainly help me.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon"></i>
                        <h4>Uses JSON</h4>
                        <p>Json is Faster,Readable and Structured which makes json very easy to work with. In addition, Json Objects are simpler to understand as it is self describing. </p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
                        <h4>Open Source</h4>
                        <p>I want to make my code as transparent as glass. In addition, I want to be part of gigantic open source community as well as this would make my project more cost effective. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;