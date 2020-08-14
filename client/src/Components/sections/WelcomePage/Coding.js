import React from 'react';
import ReactJson from 'react-json-view'
const Coding = ({res}) => {
    return (
        <div>
            <h5 className="text-center text-light">Demo Response</h5>
            <ReactJson  src={res} theme="solarized" name={false}
                        displayObjectSize={false}
                        displayDataTypes={false}
                        enableClipboard={false}/>
        </div>
    );
};

export default Coding;