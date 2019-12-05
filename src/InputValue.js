import React from 'react';

const InputValue = (props) => {
    return (
        <input
            pattern={props.patternInput}
            onChange={props.changeInput} 
            value={props.valueInput} />
    )
}

export default InputValue;