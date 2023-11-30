import React from 'react';
import './header.css';

const header = ({ title = 'My custom header' }) => {
    return (
        <div className="header-container">
            <h1>{title}</h1>
            <hr />
        </div>
    );
};

export default header;
