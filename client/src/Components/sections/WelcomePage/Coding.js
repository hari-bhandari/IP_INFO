import React from 'react';
import ReactJson from 'react-json-view'
const Coding = () => {
    return (
        <div>
            <ReactJson src={{
                "name": "ModernTecrh Bsoaostcamp",
                "description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
                "website": "https://moderntech.com",
                "phone": "(222) 222-2222",
                "email": "enroll@moderntech.com",
                "address": "19 Horton St, West Bromwich,England B70 7SG,GB",
                "careers": [
                "Web Development",
                "UI/UX",
                "Mobile Development"
                ],
                "housing": false,
                "jobAssistance": true,
                "jobGuarantee": false,
                "acceptGi": true
            }} theme="solarized"></ReactJson>
        </div>
    );
};

export default Coding;