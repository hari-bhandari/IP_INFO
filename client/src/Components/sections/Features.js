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
                        <p>This API is fast as it is hosted in reliable web service.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-pencil icon"></i>
                        <h4>FREE</h4>
                        <p>Unlike other API, This api is FREE, so No monthly charges...</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-screen-smartphone icon"></i>
                        <h4>Uses JSON</h4>
                        <p>You'll know how easy it is to work with json.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i className="icon-refresh icon"></i>
                        <h4>Open Source</h4>
                        <p>This whole project is an open source. So, You can help me add new features!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;