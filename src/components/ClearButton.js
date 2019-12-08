import React from 'react';

import './ClearButton.css';

const ClearButton = (props) => (
    <div onClick={props.handleClear} className="clearButton">
        {props.children}
    </div>
)

export default ClearButton;