import React from 'react';
import ReactJson from 'react-json-view'

const Documentation = ({res}) => {
    let getIP, getIPInfo
    if (res) {
        getIP = {
            method: `curl ${res.url}/ip`,
            response: {
                ip: res.ip
            }

        }
        getIPInfo = {
            method: `curl ${res.url}/getIPinfo`,
            response: {
                res
            }

        }
    }
    return (
        res&&(
        <div className="clean-block features" id="documentation">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Documentation</h2>
                    <h5 className="text-info">curl {`${res.url}/ip`} </h5>
                    <ReactJson style={{textAlign:"left"}} src={getIP}  name={false}
                               displayObjectSize={false}
                               displayDataTypes={false}
                               enableClipboard={false}/>
                    <br/>
                    <h5 className="text-info">curl {`${res.url}/getIpInfo`} </h5>
                    <ReactJson style={{textAlign:"left"}} src={getIPInfo}  name={false}
                               displayObjectSize={false}
                               displayDataTypes={false}
                               enableClipboard={false}/>


                </div>
            </div>
        </div>
)
    );
};

export default Documentation;